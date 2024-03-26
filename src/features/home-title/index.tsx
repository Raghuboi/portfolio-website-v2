"use client";
import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useMediaQuery } from "usehooks-ts";
import HomeSubtitle from "./home-subtitle";
import { motion } from "framer-motion";

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
      className="flex flex-col gap-3 max-w-xs sm:max-w-none transition-width duration-500 ease-in-out"
    >
      <TypewriterEffect
        words={WORDS}
        className="flex items-end text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-left"
        cursorClassName="bg-muted hidden md:block "
      />
      <HomeSubtitle />
    </motion.div>
  );
};

export default HomeTitle;
