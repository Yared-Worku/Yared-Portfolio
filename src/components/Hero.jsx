import { useEffect, useState } from 'react'
import myPhoto from '../assets/yared.jpg'

const ROLE = 'Full-Stack Software Developer'

function TypewriterEffect() {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      i++
      setTyped(ROLE.slice(0, i))
      if (i >= ROLE.length) {
        clearInterval(t)
        setDone(true)
      }
    }, 45)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      {typed}
      {!done && <span className="caret">|</span>}
    </>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center bg-grid overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-copper) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Your Original Content */}
        <div className="flex-1 w-full">
          <p className="font-mono text-sm text-teal mb-5">
            $ whoami
          </p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-text text-glow">
            Yared Worku
          </h1>
          <p className="font-mono text-lg md:text-xl text-copper mt-4 min-h-[1.75rem]">
            <TypewriterEffect />
          </p>
    <p className="mt-6 max-w-xl text-text-muted leading-relaxed">
  BSc Degree in Information Technology from Hawassa University. I design and ship full systems end to end — from database
  schema to deployment — with a focus on DotNetNuke (DNN) CMS, full-stack
  .NET, and JSON-driven architectures. Recent work spans a hospital clinic
  platform, a biometric attendance system, and a .NET Core containerized bookstore
  app deployed on Render.
   </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="font-mono text-sm px-5 py-3 bg-copper text-ink font-medium rounded-sm hover:bg-teal transition-colors"
            >
              view --projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="font-mono text-sm px-5 py-3 border border-[color:var(--color-border)] text-text-muted rounded-sm hover:text-text hover:border-teal transition-colors"
            >
              contact --me
            </a>
          </div>
        </div>

        {/* Right Side: Your Photo */}
        <div className="flex-shrink-0">
          {/* Outer wrapper clipped to a circle to serve as the perfect high-res border line */}
          <div 
            className="w-56 h-56 md:w-80 md:h-80 bg-[color:var(--color-border)] flex items-center justify-center p-[1px] shadow-lg"
            style={{ 
              clipPath: 'circle(50% at 50% 50%)',
              WebkitClipPath: 'circle(50% at 50% 50%)'
            }}
          >
            <img 
              src={myPhoto} 
              alt="Yared Worku" 
              className="w-full h-full object-cover"
              style={{ 
                /* 1. Hardware vector clipping eliminates edge blur */
                clipPath: 'circle(50% at 50% 50%)',
                WebkitClipPath: 'circle(50% at 50% 50%)',
                /* 2. Overrides browser downsampling blur, forcing crystal-clear contrast */
                imageRendering: '-webkit-optimize-contrast',
              }}
            />
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-text-muted animate-bounce">
        scroll ↓
      </div>
    </section>
  )
}