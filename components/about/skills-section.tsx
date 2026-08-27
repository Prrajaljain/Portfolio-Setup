'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Cpu, Bot, Database, Sparkles } from 'lucide-react'
import { techCategories } from '@/lib/data'
import { SectionWrapper } from '@/components/section-wrapper'

const categoryIcons: Record<string, React.ElementType> = {
  'computer-vision': Eye,
  'embedded-robotics': Cpu,
  'ai-ml': Bot,
  'data-tooling': Database,
  'genai-llms': Sparkles,
}

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(techCategories[0].id)
  const currentCategory = techCategories.find((cat) => cat.id === activeTab) || techCategories[0]

  return (
    <SectionWrapper id="tech-stack" className="relative mx-auto max-w-6xl px-6 py-16 text-left">
      {/* Section Title Header */}
      <div className="mb-10 space-y-2">
        <span className="font-mono text-xs font-semibold text-[#4A4744] uppercase tracking-wider">
          CORE COMPETENCIES &amp; TOOLS
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
          Tech Stack &amp; <span className="font-bold text-[#F25C1F]">Capabilities</span>
        </h2>
      </div>

      {/* Horizontal Category Filter Tabs Bar */}
      <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-3 pt-1 no-scrollbar border-b border-[#E8E4DE]">
        {techCategories.map((cat) => {
          const isActive = cat.id === activeTab
          const IconComponent = (categoryIcons[cat.id] || Eye) as any
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`relative flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'border border-[#F25C1F] bg-[#FDF3EE] text-[#D94A10] shadow-sm'
                  : 'border border-[#E8E4DE] bg-[#FFFFFF] text-[#4A4744] hover:border-[#D94A10] hover:text-[#1A1A1A]'
              }`}
            >
              <IconComponent className="size-3.5" />
              <span>{cat.label}</span>
            </button>
          )
        })}
      </div>

      {/* 3-Column Bento Grid of Skill Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {currentCategory.skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex flex-col rounded-[14px] border border-[#E8E4DE] bg-[#FFFFFF] p-5 shadow-rest transition-all duration-200 ease-out hover:border-[#D94A10] hover:shadow-hover"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] group-hover:text-[#D94A10] transition-colors leading-snug mb-2">
                {skill.name}
              </h3>
              <p className="text-xs leading-relaxed text-[#2D2B28] font-normal">
                {skill.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  )
}
