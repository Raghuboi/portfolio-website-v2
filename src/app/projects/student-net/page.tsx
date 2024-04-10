"use client";
import { FileTextIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  childVariants,
  chipChildVariants,
  chipContainerVariants,
} from "@/features/project-tabs";

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <>
      <motion.h1 variants={childVariants} className="text-2xl font-semibold">
        Student Net
      </motion.h1>
      <motion.p variants={childVariants}>
        A Registration and Scheduling web-app for the Manitoba Conservatory of
        Music and Arts.
      </motion.p>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.google.com/document/d/13TwDGCWG0LtZ2vfxigWodCNwXiP2EbsBkeqjXb7ZerU/edit?usp=sharing"
        className="flex flex-wrap gap-2"
      >
        <motion.span
          variants={childVariants}
          className="flex items-center gap-2"
        >
          <FileTextIcon />
          Docs:
        </motion.span>
        <motion.span
          variants={childVariants}
          className="flex items-center gap-1 font-medium text-purple-500 hover:underline"
        >
          Project Completion Report
          <OpenInNewWindowIcon />
        </motion.span>
      </Link>
      <motion.div
        variants={chipContainerVariants}
        className="max-w-full flex flex-wrap gap-2 py-2 text-white"
      >
        <motion.span
          variants={chipChildVariants}
          className="bg-black px-2 flex items-center justify-center text-center rounded-xl"
        >
          NextJS
        </motion.span>
        <motion.span
          variants={chipChildVariants}
          className="bg-green-700 px-2 flex items-center justify-center text-center rounded-xl"
        >
          Express
        </motion.span>
        <motion.span
          variants={chipChildVariants}
          className="bg-blue-600 px-2 flex items-center justify-center text-center rounded-xl"
        >
          Material-ui
        </motion.span>
        <motion.span
          variants={chipChildVariants}
          className="bg-gray-500 px-2 flex items-center justify-center text-center rounded-xl"
        >
          Postgres
        </motion.span>
      </motion.div>
      <motion.ul variants={chipContainerVariants} className="list-disc gap-2">
        <motion.li variants={chipChildVariants}>
          Part of the 8-month-long University of Winnipeg capstone project
        </motion.li>
        <motion.li variants={chipChildVariants}>
          Lead developer in a team of 4 that shipped an internal tool for
          student/class management
        </motion.li>
        <motion.li variants={chipChildVariants}>
          Led weekly standups and managed the team; observed programming
          standards and co-authored documentation
        </motion.li>
        <motion.li variants={chipChildVariants}>
          Used modular monolith architecture to develop loosely coupled APIs
        </motion.li>
        <motion.li variants={chipChildVariants}>
          Developed studio scheduling APIs for managing individual and group
          classes
        </motion.li>
        <motion.li variants={chipChildVariants}>
          Developed payment management module for student registrations
        </motion.li>
      </motion.ul>
    </>
  );
};

export default Page;
