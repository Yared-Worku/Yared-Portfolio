import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const PROJECTS = [
  {
    name: 'Bulkybookweb (Book Shelf)',
    brand: 'YD IT Solutions',
    description:
      'A bookstore web application handling catalog browsing, orders, and admin management. Runs on SQL Server locally and PostgreSQL in production, deployed to Render and IIS with environment-based provider switching.',
    stack: ['ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'SQL Server'],
    links: { code: '#', demo: '#' },
  },
  {
    name: 'Online Examination Platform',
    description:
      'A platform for creating, administering, and grading online exams, built with a React front end talking to an ASP.NET Core Web API backend.',
    stack: ['React', 'ASP.NET Core Web API', 'SQL Server'],
    links: { code: '#', demo: '#' },
  },
  {
    name: 'JSON-Driven Marketing Site',
    description:
      'A content-managed marketing website where page content is driven by JSON configuration rather than hardcoded markup, paired with a React front end and an ASP.NET Core Web API backend.',
    stack: ['React', 'ASP.NET Core Web API', 'JSON'],
    links: { code: '#', demo: '#' },
  },
]

export default function Projects() {
  const [ref, visible] = useReveal()

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading index="03" name="projects" title="Selected projects" />

      <div ref={ref} className={`grid md:grid-cols-2 gap-6 ${visible ? 'reveal' : 'opacity-0'}`}>
        {PROJECTS.map((p) => (
          <div
            key={p.name}
            className="group border border-[color:var(--color-border)] bg-elevated rounded-sm p-6 flex flex-col hover:border-copper/60 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-text">{p.name}</h3>
              {p.brand && (
                <span className="font-mono text-[11px] text-teal shrink-0 mt-1">{p.brand}</span>
              )}
            </div>
            <p className="text-text-muted text-sm leading-relaxed mt-3 flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] px-2 py-1 rounded-sm border border-[color:var(--color-border)] text-text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex gap-5 mt-5 font-mono text-sm">
              <a href={p.links.code} className="text-text-muted hover:text-copper transition-colors">
                code →
              </a>
              <a href={p.links.demo} className="text-text-muted hover:text-copper transition-colors">
                demo →
              </a>
            </div>
          </div>
        ))}

        <div className="border border-dashed border-[color:var(--color-border)] rounded-sm p-6 flex flex-col items-center justify-center text-center">
          <p className="font-mono text-sm text-text-muted">
            more on GitHub
          </p>
          <a
            href="#"
            className="mt-3 font-mono text-sm text-copper hover:text-teal transition-colors"
          >
            github.com/your-username →
          </a>
        </div>
      </div>
    </section>
  )
}
