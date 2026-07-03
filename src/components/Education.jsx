import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

export default function Education() {
  const [ref, visible] = useReveal()

  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading index="05" name="education" title="Education" />

      <div
        ref={ref}
        className={`border border-[color:var(--color-border)] bg-elevated rounded-sm p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between ${
          visible ? 'reveal' : 'opacity-0'
        }`}
      >
        <div>
          <h3 className="font-display font-semibold text-text text-lg">
            BSc in Information Technology
          </h3>
          <p className="text-text-muted text-sm mt-1">
            Hawassa University Institute of Technology
          </p>
        </div>
        <span className="font-mono text-sm text-copper shrink-0">
          Expected June 2026
        </span>
      </div>
    </section>
  )
}
