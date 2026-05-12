import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";

import ScrollProgress from "./components/common/ScrollProgress";
import Loader from "./components/common/Loader";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [loading, setLoading] = useState(true);

  /* THEME EFFECT */
  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  /* LOADER EFFECT */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <Loader isLoading={loading} />

      <ScrollProgress />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="pt-20">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
