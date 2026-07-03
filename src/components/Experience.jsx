import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const ITEMS = [
  {
    role: 'IT Intern',
    org: 'XOKA IT SOLUTION PLC',
    location: 'Addis Ababa, Ethiopia',
    period: 'June 2025 – Sep 2025',
    points: [
      'Developed an Attendance Management module using ZK iFace 302 fingerprint hardware for real-time employee identification.',
      'Engineered a C# .NET background service to automatically fetch and sync biometric data at precise intervals into a SQL Server database.',
      'Built the frontend in Angular, and managed complete server hosting and end-to-end deployment.',
      "Leveraged DotNetNuke's modular architecture to deploy and manage web application modules, configure user permissions, and structure the portal — integrating the Angular frontend within the CMS environment.",
    ],
    link: { label: 'xokait.com', url: 'http://xokait.com' },
  },
]

export default function Experience() {
  const [ref, visible] = useReveal()

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading index="04" name="experience" title="Experience" />

      <div ref={ref} className={`space-y-8 ${visible ? 'reveal' : 'opacity-0'}`}>
        {ITEMS.map((item) => (
          <div key={item.org} className="grid md:grid-cols-4 gap-6 border-l border-[color:var(--color-border)] pl-6 relative">
            <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-copper" />
            <div className="md:col-span-1">
              <p className="font-mono text-xs text-teal">{item.period}</p>
              <h3 className="font-display font-semibold text-text mt-1">{item.role}</h3>
              <p className="text-text-muted text-sm">{item.org}</p>
              <p className="text-text-muted text-xs mt-1">{item.location}</p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-copper hover:text-teal transition-colors mt-2 inline-block"
                >
                  {item.link.label} ↗
                </a>
              )}
            </div>
            <ul className="md:col-span-3 space-y-2">
              {item.points.map((pt, i) => (
                <li key={i} className="text-text-muted text-sm leading-relaxed flex gap-2">
                  <span className="text-copper shrink-0">›</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}