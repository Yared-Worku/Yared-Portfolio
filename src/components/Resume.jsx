import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const RESUME_PATH = '/resume/Yared_Worku_Tegegn_CV.pdf'
const RESUME_FILENAME = 'Yared_Worku_Tegegn_CV.pdf'

export default function Resume() {
  const [ref, visible] = useReveal()

  return (
    <section id="resume" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading index="06" name="resume" title="Resume" />

      <div
        ref={ref}
        className={`border border-[color:var(--color-border)] bg-elevated rounded-sm p-6 flex flex-col sm:flex-row sm:items-center gap-5 justify-between ${
          visible ? 'reveal' : 'opacity-0'
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 shrink-0 rounded-sm border border-[color:var(--color-border)] flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="text-copper"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
          </div>
          <div>
            <h3 className="font-display font-semibold text-text">
              Yared Worku Tegegn — CV
            </h3>
            <p className="font-mono text-xs text-text-muted mt-1">
              PDF · updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>

        <div className="flex gap-3 shrink-0">
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-4 py-2.5 border border-[color:var(--color-border)] text-text-muted rounded-sm hover:text-text hover:border-teal transition-colors"
          >
            view --pdf
          </a>
          <a
            href={RESUME_PATH}
            download={RESUME_FILENAME}
            className="font-mono text-sm px-4 py-2.5 bg-copper text-ink font-medium rounded-sm hover:bg-teal transition-colors"
          >
            download ↓
          </a>
        </div>
      </div>
    </section>
  )
}
