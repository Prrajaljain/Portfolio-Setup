import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col justify-between rounded-md border border-white/[0.08] bg-[#111114] p-6 transition-all duration-200 hover:border-zinc-700 hover:bg-[#151518]">
      <div className="flex flex-col gap-3">
        {/* Top meta row */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-medium text-emerald-400">
            {project.category}
          </span>
          <span className="font-mono text-xs text-zinc-500">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
      </div>

      {/* Footer: Tags & Action Links */}
      <div className="mt-6 flex flex-col gap-4 pt-4 border-t border-white/[0.06]">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm bg-zinc-800/60 px-2 py-0.5 font-mono text-[11px] text-zinc-300 border border-white/[0.04]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-white/[0.1] px-2.5 py-1 text-xs font-mono text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-200 hover:text-black"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <GithubIcon className="h-3 w-3" />
              <span>Source</span>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== project.githubUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-emerald-500/30 bg-emerald-500/5 px-2.5 py-1 text-xs font-mono text-emerald-300 transition-all hover:border-emerald-400 hover:bg-emerald-500 hover:text-black"
              aria-label={`View ${project.title} live demo`}
            >
              <span>Demo</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
