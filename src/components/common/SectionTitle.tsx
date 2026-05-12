interface SectionTitleProps {
  label: string
  title: string
  description?: string
}

export default function SectionTitle({
  label,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-14">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--brand)] mb-3 font-semibold">
        {label}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-[var(--text2)] leading-7">
          {description}
        </p>
      )}
    </div>
  )
}