// src/components/SocialSidebars.jsx
const GITHUB_URL = 'https://github.com/Yared-Worku'
const LINKEDIN_URL = 'https://www.linkedin.com/in/yared-worku-0511273b3'
const EMAIL = 'yaredow8343@gmail.com'

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="sm:w-[18px] sm:h-[18px]">
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="sm:w-[18px] sm:h-[18px]">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

export default function SocialSidebars() {
  return (
    <>
      {/* left: social icons + vertical line, fixed to viewport */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 fixed left-3 sm:left-5 lg:left-8 top-1/2 -translate-y-1/10 z-40">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="text-text-muted hover:text-copper hover:-translate-y-1 transition-all"
        >
          <GithubIcon />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="text-text-muted hover:text-copper hover:-translate-y-1 transition-all"
        >
          <LinkedinIcon />
        </a>
        <div className="w-px h-16 sm:h-20 lg:h-24 bg-[color:var(--color-border)]" />
      </div>

      {/* right: rotated email + vertical line, fixed to viewport */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 fixed right-3 sm:right-5 lg:right-8 top-1/2 -translate-y-1/4 z-40">
        <a
          href={`mailto:${EMAIL}`}
          className="font-mono text-[10px] sm:text-xs text-text-muted hover:text-copper transition-colors tracking-wider"
          style={{ writingMode: 'vertical-rl' }}
        >
          {EMAIL}
        </a>
        <div className="w-px h-16 sm:h-20 lg:h-24 bg-[color:var(--color-border)]" />
      </div>
    </>
  )
}