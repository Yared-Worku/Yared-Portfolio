import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const EMAIL = 'your.email@example.com'

export default function Contact() {
  const [ref, visible] = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading index="07" name="contact" title="Let's build something" />

      <div ref={ref} className={`grid md:grid-cols-5 gap-10 ${visible ? 'reveal' : 'opacity-0'}`}>
        <div className="md:col-span-2 space-y-5">
          <p className="text-text-muted leading-relaxed">
            I'm finishing my degree in June 2026 and looking for my next role.
            If you have a project or an opening, I'd like to hear about it.
          </p>
          <div className="space-y-2 font-mono text-sm">
            <a href={`mailto:${EMAIL}`} className="block text-teal hover:text-copper transition-colors">
              {EMAIL}
            </a>
            <a href="#" className="block text-text-muted hover:text-copper transition-colors">
              github.com/your-username
            </a>
            <a href="#" className="block text-text-muted hover:text-copper transition-colors">
              linkedin.com/in/your-profile
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="md:col-span-3 space-y-4">
          <div>
            <label className="font-mono text-xs text-text-muted block mb-1.5" htmlFor="name">
              name
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-elevated border border-[color:var(--color-border)] rounded-sm px-4 py-2.5 text-text focus:outline-none focus:border-copper transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-xs text-text-muted block mb-1.5" htmlFor="email">
              email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-elevated border border-[color:var(--color-border)] rounded-sm px-4 py-2.5 text-text focus:outline-none focus:border-copper transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-xs text-text-muted block mb-1.5" htmlFor="message">
              message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-elevated border border-[color:var(--color-border)] rounded-sm px-4 py-2.5 text-text focus:outline-none focus:border-copper transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="font-mono text-sm px-5 py-3 bg-copper text-ink font-medium rounded-sm hover:bg-teal transition-colors"
          >
            send --message
          </button>
        </form>
      </div>
    </section>
  )
}
