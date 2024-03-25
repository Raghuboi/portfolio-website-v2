import Navbar from "@/layouts/navbar";
import "./globals.css";
import { ThemeProvider } from "@/hooks/theme-provider";

export const metadata = {
  title: "Raghunath Prabhakar",
  description: "Raghunath Prabhakar - Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-screen h-screen bg-background dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
