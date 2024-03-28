"use client";
import { cn } from "@/utils/cn";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
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
        stiffness: 100,
        damping: 20,
        duration: 0.3,
      }}
      className={cn(
        "flex flex-wrap items-center justify-center gap-4",
        className
      )}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        download="Raghunath_Prabhakar_resume"
        href={process.env.NEXT_PUBLIC_RESUME_URL}
      >
        <button className="w-[150px] p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-lg" />
          <div className="flex items-center gap-2 px-8 py-2 bg-secondary rounded-[6px] relative group transition duration-200 text-secondary-foreground hover:bg-transparent">
            Resume
            <DownloadIcon className="text-secondary-foreground" />
          </div>
        </button>
      </a>
    </motion.div>
  );
};

export default HomeButtons;
