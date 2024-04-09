"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { ShuffleIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import { cn } from "@/utils/cn";

const PROJECTS = [
  {
    name: "Student Net",
    tab: (
      <>
        <h1 className="text-2xl font-semibold">Student Net</h1>
        <div className="max-w-full flex flex-wrap gap-2 py-2 text-white">
          <span className="bg-black px-2 flex items-center justify-center text-center rounded-xl">
            NextJS
          </span>
          <span className="bg-green-700 px-2 flex items-center justify-center text-center rounded-xl">
            Express
          </span>
          <span className="bg-blue-600 px-2 flex items-center justify-center text-center rounded-xl">
            Material-ui
          </span>
          <span className="bg-gray-500 px-2 flex items-center justify-center text-center rounded-xl">
            Postgres
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          ipsum eveniet neque. Eveniet, excepturi, est necessitatibus corrupti
          dolor, pariatur natus animi at porro illum accusantium voluptatum
          reprehenderit sapiente distinctio aliquid?
        </p>
      </>
    ),
  },
  {
    name: "Enroll",
    tab: (
      <>
        <h1 className="text-2xl font-semibold">Enroll</h1>
        <div className="max-w-full flex flex-wrap gap-2 py-2 text-white">
          <span className="bg-black px-2 flex items-center justify-center text-center rounded-xl">
            NextJS
          </span>
          <span className="bg-green-700 px-2 flex items-center justify-center text-center rounded-xl">
            Express
          </span>
          <span className="bg-blue-600 px-2 flex items-center justify-center text-center rounded-xl">
            Material-ui
          </span>
          <span className="bg-gray-500 px-2 flex items-center justify-center text-center rounded-xl">
            Postgres
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          ipsum eveniet neque. Eveniet, excepturi, est necessitatibus corrupti
          dolor, pariatur natus animi at porro illum accusantium voluptatum
          reprehenderit sapiente distinctio aliquid?
        </p>
      </>
    ),
  },
  {
    name: "Rent Nation",
    tab: (
      <>
        <h1 className="text-2xl font-semibold">Rent Nation</h1>
        <div className="max-w-full flex flex-wrap gap-2 py-2 text-white">
          <span className="bg-blue-700 px-2 flex items-center justify-center text-center rounded-xl">
            React
          </span>
          <span className="bg-blue-600 px-2 flex items-center justify-center text-center rounded-xl">
            Docker
          </span>
          <span className="bg-green-700 px-2 flex items-center justify-center text-center rounded-xl">
            Python/Django
          </span>
          <span className="bg-blue-500 px-2 flex items-center justify-center text-center rounded-xl">
            Tailwind
          </span>
          <span className="bg-gray-500 px-2 flex items-center justify-center text-center rounded-xl">
            Postgres
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          ipsum eveniet neque. Eveniet, excepturi, est necessitatibus corrupti
          dolor, pariatur natus animi at porro illum accusantium voluptatum
          reprehenderit sapiente distinctio aliquid?
        </p>
      </>
    ),
  },
  {
    name: "Portfolio Website",
    tab: (
      <>
        <h1 className="text-2xl font-semibold">Portfolio Website</h1>
        <p>My personal portfolio built using NextJS v14.</p>
        <div className="max-w-full flex flex-wrap gap-2 py-2 text-white">
          <span className="bg-black px-2 flex items-center justify-center text-center rounded-xl">
            NextJS
          </span>
          <span className="bg-blue-600 px-2 flex items-center justify-center text-center rounded-xl">
            Docker
          </span>
          <span className="bg-orange-700 px-2 flex items-center justify-center text-center rounded-xl">
            AWS EC2
          </span>
          <span className="bg-purple-500 px-2 flex items-center justify-center text-center rounded-xl">
            Github Actions
          </span>
          <span className="bg-blue-500 px-2 flex items-center justify-center text-center rounded-xl">
            Tailwind
          </span>
          <span className="bg-indigo-500 px-2 flex items-center justify-center text-center rounded-xl">
            Framer Motion
          </span>
        </div>
        <ul className="list-disc gap-2">
          <li>
            Self hosted on AWS EC2 using Docker with automated CI/CD using
            Github Actions
          </li>
          <li>Server rendered pages with in-memory caching</li>
          <li>Styled using Tailwind and Framer Motion</li>
          <li>
            Optimized build pipeline that outputs multi-stage docker images
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "Multiplayer Poker",
    tab: (
      <>
        <h1 className="text-2xl font-semibold">Multiplayer Poker Game</h1>
        <div className="max-w-full flex flex-wrap gap-2 py-2 text-white">
          <span className="bg-blue-700 px-2 flex items-center justify-center text-center rounded-xl">
            React
          </span>
          <span className="bg-green-700 px-2 flex items-center justify-center text-center rounded-xl">
            Express
          </span>
          <span className="bg-purple-500 px-2 flex items-center justify-center text-center rounded-xl">
            Chakra-ui
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          ipsum eveniet neque. Eveniet, excepturi, est necessitatibus corrupti
          dolor, pariatur natus animi at porro illum accusantium voluptatum
          reprehenderit sapiente distinctio aliquid?
        </p>
      </>
    ),
  },
  {
    name: "Snake AI",
    tab: (
      <>
        <h1 className="text-2xl font-semibold">Snake AI</h1>
        <div className="max-w-full flex flex-wrap gap-2 py-2 text-white">
          <span className="bg-blue-700 px-2 flex items-center justify-center text-center rounded-xl">
            React
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          ipsum eveniet neque. Eveniet, excepturi, est necessitatibus corrupti
          dolor, pariatur natus animi at porro illum accusantium voluptatum
          reprehenderit sapiente distinctio aliquid?
        </p>
      </>
    ),
  },
];

interface Props {}

const Page: React.FC<Props> = () => {
  const [projects, setProjects] = useState(PROJECTS);
  const [selected, setSelected] = useState<number>(3);

  const handleShuffle = () => {
    const shuffledProjects = [...projects];
    shuffleArray(shuffledProjects);
    setProjects(shuffledProjects);
  };

  return (
    <div className="min-h-[75dvh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="max-w-[40rem] mx-auto my-auto relative grid grid-auto-rows gap-4 justify-items-stretch"
      >
        <motion.div layout>
          <HoverBorderGradient
            as="div"
            containerClassName="w-full rounded-xl"
            className="w-full rounded-xl bg-background text-foreground"
          >
            <Link
              href="/"
              className="absolute hover:underline top-0 left-0 m-4 flex items-center justify-center gap-2 font-monospaced"
            >
              <ArrowLeftIcon /> Back
            </Link>
            <Button
              variant="ghost"
              className="absolute top-0 right-0 m-2 group"
              onClick={handleShuffle}
            >
              <ShuffleIcon className="group-hover:rotate- transition-transform duration-400 transform" />
            </Button>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="px-4 pb-4 !font-monospaced max-w-full grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <h1
                className="mb-4 col-span-2 hover:translate-x-1 transition duration-400 sm:col-start-1 sm:col-end-4 sm:col-span-3 text-2xl font-semibold text-foreground self-end justify-self-center"
                style={{
                  textShadow:
                    "2px 2px 0 var(--purple-500), 4px 4px 0 var(--indigo-500)",
                }}
              >
                My Projects
              </h1>
              {projects.map((p, index) => (
                <motion.div
                  className="cursor-pointer"
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 25,
                    delay: index * 0.03,
                  }}
                  key={p.name}
                >
                  <button
                    onClick={() => setSelected(index)}
                    className={cn(
                      "group w-full h-full p-2 bg-inherit rounded-lg transform hover:-translate-y-1 transition duration-400",
                      selected === index ? "bg-muted" : null
                    )}
                  >
                    {p.name === "Portfolio Website" ? (
                      <span className="relative">
                        {p.name}
                        <span className="font-[comic_sans] text-sm text-pink-500 transition duration-400 absolute bottom-10 min-[415px]:bottom-4 -right-8 min-[415px]:-right-6 group-hover:-rotate-[18deg]">
                          new!
                        </span>
                      </span>
                    ) : (
                      p.name
                    )}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </HoverBorderGradient>
        </motion.div>

        <motion.div layout>
          <HoverBorderGradient
            as="div"
            containerClassName="w-full rounded-xl"
            className="w-full rounded-xl bg-background text-foreground"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="px-4 pb-4 !font-monospaced flex flex-col gap-2"
            >
              {projects[selected].tab}
            </motion.div>
          </HoverBorderGradient>
        </motion.div>
      </motion.div>
    </div>
  );
};

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default Page;
