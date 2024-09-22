import { motion, AnimatePresence } from "framer-motion";

const lineVariants = {
  hidden: {
    y: "100%", // Start from below the span/div
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
  exit: {
    y: "-100%", // Exit upwards
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger entry
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1, // Stagger exit
      staggerDirection: -1, // Reverse the order of stagger on exit
    },
  },
};

const FlipLine = ({ children }: { children: string }) => {
  const lines = children.split("\n");

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        className="overflow-hidden"
      >
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className="overflow-hidden"
            variants={lineVariants}
          >
            <motion.span>{line}</motion.span>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default FlipLine;
