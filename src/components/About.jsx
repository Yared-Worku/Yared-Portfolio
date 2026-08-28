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
            I'm an Information Technology graduate (BSc) from <b>Hawassa University</b>,
            with a focus on enterprise-level modular systems. I work extensively across 
            DotNetNuke (DNN) CMS, full-stack .NET, and the <b>Frappe / ERPNext</b> framework, 
            alongside hands-on experience with Node.js (Express) and JSON-driven web architectures 
            — including online marketing sites and school-based online testing platforms.
          </p>
          <p>
            On the mobile side, I engineer enterprise-grade cross-platform applications using 
            <b>React Native (Expo)</b>, <b>Zustand</b> state management, and Node.js backends. 
            I structure mobile projects with international, feature-first architectures and build 
            complex device integrations — including native biometrics, GPS geofencing (calculating 
            latitude/longitude for check-in validation), offline-first queue syncing, Expo SecureStore 
            session handling, localization (i18n), and dynamic dark/light theme preferences.
          </p>
          <p>
            On the data side, I design and manage enterprise databases across SQL Server, PostgreSQL, 
            and MariaDB — schema design, normalization, stored procedures, SQL Server Agent jobs, 
            and views. During my internship at XOKA IT SOLUTION PLC, I bridged hardware and software 
            directly — building a biometric attendance system on ZK iFace 302 fingerprint hardware, 
            with a C# .NET background service syncing data into SQL Server, and an Angular front end 
            deployed through DNN's modular architecture.
          </p>
          <p>
            I like architecting scalable solutions end to end — from clinic management systems 
            and ERPNext custom modules to location-aware mobile applications — and deploying 
            them across IIS, Docker, and cloud platforms.
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="border border-[color:var(--color-border)] bg-elevated rounded-sm p-6 font-mono text-sm">
            <p className="text-text-muted mb-3">// quick facts</p>
            <dl className="space-y-3">
              <div className="flex justify-between gap-4">
                <dt className="text-text-muted">location</dt>
                <dd className="text-text text-right">Addis Ababa, Ethiopia</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-muted">degree</dt>
                <dd className="text-text text-right">BSc, Information Technology</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-muted">CGPA</dt>
                <dd className="text-text text-right">3.45</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-muted">Exit Exam Result</dt>
                <dd className="text-text text-right">76 out of 100</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-muted">graduating</dt>
                <dd className="text-text text-right">June 25, 2026</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-muted">focus</dt>
                <dd className="text-text text-right">Full-stack & Mobile development</dd>
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