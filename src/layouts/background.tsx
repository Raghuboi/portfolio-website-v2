"use client";
import { ReactNode } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";

interface IBackground {
  children: ReactNode;
}

const Background: React.FC<IBackground> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className="w-screen h-screen bg-background dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={50}
        className="w-screen h-screen absolute"
        particleColor={theme === "dark" ? "#FFFFFF" : "#000000"}
      />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
};

export default Background;
