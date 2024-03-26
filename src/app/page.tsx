import TextRotator from "@/components/ui/text-rotator";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import HomeSubtitle from "@/features/home-subtitle";
import SocialMediaButtons from "@/features/social-media-buttons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Raghunath Prabhakar",
  description: "Home Page - Raghunath Prabhakar's Portfolio Website",
};

export default function Page() {
  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden gap-10">
      <div className="flex flex-col gap-3">
        <TypewriterEffect
          words={[
            {
              text: "Raghunath",
            },
            {
              text: "Prabhakar",
            },
          ]}
          className="flex items-end text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-center"
          cursorClassName="bg-muted h-full"
        />
        <HomeSubtitle />
      </div>
      <SocialMediaButtons />
    </div>
  );
}
