import { GraduationCap, Award, BookOpen, Sparkles } from 'lucide-react'
import { education, certifications } from '@/lib/data'

export function EducationSection() {
  return (
    <section className="relative border-t border-border/40 bg-card/30 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Sparkles className="size-3.5" />
            Academic &amp; Professional Credentials
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Education &amp; <span className="text-gradient-purple">Certifications</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education column */}
          <div className="flex flex-col gap-5">
            <h3 className="flex items-center gap-2.5 font-bold text-lg text-white">
              <div className="flex size-8 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <GraduationCap className="size-5" />
              </div>
              Degrees &amp; Academic Training
            </h3>
            {education.map((item) => (
              <div
                key={item.degree}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="text-lg font-bold tracking-tight text-foreground">{item.degree}</h4>
                  <span className="font-mono text-xs font-semibold text-purple-400">{item.period}</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">{item.school}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-bold text-emerald-400">
                  <span>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications column */}
          <div className="flex flex-col gap-5">
            <h3 className="flex items-center gap-2.5 font-bold text-lg text-white">
              <div className="flex size-8 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Award className="size-5" />
              </div>
              Industry Certifications
            </h3>
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40"
              >
                <h4 className="text-lg font-bold tracking-tight text-foreground">{cert.title}</h4>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">{cert.issuer}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-bold text-cyan-300">
                  <span>{cert.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

