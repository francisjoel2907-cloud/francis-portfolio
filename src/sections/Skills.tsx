import { motion } from "framer-motion"

const skills = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JWT Auth",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Render",
    ],
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-[var(--bg)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)]">
            My Skills
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />

          <p className="text-[var(--text2)] mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to build modern,
            scalable and responsive applications.
          </p>
        </motion.div>

        {/* SKILL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                bg-[var(--bg2)]
                border border-[var(--border2)]
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-cyan-500/10
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-black/30
                      border border-white/10
                      text-sm
                      text-[var(--text)]
                      hover:border-cyan-400
                      hover:text-cyan-400
                      transition-all
                      duration-300
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills