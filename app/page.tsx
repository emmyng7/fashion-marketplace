"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
};

export default function Home() {
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);
  
   // --- SLIDING HERO LOGIC ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=80", // Woman in stylish coat
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80", // Fashion models in colorful outfits
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80", // Woman carrying shopping bags
    "https://images.unsplash.com/photo-1529139574466-a302a2debb6e?auto=format&fit=crop&w=1600&q=80", // Stylish woman in white top
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1600&q=80", // Trendy street style
  ];

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setPopularProducts(data.slice(0, 6));
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#111827] font-sans pb-20">
      
      {/* --- SLIDING HERO SECTION --- */}
      <section className="relative w-full max-w-7xl mx-auto mt-6 px-4">
        <div className="relative w-full h-[320px] md:h-[450px] rounded-[40px] overflow-hidden">
          
          {/* Background Images that slide */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={slide} 
                alt="Fashion"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Dark overlay to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 z-20">
            <p className="text-xs font-bold uppercase tracking-wider bg-white/20 text-white inline-block px-3 py-1 rounded-full mb-2 backdrop-blur-sm self-start">Summer Arrival</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-md">
              Summer Arrival of Outfit
            </h1>
            <p className="mt-2 text-sm md:text-base text-white/90 drop-shadow-md mb-4">Discover our latest collections.</p>
            <Link href="/shop" className="inline-block bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition shadow-lg self-start">
              Shop Now
            </Link>
          </div>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* --- FEATURES BAR --- */}
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-[20px] p-6 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🚚", title: "Free Shipping", desc: "On orders over $50" },
            { icon: "🔄", title: "Easy Returns", desc: "30 days return" },
            { icon: "🔒", title: "Secure Payment", desc: "100% secure" },
            { icon: "🎧", title: "24/7 Support", desc: "Dedicated support" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 justify-center md:justify-start px-2">
              <span className="text-3xl text-gray-600">{item.icon}</span>
              <div>
                <p className="font-semibold text-sm">{item.title}</p>
                <p className="text-[10px] text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- POPULAR PRODUCTS --- */}
      <div className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-bold">Popular Products</h2>
              <Link href="/shop" className="text-sm font-medium text-gray-500 hover:text-black">View all</Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {popularProducts.map((product) => (
                <Link key={product.id} href={`/shop/${product.id}`} className="bg-white p-3 rounded-[16px] shadow-sm hover:shadow-md transition group">
                  <div className="aspect-square bg-gray-50 rounded-[12px] overflow-hidden mb-2">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <p className="text-xs font-medium line-clamp-1">{product.name}</p>
                  <p className="text-[10px] text-gray-500">{product.category}</p>
                  <p className="font-bold text-sm mt-1">${product.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#F4E4E4] rounded-[24px] p-6 relative overflow-hidden">
            <div className="relative z-10">
              <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-800">Exclusive</span>
              <h3 className="text-xl font-bold mt-3 mb-1">Exclusive fashion offers await for you!</h3>
              <Link href="/shop" className="text-sm font-medium underline underline-offset-4 mt-4 inline-block hover:text-gray-700">Shop Now →</Link>
            </div>
            <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=200" alt="Bag" className="absolute -bottom-6 -right-6 w-32 h-32 object-cover rounded-full opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
}