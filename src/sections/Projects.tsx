import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { FaGithub } from "react-icons/fa";

import microfinanceImg from "../assets/projects/microfinance.png";
import churchImg from "../assets/projects/church.png";
import hospitalImg from "../assets/projects/hospital.png";

const projects = [
  {
    title: "Microfinance Management System",
    description:
      "Modern MERN stack microfinance platform with loan tracking, repayments, analytics and customer management.",

    image: microfinanceImg,

    tech: ["React", "TypeScript", "Node.js", "MongoDB"],

    github: "https://github.com/YOUR_USERNAME/microfinance-system",

    live: "https://your-demo-link.com",
  },

  {
    title: "Church Management System",
    description:
      "Full church administration system for donations, members, reports and financial tracking.",

    image: churchImg,

    tech: ["React", "Express", "MongoDB", "Tailwind"],

    github: "https://github.com/YOUR_USERNAME/church-system",

    live: "https://your-demo-link.com",
  },

  {
    title: "Hospital Management System",
    description:
      "Healthcare management platform with patient records, appointments and reporting dashboard.",

    image: hospitalImg,

    tech: ["React", "TypeScript", "Node.js", "MongoDB"],

    github: "https://github.com/YOUR_USERNAME/hospital-system",

    live: "https://your-demo-link.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Portfolio
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Featured Projects
          </h2>

          <p className="text-[var(--text2)] mt-6 max-w-2xl mx-auto text-lg">
            Real-world systems built to solve business problems using modern
            technologies and scalable architecture.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <div className="grid lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                group
                rounded-3xl
                overflow-hidden
                border
                border-white/10
                bg-[var(--bg2)]
                backdrop-blur-xl
                shadow-2xl
              "
            >
              {/* IMAGE */}
              <div className="overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-64
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/30
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="text-[var(--text2)] mt-4 leading-7">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-cyan-500/10
                        border
                        border-cyan-400/20
                        text-cyan-400
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-4 mt-8">
                  {/* LIVE DEMO */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      rounded-2xl
                      bg-cyan-400
                      text-black
                      font-semibold
                      hover:scale-105
                      transition-all
                    "
                  >
                    Live Demo
                    <ExternalLink size={18} />
                  </a>

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      hover:border-cyan-400
                      hover:text-cyan-400
                      transition-all
                    "
                  >
                    <FaGithub size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
