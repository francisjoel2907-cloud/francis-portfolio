import { motion } from "framer-motion";
import profileImage from "../assets/images/francis.png.png";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[var(--bg2)]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* GLOW */}
          <div
            className="
              absolute
              w-[320px]
              h-[320px]
              bg-cyan-500/20
              blur-3xl
              rounded-full
            "
          />

          {/* ROUND IMAGE */}
          <div className="relative mx-auto w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]">
            {/* Glow */}
            <div
              className="
         absolute
         inset-0
         rounded-full
         bg-cyan-500/20
         blur-3xl
         "
            />

            {/* Image */}
            <div
              className="
        relative
        w-full
        h-full
        rounded-full
        overflow-hidden
        border-4
        border-cyan-400/30
        shadow-2xl
       shadow-cyan-500/20
       "
            >
              <img
                src={profileImage}
                alt="Francis Joel"
                className="
        w-full
        h-full
        object-cover
        object-top
        scale-110
        hover:scale-125
        transition-transform
        duration-700
      "
              />
            </div>
          </div>
          <div
            className="
              relative
              rounded-[2rem]
              overflow-hidden
              border border-white/10
              bg-black/20
              backdrop-blur-sm
              shadow-2xl
              max-w-md
            "
          ></div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            About Me
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-4 leading-tight">
            Building Modern Systems for Real Businesses.
          </h2>

          <div className="space-y-6 mt-8 text-[var(--text2)] leading-8 text-lg">
            <p>
              I am Francis Joel, a passionate Full-Stack MERN Developer focused
              on creating modern, scalable and user-friendly web applications.
            </p>

            <p>
              I specialize in systems like microfinance, church management,
              hospital systems, and business automation platforms.
            </p>

            <p>
              My mission is not only writing code — but building technology
              solutions that solve real-world problems.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div
              className="
                bg-black/20
                border border-white/10
                rounded-2xl
                p-6
                text-center
              "
            >
              <h3 className="text-3xl font-black text-cyan-400">3+</h3>

              <p className="text-sm text-[var(--text2)] mt-2">Projects</p>
            </div>

            <div
              className="
                bg-black/20
                border border-white/10
                rounded-2xl
                p-6
                text-center
              "
            >
              <h3 className="text-3xl font-black text-cyan-400">MERN</h3>

              <p className="text-sm text-[var(--text2)] mt-2">Stack</p>
            </div>

            <div
              className="
                bg-black/20
                border border-white/10
                rounded-2xl
                p-6
                text-center
              "
            >
              <h3 className="text-3xl font-black text-cyan-400">100%</h3>

              <p className="text-sm text-[var(--text2)] mt-2">Passion</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
