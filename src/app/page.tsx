import HomeAbout from "@/features/home-about";
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
    <div className="min-h-[85dvh] max-w-full flex justify-center items-center px-[3rem]">
      <div className="max-w-[40rem] flex flex-col items-center justify-center gap-4 sm:gap-8">
        <HomeTitle />
        <HomeAbout />
        <HomeButtons />
      </div>
    </div>
  );
}
