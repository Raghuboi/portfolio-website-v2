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
      <body>{children}</body>
    </html>
  );
}
