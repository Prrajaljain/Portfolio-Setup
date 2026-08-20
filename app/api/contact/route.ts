import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name is too short').max(100),
  email: z.string().trim().email('Enter a valid email address').max(200),
  projectType: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, 'Message is too short').max(5000),
})

const TO_EMAIL = 'prrajal.jain@gmail.com'

// Very small in-memory rate limiter (per server instance) to deter spam bursts.
const submissions = new Map<string, number[]>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 3

function isRateLimited(ip: string) {
  const now = Date.now()
  const timestamps = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  timestamps.push(now)
  submissions.set(ip, timestamps)
  return timestamps.length > MAX_PER_WINDOW
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[v0] RESEND_API_KEY is not set')
    return NextResponse.json(
      { error: 'Email service is not configured yet.' },
      { status: 500 },
    )
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a minute.' },
      { status: 429 },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? 'Invalid input.'
    return NextResponse.json({ error: message }, { status: 400 })
  }

  const { name, email, projectType, message } = parsed.data

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New message from ${name}${projectType ? ` — ${projectType}` : ''}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin-bottom: 4px;">New portfolio contact</h2>
          <p style="color: #555; margin-top: 0;">Sent from ali-ch.dev style portfolio</p>
          <table style="margin: 16px 0;">
            <tr><td style="padding: 4px 12px 4px 0; font-weight: 600;">Name</td><td>${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 4px 12px 4px 0; font-weight: 600;">Email</td><td>${escapeHtml(email)}</td></tr>
            ${projectType ? `<tr><td style="padding: 4px 12px 4px 0; font-weight: 600;">Project type</td><td>${escapeHtml(projectType)}</td></tr>` : ''}
          </table>
          <p style="font-weight: 600; margin-bottom: 4px;">Message</p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    })

    if (error) {
      console.error('[v0] Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send your message. Please try again.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[v0] Unexpected error sending email:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
