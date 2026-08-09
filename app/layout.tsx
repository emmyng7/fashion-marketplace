import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nextgen | Fashion Marketplace",
  description: "Discover today's trends that define your unique style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}