import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed
        top-0
        left-0
        right-0
        h-[4px]
        origin-left
        z-[9999]
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-violet-500
        shadow-[0_0_15px_rgba(0,229,255,0.7)]
      "
    />
  );
};

export default ScrollProgress;
