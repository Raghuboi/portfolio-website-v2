"use client";
import React, { useEffect, forwardRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { cn } from "@/utils/cn";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

interface ITextRotator {
  words: string[];
  className?: string;
  duration?: number;
  pauseDelay?: number;
  initialDelay?: number;
  suffix?: any;
  prefix?: any;
}

const TextRotator = forwardRef<HTMLDivElement, ITextRotator>(
  (
    {
      words,
      className,
      duration = 0.83,
      pauseDelay = 1.67,
      initialDelay = 3.5,
      suffix,
      prefix,
    },
    ref
  ) => {
    const [currWord, cycleWord] = useCycle(...words);
    const [showRotator, setShowRotator] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowRotator(true);
      }, initialDelay);

      return () => clearTimeout(timer);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (!showRotator) return;
      const cycleVariants = setTimeout(() => {
        cycleWord();
      }, pauseDelay * 1000);
      return () => clearTimeout(cycleVariants);
    }, [currWord, cycleWord, pauseDelay, showRotator]);

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn("flex gap-2 items-center text-2xl", className)}
      >
        <motion.h1 variants={itemVariants} layout={Boolean(setShowRotator)}>
          {prefix}
        </motion.h1>
        {showRotator ? (
          <motion.h1
            key={currWord}
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
        ) : (
          <motion.h1 variants={itemVariants}>
            {words[words.length - 1]}
          </motion.h1>
        )}
        <motion.h1 variants={itemVariants} layout={Boolean(setShowRotator)}>
          {suffix}
        </motion.h1>
      </motion.div>
    );
  }
);

TextRotator.displayName = "TextRotator";
export default TextRotator;
