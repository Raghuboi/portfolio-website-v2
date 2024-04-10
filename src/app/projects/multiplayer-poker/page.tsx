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
        Multiplayer Poker
      </motion.h1>
      <motion.p variants={childVariants}>
        A Multiplayer Poker Game that uses WebSockets.
      </motion.p>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Raghuboi/multiplayer-poker-game"
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
          Raghuboi/multiplayer-poker-game
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
          className="bg-green-700 px-2 flex items-center justify-center text-center rounded-xl"
        >
          Express
        </motion.span>
        <motion.span
          variants={chipChildVariants}
          className="bg-blue-400 px-2 flex items-center justify-center text-center rounded-xl"
        >
          Socket.io
        </motion.span>
        <motion.span
          variants={chipChildVariants}
          className="bg-purple-500 px-2 flex items-center justify-center text-center rounded-xl"
        >
          Chakra-ui
        </motion.span>
      </motion.div>
      <motion.ul variants={chipContainerVariants} className="list-disc gap-2">
        <motion.li variants={chipChildVariants}>
          Users can play with each other using Room Codes or choose to queue up
          with automatic matchmaking
        </motion.li>
      </motion.ul>
    </>
  );
};

export default Page;
