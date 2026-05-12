import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"

import Container from "@/components/common/Container"
import GlowBackground from "@/components/common/GlowBackground"
import Typewriter from "@/components/common/Typewriter"

import { STATS } from "@/data/portfolio"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GlowBackground />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border2) 1px, transparent 1px), linear-gradient(90deg, var(--border2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* AVAILABLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-[var(--brand)] text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            Available for freelance & full-time work
          </motion.div>

          {/* TYPEWRITER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-5"
          >
            <Typewriter />
          </motion.div>

          {/* MAIN TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="text-6xl md:text-8xl lg:text-[9rem] leading-none font-black tracking-tight mb-8"
          >
            <span className="block">
              FRANCIS
            </span>

            <span className="block text-transparent stroke-text">
              JOEL
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl text-lg md:text-xl leading-9 text-[var(--text2)] mb-10"
          >
            Full-Stack MERN Developer building modern,
            scalable, and business-focused web systems
            using React, TypeScript, Node.js, and MongoDB.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-5 mb-16"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--brand)] text-black font-semibold hover:scale-105 transition-transform"
            >
              View Projects

              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-[var(--border2)] bg-[var(--bg2)] hover:border-[var(--brand)] transition-colors"
            >
              Contact Me

              <Mail size={18} />
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-10 pt-10 border-t border-white/10"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-3xl font-bold text-[var(--brand)]">
                  {stat.value}
                </h3>

                <p className="text-sm text-[var(--text3)] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}