'use client'

import { useState, type FormEvent } from 'react'
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react'
import { profile } from '@/lib/data'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

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
      <div className="flex flex-col items-center gap-3 rounded-[8px] border border-[#E8E4DE] bg-[#FFFFFF] p-8 text-center shadow-rest">
        <CheckCircle2 className="size-10 text-[#D94A10]" />
        <h3 className="text-xl font-semibold tracking-tight text-[#1A1A1A]">Message Sent Successfully!</h3>
        <p className="max-w-sm text-xs leading-relaxed text-[#52525B]">
          Thank you for reaching out &mdash; I&apos;ll get back to you within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-2 rounded-md bg-[#1A1A1A] px-5 py-2 text-xs font-medium text-white shadow-rest transition-all duration-200 hover:bg-[#000000] hover:shadow-hover active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left w-full">
      {/* Name Field */}
      <div className="flex flex-col gap-2.5">
        <label htmlFor="name" className="text-xs font-semibold text-[#1A1A1A] tracking-wide">
          Your Name <span className="text-[#D94A10]">*</span>
        </label>
        <input
          id="name"
          name="name"
          placeholder="Your Name"
          required
          minLength={2}
          maxLength={100}
          className="w-full rounded-md border border-[#E8E4DE] bg-[#FFFFFF] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#8A8580] outline-none transition-colors focus:border-[#D94A10] focus:ring-1 focus:ring-[#D94A10] focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-2.5">
        <label htmlFor="email" className="text-xs font-semibold text-[#1A1A1A] tracking-wide">
          Your Email <span className="text-[#D94A10]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email ID"
          required
          maxLength={200}
          className="w-full rounded-md border border-[#E8E4DE] bg-[#FFFFFF] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#8A8580] outline-none transition-colors focus:border-[#D94A10] focus:ring-1 focus:ring-[#D94A10] focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
        />
      </div>

      {/* Message Field */}
      <div className="flex flex-col gap-2.5">
        <label htmlFor="message" className="text-xs font-semibold text-[#1A1A1A] tracking-wide">
          Your Message <span className="text-[#D94A10]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
          minLength={10}
          maxLength={5000}
          rows={4}
          className="w-full rounded-md border border-[#E8E4DE] bg-[#FFFFFF] p-4 text-sm text-[#1A1A1A] placeholder-[#8A8580] outline-none transition-colors focus:border-[#D94A10] focus:ring-1 focus:ring-[#D94A10] focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
        />
      </div>

      {status === 'error' && (
        <div className="flex flex-col gap-2 rounded-md border border-[#cf2d56]/30 bg-[#cf2d56]/10 px-4 py-3 text-xs text-[#cf2d56]">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="mt-0.5 size-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="ml-6.5 font-semibold text-[#D94A10] hover:underline"
          >
            Or click here to email directly ({profile.email})
          </a>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-md bg-[#F25C1F] px-6 py-3.5 text-sm font-semibold text-white shadow-rest transition-all duration-200 ease-out hover:bg-[#D94A10] hover:shadow-hover hover:-translate-y-[1px] active:translate-y-0 active:shadow-press disabled:pointer-events-none disabled:opacity-60 flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-[#1A1A1A] focus-visible:outline-offset-[3px]"
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
    </form>
  )
}
