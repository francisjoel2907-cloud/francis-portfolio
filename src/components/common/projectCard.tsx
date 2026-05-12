import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  code: string
  title: string
  description: string
  tech: string[]
}

export default function ProjectCard({
  code,
  title,
  description,
  tech,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--bg2)]"
    >
      {/* TOP */}
      <div className="relative h-52 overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 flex items-center justify-center">
        {/* BIG BACKGROUND TEXT */}
        <span className="absolute text-[8rem] font-black opacity-[0.05]">
          {code}
        </span>

        {/* CENTER CODE */}
        <div className="relative z-10 text-center">
          <h3 className="text-6xl font-black text-[var(--brand)]">
            {code}
          </h3>

          <p className="text-xs tracking-[0.3em] text-[var(--text3)] mt-2">
            SYSTEM
          </p>
        </div>

        {/* HOVER GLOW */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-cyan-500/10 blur-3xl" />
      </div>

      {/* CONTENT */}
      <div className="p-7">
        {/* TECH */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full text-xs border border-white/10 bg-black/20 text-[var(--text2)]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* TITLE */}
        <h3 className="text-2xl font-bold mb-4">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-[var(--text2)] leading-7 mb-8">
          {description}
        </p>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--brand)] text-black font-semibold hover:scale-105 transition-transform"
          >
            Live Demo

            <ArrowUpRight size={16} />
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 hover:border-[var(--brand)] transition-colors"
          >
            Code

            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}