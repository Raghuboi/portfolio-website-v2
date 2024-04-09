import { FileTextIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {}

const Page: React.FC<Props> = async () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Enroll</h1>
      <p>
        A Registration and Scheduling web-app for the Manitoba Conservatory of
        Music and Arts.
      </p>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.google.com/document/d/13TwDGCWG0LtZ2vfxigWodCNwXiP2EbsBkeqjXb7ZerU/edit?usp=sharing"
        className="flex flex-wrap gap-2"
      >
        <span className="flex items-center gap-2">
          <FileTextIcon />
          Docs:
        </span>
        <span className="flex items-center gap-1 font-medium text-purple-500 hover:underline">
          Project Completion Report
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
          Part of the 8-month-long University of Winnipeg capstone project
        </li>
        <li>
          Lead developer in a team of 4 that shipped an internal tool for
          student/class management
        </li>
        <li>
          Led weekly standups and managed the team; observed programming
          standards and co-authored documentation
        </li>
        <li>
          Used modular monolith architecture to develop loosely coupled APIs
        </li>
        <li>
          Developed studio scheduling APIs for managing individual and group
          classes
        </li>
        <li>Developed payment management module for student registrations</li>
      </ul>
    </>
  );
};

export default Page;
