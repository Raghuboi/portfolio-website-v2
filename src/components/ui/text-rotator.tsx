"use client";
import React, { useEffect } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

interface ITextRotator {
  words: string[];
  className?: string;
  duration?: number;
  pauseDelay?: number;
}

const TextRotator: React.FC<ITextRotator> = ({
  words,
  className,
  duration = 0.83,
  pauseDelay = 1.67,
}) => {
  const [currWord, cycleWord] = useCycle(...words);

  useEffect(() => {
    const cycleVariants = setTimeout(() => {
      cycleWord();
    }, pauseDelay * 1000);
    return () => clearTimeout(cycleVariants);
  }, [currWord, cycleWord, pauseDelay]);

  return (
    <motion.h1
      key={currWord}
      className={className}
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{
        damping: 30,
        duration: duration,
        ease: [0.44, 0, 0.56, 1],
        mass: 1,
        stiffness: 200,
        type: "spring",
      }}
    >
      {currWord}
    </motion.h1>
  );
};

export default TextRotator;
