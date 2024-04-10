"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";

interface IHomeAbout {}

const HomeAbout: React.FC<IHomeAbout> = () => {
  return (
    <motion.div
      layout
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 40,
        delay: 0.3,
      }}
      className="max-w-full"
    >
      <HoverBorderGradient
        as="div"
        containerClassName="w-full rounded-xl"
        className="w-full rounded-xl bg-background text-foreground !font-mono flex flex-col gap-4 p-4 flex-wrap"
      >
        <h1 className="font-semibold text-2xl">👋 Hello</h1>
        <p>
          I am a full-stack developer with experience developing and shipping
          web applications for multiple early stage startups.
          <br />
          <br />I hold bachelor&apos;s degrees in Computer Science (B.Sc.) and
          Economics (B.A.) from the University of Winnipeg.
        </p>
      </HoverBorderGradient>
    </motion.div>
  );
};

export default HomeAbout;
