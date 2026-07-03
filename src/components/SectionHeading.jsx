export default function SectionHeading({ index, name, title }) {
  return (
    <div className="mb-10">
      <span className="font-mono text-sm text-copper">
        {index}_{name}
      </span>
      <div className="flex items-center gap-4 mt-2">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-text whitespace-nowrap">
          {title}
        </h2>
        <div className="h-px flex-1 bg-[color:var(--color-border)]" />
      </div>
    </div>
  )
}
