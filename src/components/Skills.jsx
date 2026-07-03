import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const LAYERS = [
  {
    label: 'Client',
    tag: 'frontend',
    items: ['React', 'Angular', 'HTML/CSS', 'JavaScript'],
  },
  {
    label: 'Application',
    tag: 'backend & api',
    items: ['ASP.NET Core Web API', 'Node.js', 'PHP', 'C# .NET'],
  },
  {
    label: 'Platform',
    tag: 'cms & mobile',
    items: ['DotNetNuke (DNN)', 'Android'],
  },
  {
    label: 'Data',
    tag: 'persistence',
    items: ['SQL Server', 'PostgreSQL', 'ER modeling'],
  },
  {
    label: 'Infrastructure',
    tag: 'deploy & run',
    items: ['IIS', 'Windows Server', 'Deployment config'],
  },
  {
    label: 'Foundations',
    tag: 'core cs',
    items: ['Java / OOP', 'Networking (OSI, VLANs)', 'Operating Systems', 'Software Engineering'],
  },
]

export default function Skills() {
  const [ref, visible] = useReveal()
  const [active, setActive] = useState(0)

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading index="02" name="skills" title="How the stack fits together" />
      <p className="text-text-muted mb-10 max-w-xl">
        Rather than a grid of logos, here's how the pieces actually stack in a
        project — from what a user clicks, down to what keeps it running.
      </p>

      <div ref={ref} className={`${visible ? 'reveal' : 'opacity-0'}`}>
        <div className="border border-[color:var(--color-border)] rounded-sm overflow-hidden">
          {LAYERS.map((layer, i) => (
            <button
              key={layer.label}
              onClick={() => setActive(i)}
              className={`w-full text-left px-6 py-4 flex items-center gap-4 border-b border-[color:var(--color-border)] last:border-b-0 transition-colors ${
                active === i ? 'bg-elevated-2' : 'bg-elevated hover:bg-elevated-2'
              }`}
            >
              <span className={`font-mono text-xs w-6 shrink-0 ${active === i ? 'text-copper' : 'text-text-muted'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-display font-medium text-text w-32 shrink-0">
                {layer.label}
              </span>
              <span className="font-mono text-xs text-text-muted hidden sm:inline">
                {layer.tag}
              </span>
              <span className="ml-auto text-copper font-mono text-xs">
                {active === i ? '−' : '+'}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {LAYERS[active].items.map((item) => (
            <span
              key={item}
              className="font-mono text-sm px-3 py-1.5 border border-[color:var(--color-border)] rounded-sm text-text bg-elevated"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
