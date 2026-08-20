'use client'

import { useState, type FormEvent } from 'react'
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react'
import { profile } from '@/lib/data'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const linkedinUrl = profile.socials.find((s) => s.label === 'LinkedIn')?.href ?? 'https://linkedin.com/in/prajaljain23'

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(data?.error ?? 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-md border border-[#e6e5e0] bg-[#ffffff] p-8 text-center">
        <CheckCircle2 className="size-10 text-[#76b900]" />
        <h3 className="text-xl font-semibold tracking-tight text-[#26251e]">Message Sent Successfully!</h3>
        <p className="max-w-sm text-xs leading-relaxed text-[#5a5852]">
          Thank you for reaching out &mdash; I&apos;ll get back to you within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-2 rounded-md bg-[#26251e] px-5 py-2 text-xs font-medium text-white transition-all hover:bg-[#000000]"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left w-full">
      {/* Name Field */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-semibold text-[#26251e] tracking-wide">
          Your Name <span className="text-[#f54e00]">*</span>
        </label>
        <input
          id="name"
          name="name"
          placeholder="Your Name"
          required
          minLength={2}
          maxLength={100}
          className="w-full rounded-md border border-[#e6e5e0] bg-[#ffffff] px-4 py-3 text-sm text-[#26251e] placeholder-[#807d72] outline-none transition-colors focus:border-[#f54e00]"
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold text-[#26251e] tracking-wide">
          Your Email <span className="text-[#f54e00]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@domain.com"
          required
          maxLength={200}
          className="w-full rounded-md border border-[#e6e5e0] bg-[#ffffff] px-4 py-3 text-sm text-[#26251e] placeholder-[#807d72] outline-none transition-colors focus:border-[#f54e00]"
        />
      </div>

      {/* Message Field (Exact Placeholder) */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-[#26251e] tracking-wide">
          Your Message <span className="text-[#f54e00]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="&quot;What are you building?&quot;"
          required
          minLength={10}
          maxLength={5000}
          rows={4}
          className="w-full rounded-md border border-[#e6e5e0] bg-[#ffffff] p-4 text-sm text-[#26251e] placeholder-[#807d72] outline-none transition-colors focus:border-[#f54e00]"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-2.5 rounded-md border border-[#cf2d56]/30 bg-[#cf2d56]/10 px-4 py-3 text-xs text-[#cf2d56]">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-1 w-full rounded-md bg-[#f54e00] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#d04200] disabled:pointer-events-none disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="size-4" />
            <span>Send Message</span>
          </>
        )}
      </button>

      {/* Alternative Quick-Connect Option */}
      <p className="mt-2 text-center text-xs text-[#5a5852] leading-relaxed">
        Prefer a direct chat? Find me on{' '}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[#f54e00] underline underline-offset-4 transition-colors hover:text-[#d04200]"
        >
          LinkedIn
        </a>{' '}
        or drop me an{' '}
        <a
          href={`mailto:${profile.email}`}
          className="font-semibold text-[#f54e00] underline underline-offset-4 transition-colors hover:text-[#d04200]"
        >
          Email
        </a>
        .
      </p>
    </form>
  )
}
