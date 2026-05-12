import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        border-t
        border-white/10
        bg-[var(--bg2)]
        overflow-hidden
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-cyan-500/5
          via-purple-500/5
          to-cyan-500/5
        "
      />

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          py-10
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-8
        "
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h3
            className="
              text-3xl
              font-black
              tracking-wide
              text-cyan-400
            "
          >
            Francis Joel
          </h3>

          <p className="text-[var(--text2)] mt-2 text-sm">
            Full-Stack MERN Developer
          </p>

          <p className="text-[var(--text3)] mt-4 text-sm">
            © 2025 Francis Joel. All rights reserved.
          </p>
        </motion.div>

        {/* CENTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="
              w-12
              h-12
              rounded-full
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:border-cyan-400
              hover:text-cyan-400
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <FaGithub size={20} />
          </a>

          <a
            href="#"
            className="
              w-12
              h-12
              rounded-full
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:border-cyan-400
              hover:text-cyan-400
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="mailto:francisjoel2907@gmail.com"
            className="
              w-12
              h-12
              rounded-full
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:border-cyan-400
              hover:text-cyan-400
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <Mail size={20} />
          </a>
        </motion.div>

        {/* RIGHT */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          onClick={scrollTop}
          className="
            w-14
            h-14
            rounded-full
            bg-cyan-400
            text-black
            flex
            items-center
            justify-center
            shadow-lg
            shadow-cyan-500/30
            hover:scale-110
            transition-all
            duration-300
          "
        >
          <ArrowUp size={22} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
