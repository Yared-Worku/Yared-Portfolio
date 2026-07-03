import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

export default function Education() {
  const [ref, visible] = useReveal()

  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading index="05" name="education" title="Education" />

      <div
        ref={ref}
        className={`border border-[color:var(--color-border)] bg-elevated rounded-sm p-6 flex flex-col sm:flex-row sm:items-start gap-4 justify-between ${
          visible ? 'reveal' : 'opacity-0'
        }`}
      >
        <div>
          <h3 className="font-display font-semibold text-text text-lg">
            Bachelor of Science (BSc) Degree In Information Technology
          </h3>
          <a
            href="https://www.hu.edu.et"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted text-sm mt-1 inline-block hover:text-copper transition-colors"
          >
            Hawassa University 
          </a>
          <p className="text-text-muted text-xs mt-1">
            Hawassa, Sidama, Ethiopia
          </p>
        </div>
        <div className="flex sm:flex-col items-start sm:items-end gap-3 sm:gap-1 shrink-0">
          <span className="font-mono text-sm text-copper">
            Feb 27, 2023 – June 25, 2026
          </span>
          <span className="font-mono text-xs text-text-muted">
            CGPA: 3.45 (Distinction)
          </span>
            <span className="font-mono text-xs text-text-muted">
            Exit Exam Result: 76 out of 100
          </span>
        </div>
      </div>
    </section>
  )
}