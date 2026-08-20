export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f4] border-b border-[#e6e5e0] text-[#26251e]">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-14 text-left">
        <span className="inline-flex items-center gap-2 self-start rounded-sm border border-[#e6e5e0] bg-[#ffffff] px-3 py-1 font-mono text-xs font-semibold text-[#5a5852]">
          {eyebrow}
        </span>
        <h1 className="text-balance text-3xl font-normal leading-tight tracking-tight sm:text-5xl text-[#26251e]">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-pretty text-sm sm:text-base leading-relaxed text-[#5a5852]">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
