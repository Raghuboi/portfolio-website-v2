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
    <div className="h-[40rem] w-full flex justify-center items-center overflow-hidden px-[3rem]">
      <div className="w-[max-content] flex flex-col items-center justify-center gap-8">
        <HomeTitle />
        <HomeButtons />
      </div>
    </div>
  );
}
