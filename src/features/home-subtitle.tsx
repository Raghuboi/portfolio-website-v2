"use client";
import TextRotator from "@/components/ui/text-rotator";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const HomeSubtitle = () => {
  return (
    <motion.div
      className="flex gap-3 items-center text-3xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      layout
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <TextRotator
        words={[
          "Full-Stack",
          "Frontend",
          "Backend",
          "DevOps",
          "Javascript",
          "Python",
          "Java",
          "React",
          "Node.js",
          "Next.js",
          "Nest.js",
        ]}
      />
      <motion.p variants={childVariants}>Developer</motion.p>
    </motion.div>
  );
};

export default HomeSubtitle;
