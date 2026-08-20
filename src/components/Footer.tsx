import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-white/[0.08] bg-[#09090b]">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        {/* Left: Name, Title & Status */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium text-zinc-300">
              {portfolioData.personal.name}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs text-zinc-500 font-mono">© {currentYear}</span>
          </div>
          <p className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{portfolioData.personal.status}</span>
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href={portfolioData.socials.find((s) => s.icon === "github")?.url || "https://github.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline font-mono">GitHub</span>
          </a>
          <span className="text-zinc-800">/</span>
          <a
            href={portfolioData.socials.find((s) => s.icon === "linkedin")?.url || "https://linkedin.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline font-mono">LinkedIn</span>
          </a>
          <span className="text-zinc-800">/</span>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="Email Prajal Jain"
          >
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden sm:inline font-mono">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
