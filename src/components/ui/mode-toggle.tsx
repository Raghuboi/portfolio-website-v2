"use client";
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const motionVariants = {
  light: { scaleX: 1 },
  dark: { scaleX: -1 },
};

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <Button onClick={handleToggle} variant="outline" size="icon">
      <motion.div
        initial={false}
        animate={theme === "dark" ? "dark" : "light"}
        variants={motionVariants}
        transition={{ duration: 0.5 }}
      >
        {theme === "dark" ? (
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <MoonIcon className="h-[1.2rem] w-[1.2rem] scale-x-[-1]" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
