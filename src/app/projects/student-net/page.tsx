import { GitHubLogoIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {}

const Page: React.FC<Props> = async () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Snake AI</h1>
      <p>My personal portfolio built using NextJS v14.</p>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Raghuboi/portfolio-website-v2"
        className="flex flex-wrap gap-2"
      >
        <span className="flex items-center gap-2">
          <GitHubLogoIcon />
          Repo:
        </span>
        <span className="flex items-center gap-1 font-medium text-purple-500 hover:underline">
          Raghuboi/portfolio-website-v2
          <OpenInNewWindowIcon />
        </span>
      </Link>
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
      <ul className="list-disc gap-2">
        <li>
          Self hosted on AWS EC2 using Docker with automated CI/CD using Github
          Actions
        </li>
        <li>Server rendered pages with in-memory caching</li>
        <li>Styled using Tailwind and Framer Motion</li>
        <li>Optimized build pipeline that outputs multi-stage docker images</li>
      </ul>
    </>
  );
};

export default Page;
