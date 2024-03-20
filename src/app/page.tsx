import { AuroraBackground } from "@/components/ui/aurora-background";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default async function Page() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="h-[40rem] w-full bg-background flex flex-col items-center justify-center overflow-hidden rounded-md">
      <TypewriterEffectSmooth
        words={[
          {
            text: "Raghunath",
          },
          {
            text: "Prabhakar",
          },
        ]}
        cursorClassName="bg-sky-500 dark:bg-indigo-500"
      />
      <div className="w-[35rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_0%,white)]"></div>
      </div>
    </div>
  );
}
