import HomeButtons from "@/features/home-buttons";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const HomeTitle = dynamic(() => import("@/features/home-title"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Home - Raghunath Prabhakar",
  description: "Home Page - Raghunath Prabhakar's Portfolio Website",
};

export default async function Page() {
  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden gap-10 px-[3rem]">
      <HomeTitle />
      <HomeButtons />
    </div>
  );
}
