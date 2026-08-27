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
    <section className="relative overflow-hidden bg-[#F5F4F0] border-b border-[#E8E4DE] text-[#1A1A1A]">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-14 text-left">
        <span className="inline-flex items-center gap-2 self-start rounded-sm border border-[#E8E4DE] bg-[#FFFFFF] px-3 py-1 font-mono text-xs font-semibold text-[#4A4744]">
          {eyebrow}
        </span>
        <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl text-[#1A1A1A]">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-[#2D2B28] font-normal">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
