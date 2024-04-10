"use client";
import { GitHubLogoIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
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
        Rent Nation
      </motion.h1>
      <motion.p variants={childVariants}>
        My personal portfolio built using NextJS v14.
      </motion.p>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Raghuboi/portfolio-website-v2"
        className="flex flex-wrap gap-2"
      >
        <motion.span
          variants={childVariants}
          className="flex items-center gap-2"
        >
          <GitHubLogoIcon />
          Repo:
        </motion.span>
        <motion.span
          variants={childVariants}
          className="flex items-center gap-1 font-medium text-purple-500 hover:underline"
        >
          Raghuboi/portfolio-website-v2
          <OpenInNewWindowIcon />
        </motion.span>
      </Link>
      <motion.div
        variants={chipContainerVariants}
        className="max-w-full flex flex-wrap gap-2 py-2 text-white"
      >
        <motion.span
          variants={chipChildVariants}
          className="bg-blue-700 px-2 flex items-center justify-center text-center rounded-xl"
        >
          React
        </motion.span>
        <motion.span
          variants={chipChildVariants}
          className="bg-blue-600 px-2 flex items-center justify-center text-center rounded-xl"
        >
          Docker
        </motion.span>
        <motion.span
          variants={chipChildVariants}
          className="bg-green-700 px-2 flex items-center justify-center text-center rounded-xl"
        >
          Python/Django
        </motion.span>
        <motion.span
          variants={chipChildVariants}
          className="bg-blue-500 px-2 flex items-center justify-center text-center rounded-xl"
        >
          Tailwind
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
          Self hosted on AWS EC2 using Docker with automated CI/CD using Github
          Actions
        </motion.li>
        <motion.li variants={chipChildVariants}>
          Server rendered pages with in-memory caching
        </motion.li>
        <motion.li variants={chipChildVariants}>
          Styled using Tailwind and Framer Motion
        </motion.li>
        <motion.li variants={chipChildVariants}>
          Optimized build pipeline that outputs multi-stage docker images
        </motion.li>
      </motion.ul>
    </>
  );
};

export default Page;
