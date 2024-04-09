import ProjectTabs from "@/features/project-tabs";

export const metadata = {
  title: "Projects - Raghunath Prabhakar",
  description: "Projects - Raghunath Prabhakar's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[75dvh] py-4 flex items-center justify-center !font-mono">
      <ProjectTabs>{children}</ProjectTabs>
    </div>
  );
}
