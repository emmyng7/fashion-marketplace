"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#111827] font-sans pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full max-w-7xl mx-auto mt-6 px-4">
        <div className="relative w-full h-[320px] md:h-[450px] rounded-[40px] bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500 overflow-hidden">
          
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
            <p className="text-xs font-bold uppercase tracking-wider bg-white/20 text-white inline-block px-3 py-1 rounded-full mb-2 backdrop-blur-sm self-start">Summer Arrival</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-md">
              Summer Arrival of Outfit
            </h1>
            <p className="mt-2 text-sm md:text-base text-white/90 drop-shadow-md mb-4">Discover our latest collections.</p>
            <Link href="/shop" className="inline-block bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition shadow-lg self-start">
              Shop Now
            </Link>
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

      {/* --- POPULAR PRODUCTS (Static for now) --- */}
      <div className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-bold">Browse by categories</h2>
              <Link href="/shop" className="text-sm font-medium text-gray-500 hover:text-black">View all</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "Shoes", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300" },
                { name: "Bags", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=300" },
                { name: "Clothing", img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=300" },
                { name: "Watches", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=300" },
                { name: "Accessories", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=300" },
                { name: "Beauty", img: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&w=300" },
              ].map((cat) => (
                <Link key={cat.name} href="/shop" className="relative h-36 rounded-[24px] overflow-hidden bg-white shadow-sm hover:shadow-md transition group">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-0 right-0 text-center text-white font-medium text-sm">{cat.name}</div>
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