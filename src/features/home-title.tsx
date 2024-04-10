"use client";
import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";
import TextRotator from "@/components/ui/text-rotator";

interface IHomeTitle {}

const HomeTitle: React.FC<IHomeTitle> = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const WORDS = isSmallScreen
    ? [{ text: "Raghunath" }]
    : [
        {
          text: "Raghunath",
        },
        {
          text: "Prabhakar",
        },
      ];

  return (
    <motion.div
      layout
      transition={{ duration: 0.5 }}
      className="relative mr-auto my-1 flex flex-col gap-3 transition-width duration-500 ease-in-out"
    >
      <TypewriterEffect
        words={WORDS}
        className="flex items-end text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-left"
        cursorClassName="bg-muted hidden md:block "
      />
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
        suffix="Developer"
      />
    </motion.div>
  );
};

export default HomeTitle;
