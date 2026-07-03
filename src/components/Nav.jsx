import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'education', label: 'education' },
    { id: 'resume', label: 'resume', cta: true },
  { id: 'contact', label: 'contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur border-b border-[color:var(--color-border)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => go('top')}
          className="font-mono text-sm text-teal hover:text-copper transition-colors"
        >
          yared@portfolio<span className="text-text-muted">:~$</span>
        </button>

       <ul className="hidden md:flex items-center gap-7 font-mono text-sm text-text-muted">
  {LINKS.map((l) =>
    l.cta ? (
      <li key={l.id}>
        <button
          onClick={() => go(l.id)}
          className="font-mono text-xs px-3 py-1.5 border border-copper text-copper rounded-sm hover:bg-copper hover:text-ink transition-colors"
        >
          {l.label}
        </button>
      </li>
    ) : (
      <li key={l.id}>
        <button
          onClick={() => go(l.id)}
          className="hover:text-copper transition-colors"
        >
          {l.label}
        </button>
      </li>
    )
  )}
</ul>

        <button
          className="md:hidden font-mono text-text-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? '[x]' : '[menu]'}
        </button>
      </nav>

      {open && (
  <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 font-mono text-sm text-text-muted bg-ink/95 border-b border-[color:var(--color-border)]">
    {LINKS.map((l) =>
      l.cta ? (
        <li key={l.id} className="py-2">
          <button
            onClick={() => go(l.id)}
            className="font-mono text-xs px-3 py-1.5 border border-copper text-copper rounded-sm hover:bg-copper hover:text-ink transition-colors"
          >
            {l.label}
          </button>
        </li>
      ) : (
        <li key={l.id}>
          <button
            onClick={() => go(l.id)}
            className="py-2 w-full text-left hover:text-copper transition-colors"
          >
            {l.label}
          </button>
        </li>
      )
    )}
  </ul>
)}
    </header>
  )
}
