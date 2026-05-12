import { motion } from "framer-motion"

export default function GlowBackground() {
  return (
    <>
      <motion.div
        className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--brand) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
    </>
  )
}