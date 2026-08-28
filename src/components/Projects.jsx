import { useState, useEffect, useRef } from 'react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { createPortal } from 'react-dom'

// ERPNext Backend & Customization
import erp1 from '../assets/projects/ERPNext/erp1.png'
import erp2 from '../assets/projects/ERPNext/erp2.png'
import erp3 from '../assets/projects/ERPNext/erp3.png'
import erp4 from '../assets/projects/ERPNext/erp4.png'
import erp5 from '../assets/projects/ERPNext/erp5.png'

// ERPNext Mobile App
import erp6 from '../assets/projects/ERPNext/erp6.jpg'
import erp7 from '../assets/projects/ERPNext/erp7.jpg'
import erp8 from '../assets/projects/ERPNext/erp8.jpg'
import erp9 from '../assets/projects/ERPNext/erp9.jpg'
import erp10 from '../assets/projects/ERPNext/erp10.jpg'
import erp11 from '../assets/projects/ERPNext/erp11.jpg'
import erp12 from '../assets/projects/ERPNext/erp12.png'
import erp13 from '../assets/projects/ERPNext/erp13.png'

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

// online shop
import custdetail from '../assets/projects/shoping/custdetail.png'
import last from '../assets/projects/shoping/last.png'
import payment from '../assets/projects/shoping/payment.png'
import s1 from '../assets/projects/shoping/s1.png'
import s2 from '../assets/projects/shoping/s2.png'
import s3 from '../assets/projects/shoping/s3.png'
import s4 from '../assets/projects/shoping/s4.png'
import shipdetail from '../assets/projects/shoping/shipdetail.png'

// online exam
import start from '../assets/projects/exam/start.png'
import completed from '../assets/projects/exam/completed.png'
import s1e from '../assets/projects/exam/s1e.png'
import s2e from '../assets/projects/exam/s2e.png'
import s3e from '../assets/projects/exam/s3e.png'
import summary from '../assets/projects/exam/summary.png'


const PROJECTS = [
  {
    name: 'ERPNext Customization & Module Development',
    role: 'Frappe / ERPNext Developer',
    description:
      'Worked across the full Frappe/ERPNext stack — from framework internals to production data — to design and ship custom business modules on top of ERPNext and HRMS. Built new DocTypes from scratch (fields, permissions, naming series and list/report views) and extended existing ones to fit organization-specific workflows. Developed and published custom Web Forms and Web Pages for non-technical end users and worked directly within ERPNext\'s native Workspace and module structure to integrate new features without breaking existing flows. On the backend, wrote whitelisted Python REST APIs (.py) for custom business logic, client-side scripts (.js) for real-time form behavior and validation, and JSON schema definitions for DocType and workspace configuration. Also worked hands-on with the underlying MariaDB database — running direct queries to verify data integrity, debug sync issues and understand how Frappe\'s ORM maps to actual table structure — giving a full-stack grasp of the framework from UI down to raw storage. These same REST APIs went on to power an independent mobile app for employee attendance and leave requests, closing the loop from backend design to a real-world client integration.',
    stack: ['Frappe Framework', 'ERPNext', 'HRMS', 'Python', 'JavaScript', 'DocTypes', 'Web Forms', 'JSON', 'MariaDB'],
    links: { code: 'https://github.com/Yared-Worku/ERPNext_Cusomization.git', demo: '#' },
    images: [erp5, erp4, erp1, erp2, erp3],
  },
{
    name: 'ERPNext Mobile Attendance App',
    role: 'Mobile App Engineer',
    description:
      'An enterprise-grade, cross-platform mobile app built to replace costly physical biometric devices by allowing employees to check in directly from their phones. Features strict GPS geofencing that calculates employee latitude, longitude and office proximity before allowing check-ins. Built on an offline-first architecture using Zustand, it locally queues offline check-ins and auto-syncs with custom Frappe REST APIs once backend connectivity is restored. Developed with an international feature-first project structure, the app incorporates native biometric authentication, SecureStore session management, localization (i18n), dark/light mode preferences, structured screen navigation, real-time attendance history logging and leave request tracking.',
    stack: [
      'React Native',
      'Expo',
      'Zustand',
      'Node.js',
      'NativeWind',
      'Local Biometrics',
      'SecureStore',
      'Geofencing / GPS',
      'Frappe REST API',
    ],
    links: { code: 'https://github.com/Yared-Worku/ERPNext-Attendance-App.git', demo: '#' },
    images: [erp6, erp7, erp8, erp9, erp10, erp11, erp12, erp13],
  },
  {
    name: 'HUCMS — Clinic Management System',
    role: 'Lead Developer',
    description:
      'An end-to-end medical platform for a university health center. DNN CMS orchestrates multi-tenant access and complex user roles, while a React + C# ASP.NET / SQL Server backend automates patient registration, diagnostics, lab testing, hospital referrals, prescription dispensing, and medical certificate generation.',
    stack: ['React', 'C# ASP.NET', 'SQL Server', 'DNN CMS', 'IIS'],
    links: { code: 'https://github.com/Yared-Worku/HUCMS.git', demo: '#' },
    images: [hucmsHome, hucmsDashboard, hucmsMyApplication, hucmsMyTask, hucmsMedicalCertificate, hucmsPaymentMethod],
  },
  {
    name: 'Book Shelf Management System',
    brand: 'Bulkybookweb',
    role: 'Full-Stack Developer',
    description:
      'A containerized online bookstore with role-based access control — users manage only their own listings with read-only access to others, while admins have global edit/delete and user management privileges. Built on ASP.NET Core (C#), developed against SQL Server, migrated to PostgreSQL in production, and deployed on Render via Docker.',
    stack: ['ASP.NET Core', 'Docker', 'PostgreSQL', 'SQL Server'],
    links: { code: 'https://github.com/Yared-Worku/Bulkybook.git', demo: 'https://bulkybookweb.onrender.com' },
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
    links: { code: '#', demo: 'https://online-store-eight-zeta.vercel.app' },
    images: [s1, s2, custdetail, shipdetail, payment, s3, s4],
  },
  {
    name: 'Online Examination Platform',
    role: 'Full-Stack Developer',
    description:
      'A lightweight, responsive online testing platform for universities and high schools. A JSON-driven architecture streams real-time exam data, question banks, and grading results, with a backend built to natively support multiple exam formats and institutional user levels.',
    stack: ['React', 'ASP.NET Core Web API', 'JSON'],
    links: { code: '#', demo: 'https://online-examination-bxjv.vercel.app' },
    images: [start, s1e, s2e, s3e, summary, completed],
  },
]

function ProjectSlider({ images, name }) {
  const [index, setIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)
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

  useEffect(() => {
    if (!zoomed) return
    const onKey = (e) => {
      if (e.key === 'Escape') setZoomed(false)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [zoomed, images.length])

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[4/3] flex items-center justify-center border border-dashed border-[color:var(--color-border)] rounded-sm bg-ink/40">
        <span className="font-mono text-xs text-text-muted">no preview yet</span>
      </div>
    )
  }

  return (
    <>
      <div
        className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-[color:var(--color-border)] bg-ink group/slider cursor-zoom-in"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onClick={() => setZoomed(true)}
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

        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-ink/80 border border-[color:var(--color-border)] text-text-muted opacity-0 group-hover/slider:opacity-100 transition-opacity flex items-center justify-center font-mono text-[10px]">
          ⤢
        </div>
      </div>

      {zoomed && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-ink/95 flex items-center justify-center p-6 cursor-zoom-out"
          onClick={() => setZoomed(false)}
        >
          <button
            onClick={() => setZoomed(false)}
            aria-label="Close"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-elevated border border-[color:var(--color-border)] text-text hover:text-copper transition-colors flex items-center justify-center font-mono text-sm"
          >
            ✕
          </button>

          <img
            src={images[index]}
            alt={`${name} screenshot ${index + 1} enlarged`}
            className="max-w-full max-h-full object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous screenshot"
                className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-elevated border border-[color:var(--color-border)] text-text hover:text-copper transition-colors flex items-center justify-center font-mono text-lg"
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Next screenshot"
                className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-elevated border border-[color:var(--color-border)] text-text hover:text-copper transition-colors flex items-center justify-center font-mono text-lg"
              >
                ›
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-text-muted">
                {index + 1} / {images.length}
              </div>
            </>
          )}
        </div>,
        document.body
      )}
    </>
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