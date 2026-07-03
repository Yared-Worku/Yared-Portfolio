import { useState, useEffect, useRef } from 'react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

// HUCMS
import hucmsHome from '../assets/projects/hucms_home.png'
import hucmsDashboard from '../assets/projects/hucms_dashboard.png'
import hucmsMyApplication from '../assets/projects/hucms_myapplication.png'
import hucmsMyTask from '../assets/projects/hucms_mytask.png'
import hucmsMedicalCertificate from '../assets/projects/hucms_medical_certificate.png'
import hucmsPaymentMethod from '../assets/projects/hucms_payment_method.png'

// Book Shelf
import bsLogin from '../assets/projects/bs_login.png'
import bsUser from '../assets/projects/bs_user.png'
import bsRole from '../assets/projects/bs_role.png'
import bsAdmin from '../assets/projects/bs_admin.png'

// BPM
import bpmTopic from '../assets/projects/bpm_topic.png'
import bpmForm from '../assets/projects/bpm_form.png'
import bpmOrganization from '../assets/projects/bpm_organization.png'
import bpmDepartment from '../assets/projects/bpm_department.png'

const PROJECTS = [
  {
    name: 'HUCMS — Clinic Management System',
    role: 'Lead Developer',
    description:
      'An end-to-end medical platform for a university health center. DNN CMS orchestrates multi-tenant access and complex user roles, while a React + C# ASP.NET / SQL Server backend automates patient registration, diagnostics, lab testing, hospital referrals, prescription dispensing, and medical certificate generation.',
    stack: ['React', 'C# ASP.NET', 'SQL Server', 'DNN CMS', 'IIS'],
    links: { code: '#', demo: '#' },
    images: [hucmsHome, hucmsDashboard, hucmsMyApplication, hucmsMyTask, hucmsMedicalCertificate, hucmsPaymentMethod],
  },
  {
    name: 'Book Shelf Management System',
    brand: 'Bulkybookweb',
    role: 'Full-Stack Developer',
    description:
      'A containerized online bookstore with role-based access control — users manage only their own listings with read-only access to others, while admins have global edit/delete and user management privileges. Built on ASP.NET Core (C#), developed against SQL Server, migrated to PostgreSQL in production, and deployed on Render via Docker.',
    stack: ['ASP.NET Core', 'Docker', 'PostgreSQL', 'SQL Server'],
    links: { code: '#', demo: 'https://bulkybookweb.onrender.com' },
    images: [bsLogin, bsUser, bsRole, bsAdmin],
  },
  {
    name: 'Workflow Management System (BPM)',
    role: 'Full-Stack Developer',
    description:
      'A local Business Process Management system built on DNN CMS to simplify and automate organizational workflows. A React frontend backed by C# ASP.NET and SQL Server enforces strict, automated state transitions across distinct multi-user roles, fully deployed on local IIS.',
    stack: ['React', 'C# ASP.NET', 'SQL Server', 'DNN CMS', 'IIS'],
    links: { code: '#', demo: '#' },
    images: [bpmTopic, bpmForm, bpmOrganization, bpmDepartment],
  },
  {
    name: 'HU Building Maintenance Project',
    role: 'Full-Stack Developer',
    description:
      'A tracking and reporting tool for university infrastructure management, built in PHP, paired with a native Android app extending the same system to mobile users for on-the-go tracking and reporting.',
    stack: ['PHP', 'Android'],
    links: { code: '#', demo: '#' },
    images: [],
  },
  {
    name: 'E-Commerce Product Showcase',
    role: 'Full-Stack Developer',
    description:
      'A decoupled product showcase with a React frontend and ASP.NET Core Web API backend, using a flexible JSON-driven data layer for dynamic catalog rendering and multi-category filtering without traditional database overhead.',
    stack: ['React', 'ASP.NET Core Web API', 'JSON'],
    links: { code: '#', demo: '#' },
    images: [],
  },
  {
    name: 'Online Examination Platform',
    role: 'Full-Stack Developer',
    description:
      'A lightweight, responsive online testing platform for universities and high schools. A JSON-driven architecture streams real-time exam data, question banks, and grading results, with a backend built to natively support multiple exam formats and institutional user levels.',
    stack: ['React', 'ASP.NET Core Web API', 'JSON'],
    links: { code: '#', demo: '#' },
    images: [],
  },
]

function ProjectSlider({ images, name }) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    if (images.length < 2) return
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 4000)
    return () => clearInterval(timerRef.current)
  }, [images.length])

  const pause = () => clearInterval(timerRef.current)
  const resume = () => {
    if (images.length < 2) return
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 4000)
  }

  const prev = (e) => {
    e.stopPropagation()
    setIndex((i) => (i - 1 + images.length) % images.length)
  }
  const next = (e) => {
    e.stopPropagation()
    setIndex((i) => (i + 1) % images.length)
  }

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[4/3] flex items-center justify-center border border-dashed border-[color:var(--color-border)] rounded-sm bg-ink/40">
        <span className="font-mono text-xs text-text-muted">no preview yet</span>
      </div>
    )
  }

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-[color:var(--color-border)] bg-ink group/slider"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${name} screenshot ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous screenshot"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-ink/80 border border-[color:var(--color-border)] text-text opacity-0 group-hover/slider:opacity-100 transition-opacity flex items-center justify-center font-mono text-xs"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next screenshot"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-ink/80 border border-[color:var(--color-border)] text-text opacity-0 group-hover/slider:opacity-100 transition-opacity flex items-center justify-center font-mono text-xs"
          >
            ›
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation()
                  setIndex(i)
                }}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? 'bg-copper' : 'bg-text-muted/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function Projects() {
  const [ref, visible] = useReveal()

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading index="03" name="projects" title="Selected projects" />

      <div ref={ref} className={`space-y-6 ${visible ? 'reveal' : 'opacity-0'}`}>
        {PROJECTS.map((p) => (
          <div
            key={p.name}
            className="group border border-[color:var(--color-border)] bg-elevated rounded-sm p-6 grid md:grid-cols-5 gap-6 hover:border-copper/60 transition-colors"
          >
            <div className="md:col-span-2">
              <ProjectSlider images={p.images} name={p.name} />
            </div>

            <div className="md:col-span-3 flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-text">{p.name}</h3>
                {p.brand && (
                  <span className="font-mono text-[11px] text-teal shrink-0 mt-1">{p.brand}</span>
                )}
              </div>
              {p.role && (
                <p className="font-mono text-[11px] text-copper mt-1">{p.role}</p>
              )}
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
                {p.links.demo !== '#' && (
                  <a
                    href={p.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-copper transition-colors"
                  >
                    demo →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="border border-dashed border-[color:var(--color-border)] rounded-sm p-6 flex flex-col items-center justify-center text-center">
          <p className="font-mono text-sm text-text-muted">more on GitHub</p>
          <a
            href="https://github.com/Yared-Worku"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 font-mono text-sm text-copper hover:text-teal transition-colors"
          >
            github.com/Yared-Worku →
          </a>
        </div>
      </div>
    </section>
  )
}