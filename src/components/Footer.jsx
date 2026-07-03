export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)]">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-text-muted">
        <span>© {new Date().getFullYear()} Yared Worku — built with React</span>
        <span>designed &amp; coded from Ethiopia 🇪🇹</span>
      </div>
    </footer>
  )
}
