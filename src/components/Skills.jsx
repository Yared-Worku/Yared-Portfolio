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
    items: ['ASP.NET Core', 'ADO.NET Core', 'Node.js (Express)', 'C#', 'PHP'],
  },
  {
    label: 'Platform',
    tag: 'cms & mobile',
    items: ['DotNetNuke (DNN) CMS', 'Docker', 'Android'],
  },
  {
    label: 'Data',
    tag: 'persistence',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    label: 'Hardware & Integration',
    tag: 'biometric & tooling',
    items: ['ZK iFace Biometric Integration', 'Background Services', 'Git', 'Render'],
  },
  {
    label: 'Practice',
    tag: 'soft skills',
    items: ['Modular System Design', 'Technical Documentation', 'Hardware-Software Interfacing'],
  },
]

export default function Skills() {
  const [ref, visible] = useReveal()

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading index="02" name="skills" title="How the stack fits together" />
      <p className="text-text-muted mb-14 max-w-xl">
        Rather than a grid of logos, here's how the pieces actually stack in a
        project — from what a user clicks, down to what keeps it running.
      </p>

      <div ref={ref} className={`relative ${visible ? 'reveal' : 'opacity-0'}`}>
        {/* connector line */}
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[color:var(--color-border)] overflow-hidden">
          <div className="absolute left-0 top-0 w-full h-16 bg-gradient-to-b from-transparent via-copper to-transparent animate-[signal_3.5s_linear_infinite]" />
        </div>

        <div className="space-y-3">
          {LAYERS.map((layer, i) => (
            <div key={layer.label} className="group relative pl-11">
              {/* node dot */}
              <span className="absolute left-0 top-5 w-[31px] flex justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-border)] group-hover:bg-copper transition-colors duration-300 ring-4 ring-ink" />
              </span>

              <div className="border border-[color:var(--color-border)] bg-elevated rounded-sm p-5 transition-all duration-300 group-hover:border-copper/60 group-hover:bg-elevated-2 group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_24px_-8px_rgba(217,142,74,0.25)]">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="font-mono text-xs text-copper">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display font-semibold text-text">
                    {layer.label}
                  </h3>
                  <span className="font-mono text-xs text-text-muted">
                    {layer.tag}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2.5 py-1 rounded-sm border border-[color:var(--color-border)] text-text-muted group-hover:text-text transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}