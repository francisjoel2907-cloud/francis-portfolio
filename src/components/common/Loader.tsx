import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: LoaderProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            bg-[var(--bg)]
          "
        >
          {/* GLOW */}
          <div
            className="
              absolute
              w-72
              h-72
              bg-cyan-500/20
              blur-3xl
              rounded-full
            "
          />

          {/* CONTENT */}
          <div className="relative flex flex-col items-center">
            {/* LOGO */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
              }}
              className="
                text-6xl
                md:text-8xl
                font-black
                tracking-[0.3em]
                text-cyan-400
              "
            >
              FJ
            </motion.h1>

            {/* LINE */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "180px" }}
              transition={{
                duration: 1.4,
                ease: "easeInOut",
              }}
              className="
                h-[4px]
                mt-6
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-violet-500
              "
            />

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.5,
              }}
              className="
                mt-6
                text-sm
                tracking-[0.4em]
                uppercase
                text-[var(--text2)]
              "
            >
              Loading Portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
