import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading index="01" name="about" title="About" />
      <div
        ref={ref}
        className={`grid md:grid-cols-5 gap-10 ${visible ? 'reveal' : 'opacity-0'}`}
      >
        <div className="md:col-span-3 space-y-4 text-text-muted leading-relaxed">
          <p>
            I'm an Information Technology graduate from Hawassa University Institute of
            Technology, finishing my degree in June 2026. My interest sits at the
            intersection of building usable interfaces and the backend systems that
            keep them reliable.
          </p>
          <p>
            During my internship at XOKA IT SOLUTION PLC, I worked across a genuinely
            wide stack — from wiring up a biometric access system on ZK iFace 302
            hardware, to writing C# background services, to shipping Angular front
            ends and maintaining sites on DotNetNuke CMS. That breadth taught me to
            move comfortably between layers instead of specializing too early.
          </p>
          <p>
            Outside of coursework, I build my own projects end to end — from schema
            design to deployment — because I'd rather learn a system by shipping it
            than by reading about it.
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="border border-[color:var(--color-border)] bg-elevated rounded-sm p-6 font-mono text-sm">
            <p className="text-text-muted mb-3">// quick facts</p>
            <dl className="space-y-3">
              <div className="flex justify-between gap-4">
                <dt className="text-text-muted">location</dt>
                <dd className="text-text text-right">Ethiopia</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-muted">degree</dt>
                <dd className="text-text text-right">BSc, Information Technology</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-muted">graduating</dt>
                <dd className="text-text text-right">June 2026</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-muted">focus</dt>
                <dd className="text-text text-right">Full-stack development</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-muted">status</dt>
                <dd className="text-teal text-right">Open to opportunities</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
