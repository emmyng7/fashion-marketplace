"use client";

import { CartProvider } from "@/components/CartProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // ✅ Hide Navbar only on Checkout page
  const showNavbar = pathname !== "/checkout";

  // ✅ Hide Footer on these pages (focused/checkout experiences):
  const hiddenFooterPages = [
    "/checkout",
    "/cart",
    "/wishlist",
    "/login",
    "/register",
    "/account",
     // ✅ NEW: Contact page — No footer
  ];

  // ✅ Also hide footer on ANY product detail page (e.g., /shop/1)
  const isProductDetailPage = pathname.startsWith("/shop/") && pathname !== "/shop";

  const showFooter = !hiddenFooterPages.includes(pathname) && !isProductDetailPage;

  return (
    <html lang="en">
      <body className="antialiased bg-[#F5F5F5]">
        <CartProvider>
          {showNavbar && <Navbar />}
          {children}
          {showFooter && <Footer />}
        </CartProvider>
      </body>
    </html>
  );
}