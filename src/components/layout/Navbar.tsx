import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const navLinks = ["Home", "Projects", "Skills", "About", "Contact"];

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "skills", "about", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          fixed
          top-0
          left-0
          w-full
          z-50
          backdrop-blur-xl
          border-b
          border-white/10
          bg-[var(--bg)]/70
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            h-20
            flex
            items-center
            justify-between
          "
        >
          {/* LOGO */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="
              text-2xl
              md:text-3xl
              font-black
              tracking-wider
              text-cyan-400
              cursor-pointer
            "
            onClick={() => scrollToSection("hero")}
          >
            FRANCIS.
          </motion.h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                key={link}
                onClick={() =>
                  scrollToSection(
                    link.toLowerCase() === "home" ? "hero" : link.toLowerCase(),
                  )
                }
                className={`
  text-sm
  font-medium
  transition-all
  duration-300
  ${
    activeSection ===
    (link.toLowerCase() === "home" ? "hero" : link.toLowerCase())
      ? "text-cyan-400"
      : "text-[var(--text2)] hover:text-cyan-400"
  }
`}
              >
                {link}
              </motion.button>
            ))}

            {/* THEME BUTTON */}
            <button
              onClick={toggleTheme}
              className="
                w-11
                h-11
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:border-cyan-400
                transition-all
              "
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex md:hidden items-center gap-3">
            {/* THEME */}
            <button
              onClick={toggleTheme}
              className="
                w-10
                h-10
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
              "
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* MENU BUTTON */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="
                w-10
                h-10
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
              "
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/80
              backdrop-blur-xl
              flex
              flex-col
              items-center
              justify-center
            "
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setMobileOpen(false)}
              className="
                absolute
                top-6
                right-6
                w-12
                h-12
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
              "
            >
              <X size={24} />
            </button>

            {/* LINKS */}
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  onClick={() =>
                    scrollToSection(
                      link.toLowerCase() === "home"
                        ? "hero"
                        : link.toLowerCase(),
                    )
                  }
                  className={`
  text-4xl
  font-black
  transition-colors
  ${
    activeSection ===
    (link.toLowerCase() === "home" ? "hero" : link.toLowerCase())
      ? "text-cyan-400"
      : "text-white hover:text-cyan-400"
  }
`}
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
