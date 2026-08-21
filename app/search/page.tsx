"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "sneakers"; // Default to "sneakers" if no query
  
  // Mock search results (filtering our product list)
  const allProducts = [
    { id: 1, name: "Nike Air Force 1 '07", price: 89.99, originalPrice: 120.00, rating: 4.5, reviews: 128, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300", category: "Men's Shoes" },
    { id: 2, name: "Adidas Campus 00s", price: 84.99, originalPrice: 100.00, rating: 4.7, reviews: 98, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=300", category: "Unisex Shoes" },
    { id: 3, name: "Puma RS-X Effect", price: 94.99, rating: 4.6, reviews: 76, image: "https://images.unsplash.com/photo-1542272617-08f3dd4b4032?auto=format&fit=crop&w=300", category: "Men's Shoes" },
    { id: 4, name: "Converse Chuck Taylor", price: 65.00, rating: 4.8, reviews: 112, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=300", category: "Kids' Shoes" },
    { id: 5, name: "New Balance 574", price: 99.99, rating: 4.4, reviews: 88, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=300", category: "Men's Shoes" },
    { id: 6, name: "Nike Air Max 270", price: 129.99, rating: 4.6, reviews: 95, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=300", category: "Men's Shoes" },
    { id: 7, name: "Adidas Ultraboost 22", price: 159.99, rating: 4.9, reviews: 67, image: "https://images.unsplash.com/photo-1542272617-08f3dd4b4032?auto=format&fit=crop&w=300", category: "Men's Shoes" },
    { id: 8, name: "Puma RS-X Reinvent", price: 109.99, rating: 4.5, reviews: 53, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300", category: "Unisex Shoes" },
  ];

  // Filter products based on the search query (simple mock logic)
  const filteredProducts = allProducts.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      
      {/* --- BREADCRUMB --- */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-black">Home</Link> <span className="mx-1">/</span> 
        <span className="text-black font-medium">Search Results</span>
      </div>

      {/* --- PAGE HEADER --- */}
      <div className="max-w-7xl mx-auto px-4 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#111827]">Search results for &quot;{query}&quot;</h1>
          <p className="text-sm text-gray-500 mt-1">We found {filteredProducts.length} results for &quot;{query}&quot;</p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-500">Sort by:</span>
          <select className="bg-white border border-gray-200 rounded-full px-4 py-2 outline-none focus:border-black transition">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* --- MAIN LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* --- LEFT COLUMN: FILTERS --- */}
        <div className="lg:col-span-1 space-y-6">
          
          <div className="bg-white rounded-[20px] p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Filter by</h3>
              <button className="text-xs text-blue-600 hover:text-blue-800 underline">Clear all</button>
            </div>

            {/* Category Filter */}
            <div className="mb-4 border-b border-gray-100 pb-4">
              <div className="flex justify-between items-center mb-2 cursor-pointer">
                <p className="font-medium text-sm">Category</p>
                <span className="text-xs text-gray-400">⌃</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { name: "Men's Shoes", count: 56 },
                  { name: "Women's Shoes", count: 48 },
                  { name: "Kids' Shoes", count: 12 },
                  { name: "Sports & Outdoor", count: 9 },
                  { name: "Accessories", count: 3 },
                ].map((cat) => (
                  <label key={cat.name} className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer hover:text-black transition">
                    <input type="checkbox" className="w-3.5 h-3.5 accent-black rounded" />
                    {cat.name} ({cat.count})
                  </label>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-4 border-b border-gray-100 pb-4">
              <div className="flex justify-between items-center mb-2 cursor-pointer">
                <p className="font-medium text-sm">Brand</p>
                <span className="text-xs text-gray-400">⌃</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { name: "Nike", count: 28 },
                  { name: "Adidas", count: 24 },
                  { name: "Puma", count: 16 },
                  { name: "Converse", count: 14 },
                  { name: "New Balance", count: 12 },
                ].map((brand) => (
                  <label key={brand.name} className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer hover:text-black transition">
                    <input type="checkbox" className="w-3.5 h-3.5 accent-black rounded" />
                    {brand.name} ({brand.count})
                  </label>
                ))}
              </div>
              <button className="text-xs text-blue-600 hover:text-blue-800 underline mt-2">+ More</button>
            </div>

            {/* Price Filter */}
            <div className="mb-4 border-b border-gray-100 pb-4">
              <div className="flex justify-between items-center mb-2 cursor-pointer">
                <p className="font-medium text-sm">Price Range</p>
                <span className="text-xs text-gray-400">⌃</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-500">$20</span>
                <div className="flex-1 h-1 bg-gray-200 rounded-full relative">
                  <div className="absolute left-0 right-0 top-0 h-full bg-black rounded-full w-3/4"></div>
                </div>
                <span className="text-gray-500">$280</span>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input type="text" defaultValue="20" className="w-14 border border-gray-200 rounded-full px-2 py-1 text-xs text-center outline-none focus:border-black" />
                <span className="text-gray-400">—</span>
                <input type="text" defaultValue="280" className="w-14 border border-gray-200 rounded-full px-2 py-1 text-xs text-center outline-none focus:border-black" />
                <button className="bg-black text-white text-[10px] px-3 py-1 rounded-full font-medium hover:bg-gray-800 transition">Apply</button>
              </div>
            </div>

            {/* Color Filter */}
            <div className="mb-4 border-b border-gray-100 pb-4">
              <div className="flex justify-between items-center mb-2 cursor-pointer">
                <p className="font-medium text-sm">Color</p>
                <span className="text-xs text-gray-400">⌃</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["black", "gray", "blue", "white", "beige", "red"].map((color) => (
                  <button key={color} className={`w-6 h-6 rounded-full border border-gray-200 ${color === "white" ? "bg-white border-gray-300" : `bg-${color}-500`} hover:ring-2 hover:ring-black transition`}></button>
                ))}
                <button className="text-[10px] text-blue-600 hover:text-blue-800 underline px-1">+5</button>
              </div>
            </div>

            {/* Size Filter */}
            <div className="mb-4 border-b border-gray-100 pb-4">
              <div className="flex justify-between items-center mb-2 cursor-pointer">
                <p className="font-medium text-sm">Size (US)</p>
                <span className="text-xs text-gray-400">⌃</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["6", "7", "8", "9", "10", "11"].map((size) => (
                  <button key={size} className="w-8 h-8 rounded-full border border-gray-200 text-[10px] font-medium hover:border-black transition">{size}</button>
                ))}
                <button className="w-8 h-8 rounded-full border border-gray-200 text-[10px] font-medium hover:border-black transition">+</button>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-4 border-b border-gray-100 pb-4">
              <div className="flex justify-between items-center mb-2 cursor-pointer">
                <p className="font-medium text-sm">Rating</p>
                <span className="text-xs text-gray-400">⌃</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { stars: 5, count: 64 },
                  { stars: 4, count: 90 },
                  { stars: 3, count: 10 },
                  { stars: 2, count: 6 },
                  { stars: 1, count: 20 },
                ].map((rate) => (
                  <label key={rate.stars} className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer hover:text-black transition">
                    <input type="checkbox" className="w-3.5 h-3.5 accent-black rounded" />
                    <span className="flex items-center gap-1">
                      {'★'.repeat(rate.stars)}
                      <span className="text-gray-400">& up ({rate.count})</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* --- RIGHT COLUMN: PRODUCTS --- */}
        <div className="lg:col-span-3 space-y-6">

          {/* Banner */}
          <div className="bg-gray-100 rounded-[20px] p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=150" alt="Sneaker" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 className="font-bold text-lg">Step Up Your Style</h3>
                <p className="text-sm text-gray-600">Discover the latest sneaker trends and find your perfect pair.</p>
              </div>
            </div>
            <Link href="/shop">
              <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition whitespace-nowrap">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-[20px] shadow-sm hover:shadow-md transition duration-300 group relative">
                <div className="relative aspect-square bg-gray-50 rounded-[16px] overflow-hidden mb-3">
                  {product.originalPrice && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      -{Math.round((1 - product.price/product.originalPrice) * 100)}%
                    </span>
                  )}
                  <button className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-full text-gray-700 shadow-sm hover:bg-white transition">♡</button>
                  <Link href={`/shop/${product.id}`}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </Link>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <Link href={`/shop/${product.id}`}>
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</h4>
                      <p className="text-[10px] text-gray-500 mt-0.5">{product.category}</p>
                    </Link>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-[10px] text-yellow-500">★</span>
                      <span className="text-[10px] text-gray-500">{product.rating}</span>
                      <span className="text-[10px] text-gray-400">({product.reviews})</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm">${product.price}</p>
                    {product.originalPrice && (
                      <p className="text-[10px] text-gray-400 line-through">${product.originalPrice}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center pt-4 text-xs">
            <p className="text-gray-500">Showing 1-{filteredProducts.length} of {filteredProducts.length} results</p>
            <div className="flex gap-1">
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-black transition">1</button>
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-black transition">2</button>
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-black transition">3</button>
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-black transition">...</button>
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-black transition">5</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}