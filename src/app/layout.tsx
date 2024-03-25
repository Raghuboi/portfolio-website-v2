import Navbar from "@/layouts/navbar";
import "./globals.css";
import { ThemeProvider } from "@/hooks/theme-provider";
import Background from "@/layouts/background";

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
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Background>
            <Navbar />
            {children}
          </Background>
        </ThemeProvider>
      </body>
    </html>
  );
}
