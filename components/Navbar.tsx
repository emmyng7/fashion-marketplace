"use client";

import { useCart } from "@/components/CartProvider";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { cartCount, wishlistCount } = useCart();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [isMobileCatOpen, setIsMobileCatOpen] = useState(false);

  const [isMounted, setIsMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Rotating announcement messages
  const announcements = [
    "🚚 Free shipping on orders over $50",
    "🔄 Easy 30-day returns",
    "🎁 10% off your first order",
    "⭐ Trusted by 10,000+ customers",
  ];
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  // ✅ Check login status
  useEffect(() => {
    setIsMounted(true);
    const savedEmail = localStorage.getItem("btm_login_email");
    setIsLoggedIn(!!savedEmail);
  }, [pathname]);

  // ✅ Rotate announcements every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsCatOpen(false);
    setIsMobileCatOpen(false);
  };

  const categories = [
    { name: "Shoes", icon: "👟", href: "/shop?category=Shoes" },
    { name: "Bags", icon: "👜", href: "/shop?category=Bags" },
    { name: "Clothing", icon: "👕", href: "/shop?category=Clothing" },
    { name: "Watches", icon: "⌚", href: "/shop?category=Watches" },
    { name: "Accessories", icon: "🕶️", href: "/shop?category=Accessories" },
    { name: "Beauty", icon: "🧴", href: "/shop?category=Beauty" },
  ];

  return (
    <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-[999]">

      {/* --- TOP BAR (Rotating Announcements) --- */}
      <div className="bg-[#111827] text-white py-2.5 text-[11px] md:text-xs">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

          {/* ✅ Rotating message on the left */}
          <div className="flex-1 flex justify-center md:justify-start items-center overflow-hidden">
            <span
              key={currentAnnouncement}
              className="flex items-center gap-2 tracking-wide animate-fadeIn"
            >
              {announcements[currentAnnouncement]}
            </span>
          </div>

          {/* Right: Links with dividers and hover effects */}
          <div className="hidden md:flex gap-6 items-center text-[11px] font-medium">
            <Link href="/contact" className="hover:text-[#E48B64] transition-colors duration-300">
              Help &amp; Support
            </Link>
            <span className="w-px h-3 bg-white/20" />
            <Link href="/track-order" className="hover:text-[#E48B64] transition-colors duration-300">
              Track Order
            </Link>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">

        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <span className="text-3xl">🛍️</span>
          <span className="text-2xl font-serif font-bold tracking-wider text-[#111827]">
            BTM
          </span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700 items-center">
          <Link href="/" className="hover:text-black transition border-b-2 border-transparent hover:border-black pb-1">Home</Link>
          <Link href="/shop" className="hover:text-black transition border-b-2 border-transparent hover:border-black pb-1">Shop</Link>

          {/* --- DESKTOP CATEGORIES DROPDOWN --- */}
          <div
            className="relative group"
            onMouseEnter={() => setIsCatOpen(true)}
            onMouseLeave={() => setIsCatOpen(false)}
          >
            <button
              className="hover:text-black transition flex items-center gap-1 pb-1 border-b-2 border-transparent group-hover:border-black"
              onClick={() => setIsCatOpen(!isCatOpen)}
            >
              Categories <span className={`transition-transform duration-300 ${isCatOpen ? 'rotate-180' : ''}`}>⌄</span>
            </button>

            {isCatOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-[16px] shadow-xl border border-gray-100 p-6 w-[450px] grid grid-cols-2 gap-4 animate-fadeIn">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 p-3 rounded-[12px] hover:bg-gray-50 transition group/item"
                  >
                    <span className="text-2xl">{cat.icon}</span>
                    <span className="font-medium text-sm group-hover/item:text-black transition">{cat.name}</span>
                  </Link>
                ))}
                <div className="col-span-2 pt-3 border-t border-gray-100 mt-2">
                  <Link href="/shop" onClick={handleLinkClick} className="text-xs text-gray-500 hover:text-black underline block text-center">
                    View All Categories
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-black transition flex items-center gap-1 pb-1 border-b-2 border-transparent hover:border-black">Support</Link>
        </div>

        <div className="flex items-center gap-3 md:gap-4">

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const query = formData.get("search") as string;
              if (query.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(query)}`;
              }
            }}
            className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2"
          >
            <input
              name="search"
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm outline-none w-36 lg:w-48"
            />
            <button type="submit" className="text-lg text-gray-500 cursor-pointer hover:text-black">
              🔍
            </button>
          </form>

          {/* ✅ SMART PERSON ICON */}
          <Link href={isLoggedIn ? "/account" : "/login"}>
            <button className="text-2xl hover:text-black transition">👤</button>
          </Link>

          {/* ✅ WISHLIST WITH BADGE */}
          <Link href="/wishlist">
            <button className="relative text-2xl hover:text-black transition">
              <span className={isMounted && wishlistCount > 0 ? "text-red-500" : ""}>♡</span>
              {isMounted && wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>
          </Link>

          {/* ✅ CART WITH BADGE */}
          <Link href="/cart">
            <button className="relative text-2xl hover:text-black transition">
              🛒
              {isMounted && cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-gray-700 hover:text-black transition"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute top-full left-0 w-full z-40 pb-4">
          <div className="flex flex-col px-4 py-4 space-y-3 text-sm font-medium text-gray-700">
            <Link href="/" onClick={handleLinkClick} className="hover:text-black transition py-2 border-b border-gray-100">Home</Link>
            <Link href="/shop" onClick={handleLinkClick} className="hover:text-black transition py-2 border-b border-gray-100">Shop</Link>

            <div className="py-2 border-b border-gray-100">
              <button
                onClick={() => setIsMobileCatOpen(!isMobileCatOpen)}
                className="w-full flex justify-between items-center hover:text-black transition"
              >
                Categories
                <span className={`transition-transform duration-300 ${isMobileCatOpen ? 'rotate-180' : ''}`}>⌄</span>
              </button>

              {isMobileCatOpen && (
                <div className="mt-3 pl-4 space-y-2 animate-fadeIn">
                  {categories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      onClick={handleLinkClick}
                      className="flex items-center gap-3 py-2 text-gray-600 hover:text-black transition"
                    >
                      <span className="text-lg">{cat.icon}</span>
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                  <Link href="/shop" onClick={handleLinkClick} className="block text-xs text-blue-600 hover:underline pt-2">
                    View All Categories →
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" onClick={handleLinkClick} className="hover:text-black transition py-2">Support</Link>

            <Link href={isLoggedIn ? "/account" : "/login"} onClick={handleLinkClick} className="hover:text-black transition py-2">
              {isLoggedIn ? "My Account" : "Sign In"}
            </Link>

            <Link href="/register" onClick={handleLinkClick} className="hover:text-black transition py-2">
              Create Account
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}