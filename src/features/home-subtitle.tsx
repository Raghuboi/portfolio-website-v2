"use client";
import TextRotator from "@/components/ui/text-rotator";
import { motion } from "framer-motion";

const HomeSubtitle = () => {
  return (
    <>
      <div className="flex gap-3 items-center text-3xl">
        <motion.div
          className="flex items-center"
          layout
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <TextRotator
            words={[
              "Full-Stack",
              "Frontend",
              "Backend",
              "DevOps",
              "Javascript",
              "Python",
              "Java",
              "React",
              "Node.js",
              "Next.js",
              "Nest.js",
            ]}
          />
        </motion.div>
        <p>Developer</p>
      </div>
    </>
  );
};

export default HomeSubtitle;
