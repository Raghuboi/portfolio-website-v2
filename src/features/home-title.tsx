"use client";
import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";
import TextRotator from "@/components/ui/text-rotator";

const ROTATOR_WORDS = [
  { word: "Full-Stack" },
  { word: "Frontend" },
  { word: "Backend" },
  { word: "DevOps" },
  { word: "Javascript", className: "text-[#f0db4f]" },
  { word: "Python", className: "text-[#ffde57]" },
  { word: "Node.js", className: "text-green-500" },
  { word: "React", className: "text-[#61dbfb]" },
  { word: "Next.js" },
  { word: "Nest.js", className: "text-red-600" },
  { word: "Java", className: "text-[#f89820]" },
];

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
      className="relative mr-auto my-1 flex flex-col gap-2 transition-width duration-500 ease-in-out"
    >
      <TypewriterEffect
        words={WORDS}
        className="flex items-end !text-5xl font-bold text-left"
        cursorClassName="hidden"
      />
      <TextRotator
        className="font-mono"
        words={ROTATOR_WORDS}
        suffix="Developer"
        initialDelay={4.5}
      />
    </motion.div>
  );
};

export default HomeTitle;
