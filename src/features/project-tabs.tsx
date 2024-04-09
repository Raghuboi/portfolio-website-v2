"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ShuffleIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { usePathname, useRouter } from "next/navigation";

const PROJECTS = [
  {
    name: "Student Net",
    slug: "student-net",
  },
  {
    name: "Enroll",
    slug: "enroll",
  },
  {
    name: "Rent Nation",
    slug: "rent-nation",
  },
  {
    name: "Portfolio Website",
    slug: "portfolio-website",
  },
  {
    name: "Multiplayer Poker",
    slug: "multiplayer-poker",
  },
  {
    name: "Snake AI",
    slug: "snake-ai",
  },
] as const;

type ProjectSlug = (typeof PROJECTS)[number]["slug"];

interface IProjectTabs extends React.PropsWithChildren {}

const ProjectTabs: React.FC<IProjectTabs> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [projects, setProjects] = useState([...PROJECTS]);
  const [selected, setSelected] = useState<ProjectSlug>();
  const selectedIndex = useMemo(() => {
    return projects.findIndex((p) => p.slug === selected);
  }, [selected, projects]);

  useEffect(() => {
    const slug = pathname.replace("/projects/", "");
    if (PROJECTS.some((p) => p.slug === slug)) {
      setSelected(slug as any);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabChange = (slug: ProjectSlug) => {
    setSelected(slug);
    router.replace(`/projects/${slug}`);
  };

  const handleShuffle = () => {
    const shuffledProjects = [...projects];

    shuffleArray(shuffledProjects);
    setProjects(shuffledProjects);

    const newProject = shuffledProjects[selectedIndex];
    router.push(`/projects/${newProject.slug}`);
  };

  return (
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
            className="absolute hover:underline top-0 left-0 m-4 flex items-center justify-center gap-2"
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
            className="px-4 pb-4 max-w-full grid grid-cols-2 sm:grid-cols-3 gap-4"
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
                  onClick={() => handleTabChange(p.slug)}
                  className={cn(
                    "group w-full h-full p-2 bg-inherit rounded-lg transform hover:-translate-y-1 transition duration-400",
                    selectedIndex === index ? "bg-muted" : null
                  )}
                >
                  {p.name === "Portfolio Website" ? (
                    <span className="relative">
                      {p.name}
                      <span
                        className={cn(
                          "font-[comic_sans] text-sm text-purple-500 transition duration-400 absolute bottom-10 min-[415px]:bottom-4 -right-8 min-[415px]:-right-6 group-hover:-rotate-[18deg]",
                          selectedIndex === index ? "-rotate-[18deg]" : null
                        )}
                      >
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

      {selected ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 25,
            duration: 0.4,
          }}
          layout
        >
          <HoverBorderGradient
            containerClassName="w-full rounded-xl"
            className="w-full rounded-xl bg-background text-foreground"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-4 flex flex-col gap-2 text-left cursor-auto"
            >
              <AnimatePresence>{children}</AnimatePresence>
            </motion.div>
          </HoverBorderGradient>
        </motion.div>
      ) : null}
    </motion.div>
  );
};

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default ProjectTabs;
