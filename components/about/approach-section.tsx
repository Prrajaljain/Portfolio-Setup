import { SectionHeading } from '@/components/section-heading'

const principles = [
  {
    title: 'Validate in simulation before hardware',
    description:
      'I train and stress-test policies in simulation first, then bridge to physical servos and sensors once the behavior is provably safe.',
  },
  {
    title: 'Latency and accuracy are both non-negotiable',
    description:
      'A model that\u2019s 99% accurate but too slow to act on is useless in a real-time system. I quantize, prune, and profile until both hold.',
  },
  {
    title: 'Instrument everything you deploy',
    description:
      'Every pipeline I ship logs mAP/IoU, latency, and failure cases in CI, so regressions surface before they reach the field.',
  },
]

export function ApproachSection() {
  return (
    <section className="border-t border-border/60 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="How I work"
          title="Principles that guide every project"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
