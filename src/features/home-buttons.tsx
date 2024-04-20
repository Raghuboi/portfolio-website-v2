"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/utils/cn";
import { ArrowRightIcon, DownloadIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";

interface IHomeButtons {
  className?: string;
}

export const HomeButtons: React.FC<IHomeButtons> = ({ className }) => {
  return (
    <motion.div
      initial={{ y: "+100dvh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3,
        delay: 1.2,
      }}
      className={cn(
        "w-full flex flex-wrap items-center justify-start gap-3 font-mono",
        className
      )}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        download="Raghunath_Prabhakar_resume"
        href={process.env.NEXT_PUBLIC_RESUME_URL}
      >
        <HoverBorderGradient
          containerClassName="rounded-full"
          duration={0.5}
          as="button"
          clockwise={false}
          className="bg-background white text-black dark:text-white flex items-center space-x-2"
        >
          <span>Resume</span>
          <DownloadIcon />
        </HoverBorderGradient>
      </a>
      <Link href="/projects">
        <HoverBorderGradient
          containerClassName="rounded-full"
          duration={0.5}
          as="button"
          className="bg-background white text-black dark:text-white flex items-center space-x-2"
        >
          <span>Projects</span>
          <ArrowRightIcon />
        </HoverBorderGradient>
      </Link>
    </motion.div>
  );
};

export default HomeButtons;
