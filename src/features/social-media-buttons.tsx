"use client";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";

interface ISocialMediaButtons {}

export const SocialMediaButtons: React.FC<ISocialMediaButtons> = () => {
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
      className="flex flex-wrap items-center justify-center gap-4"
    >
      <Link href="https://github.com/Raghuboi" target="_blank" rel="noreferrer">
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

      <a
        target="_blank"
        rel="noopener noreferrer"
        download="Raghunath_Prabhakar_resume"
        href={process.env.NEXT_PUBLIC_RESUME_URL}
      >
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="flex items-center gap-2 px-8 py-2 bg-secondary rounded-[6px] relative group transition duration-200 text-secondary-foreground hover:bg-transparent">
            Resume
            <DownloadIcon className="text-secondary-foreground" />
          </div>
        </button>
      </a>
    </motion.div>
  );
};

export default SocialMediaButtons;
