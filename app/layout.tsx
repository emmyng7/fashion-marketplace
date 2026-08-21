"use client";

import { CartProvider } from "@/components/CartProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // <-- Import the Footer
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Hide the Navbar ONLY on the checkout page (to keep it clean)
  const showNavbar = pathname !== "/checkout";
  // Show the Footer on ALL pages (including checkout)
  const showFooter = true;

  return (
    <html lang="en">
      <body className="antialiased bg-[#F5F5F5]">
        <CartProvider>
          {showNavbar && <Navbar />}
          {children}
          {showFooter && <Footer />} {/* <-- Footer now shows everywhere */}
        </CartProvider>
      </body>
    </html>
  );
}