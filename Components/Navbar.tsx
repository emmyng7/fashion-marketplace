"use client";

import { useCart } from "@/components/CartProvider";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { cartCount } = useCart();
  
  // This prevents the hydration mismatch error
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-white shadow-sm border-b border-gray-100">
      {/* --- TOP BAR --- */}
      <div className="border-b border-gray-200 py-2 text-[10px] md:text-xs text-gray-500 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4 md:gap-6">
            <span className="flex items-center gap-1">🚚 Free shipping on orders over $50</span>
            <span className="hidden md:flex items-center gap-1">🔄 Easy 30-day returns</span>
          </div>
          <div className="hidden md:flex gap-6">
            <Link href="#" className="hover:text-black transition">Help & Support</Link>
            <Link href="#" className="hover:text-black transition">Track Order</Link>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 hover:opacity-80 transition">
          <span className="text-3xl">🛍️</span> Shopigo
        </Link>
        
        {/* Center Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-black transition border-b-2 border-transparent hover:border-black pb-1">Home</Link>
          <Link href="/shop" className="hover:text-black transition border-b-2 border-transparent hover:border-black pb-1">Shop</Link>
          <Link href="#" className="hover:text-black transition flex items-center gap-1 pb-1">Categories ⌄</Link>
        </div>
        
        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input type="text" placeholder="Search..." className="bg-transparent text-sm outline-none w-36 lg:w-48" />
            <span className="text-lg text-gray-500 cursor-pointer hover:text-black">🔍</span>
          </div>
          <Link href="/account">
            <button className="text-2xl hover:text-black transition">👤</button>
          </Link>
          
          <Link href="/cart">
            <button className="relative text-2xl hover:text-black transition">
              🛒
              {/* This prevents the 0 -> X hydration error */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {isMounted ? cartCount : 0}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}