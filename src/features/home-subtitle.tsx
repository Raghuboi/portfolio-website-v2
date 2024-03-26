"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import TextRotator from "@/components/ui/text-rotator";

const HomeSubtitle = () => {
  const [showRotator, setShowRotator] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="flex gap-3 items-center text-3xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      layout
      onAnimationComplete={() => setShowRotator(true)}
    >
      {showRotator ? (
        <TextRotator
          words={[
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
            "Full-Stack",
          ]}
        />
      ) : (
        <motion.p className="text-3xl" variants={childVariants}>
          Full-Stack
        </motion.p>
      )}
      <motion.p variants={childVariants}>Developer</motion.p>
    </motion.div>
  );
};

export default HomeSubtitle;
