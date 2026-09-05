"use client";

import Link from "next/link";
import { useState } from "react";

// Local data directly in the file - No API, No Supabase needed!
const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600",
    category: "Shoes",
  },
  {
    id: 2,
    name: "Leather Tote Bag",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600",
    category: "Bags",
  },
  {
    id: 3,
    name: "Comfort Hoodie",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600",
    category: "Clothing",
  },
    {
    id: 4,
    name: "Minimal Sunglasses",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Classic Wristwatch",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600",
    category: "Watches",
  },
  {
    id: 6,
    name: "Eau de Parfum",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&w=600",
    category: "Beauty",
  },
  {
    id: 7,
    name: "Canvas Tote Bag",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600",
    category: "Bags",
  },
  {
    id: 8,
    name: "Slim Fit Denim",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542272617-08f3dd4b4032?auto=format&fit=crop&w=600",
    category: "Clothing",
  },
  {
    id: 9,
    name: "Leather Belt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600",
    category: "Accessories",
  },
];

export default function ShopPage() {
  const [showProducts] = useState(true);

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <div className="max-w-7xl mx-auto px-4 mt-8">
        
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:text-black">Home</Link> <span className="mx-1">/</span> 
          <span className="text-black font-medium">Shop</span>
        </div>
        <h1 className="text-3xl font-bold text-[#111827] mb-6">Shop All</h1>

        {showProducts && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-[20px] shadow-sm hover:shadow-md transition duration-300 group relative">
                <div className="relative aspect-square bg-gray-50 rounded-[16px] overflow-hidden mb-3">
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
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}