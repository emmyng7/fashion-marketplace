"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
};

function ShopContent() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category"); // Gets "Shoes", "Bags", etc.
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  // Filter products based on active category
  const filteredProducts = activeCategory 
    ? products.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase())
    : products;

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <div className="max-w-7xl mx-auto px-4 mt-8">
        
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:text-black">Home</Link> <span className="mx-1">/</span> 
          <span className="text-black font-medium">Shop</span>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#111827]">
            {activeCategory ? activeCategory : "Shop All"}
          </h1>
          <Link href="/shop" className="text-xs text-gray-500 hover:text-black underline">
            View All Products
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading products...</div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No {activeCategory} products found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center text-gray-500">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}