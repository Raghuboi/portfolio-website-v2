"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden gap-10">
      <TypewriterEffect
        words={[
          {
            text: "Raghunath",
          },
          {
            text: "Prabhakar",
          },
        ]}
        className="flex items-end text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-center"
        cursorClassName="bg-muted h-full"
      />
      <motion.div
        initial={{ y: "+100dvh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.3,
        }}
        className="flex gap-4"
      >
        <Link
          href="https://github.com/Raghuboi"
          target="_blank"
          rel="noreferrer"
        >
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="flex items-center gap-2 px-8 py-2 bg-secondary rounded-[6px] relative group transition duration-200 text-secondary-foreground hover:bg-transparent">
              Github
              <GitHubLogoIcon className="text-secondary-foreground" />
            </div>
          </button>
        </Link>

        <Link
          href="https://www.linkedin.com/in/raghunath-prabhakar/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-[#0077B5] rounded-lg" />
            <div className="flex items-center gap-2 px-8 py-2 bg-secondary rounded-[6px] relative group transition duration-200 text-secondary-foreground hover:bg-transparent">
              LinkedIn
              <LinkedInLogoIcon className="text-secondary-foreground" />
            </div>
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
