"use client";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { motion } from "framer-motion";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface INavbar {}

const Navbar: React.FC<INavbar> = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <motion.div
        initial={{ y: "-100dvh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.3,
        }}
        className="container flex h-14 max-w-screen-2xl items-center justify-between"
      >
        <ModeToggle />

        <div className="flex">
          <Link
            href="https://github.com/Raghuboi"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" className="p-3">
              <GitHubLogoIcon />
            </Button>
          </Link>

          <Link
            href="https://www.linkedin.com/in/raghunath-prabhakar/"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" className="p-3">
              <LinkedInLogoIcon />
            </Button>
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
