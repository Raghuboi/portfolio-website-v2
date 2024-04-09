import Navbar from "@/layouts/navbar";
import "./globals.css";
import { ThemeProvider } from "@/hooks/theme-provider";
import Background from "@/layouts/background";

export const metadata = {
  title: "Raghunath Prabhakar",
  description: "Raghunath Prabhakar's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
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
