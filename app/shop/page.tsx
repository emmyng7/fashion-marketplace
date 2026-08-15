"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import CartDrawer from "@/components/CartDrawer";
import { useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  description: string;
  isNew?: boolean;
  discount?: number;
};

export default function ShopPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  const { items, addToCart, cartCount } = useCart();

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

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={items} />

      <div className="max-w-7xl mx-auto px-4 mt-8">
        
        {/* --- BREADCRUMB --- */}
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:text-black">Home</Link> <span className="mx-1">/</span> <span className="text-black font-medium">Categories</span>
        </div>
        <h1 className="text-3xl font-bold text-[#111827] mb-6">All Categories</h1>

        {/* --- CATEGORY BANNER --- */}
        <div className="relative bg-[#F0EBE3] rounded-[24px] p-8 md:p-12 overflow-hidden mb-10">
          <div className="relative z-10 max-w-sm">
            <h2 className="text-3xl font-bold text-[#111827] mb-2">Find exactly what <br/> you're looking for</h2>
            <p className="text-sm text-gray-600 mb-6">Quality products, great prices and best deals!</p>
            <Link href="/shop" className="inline-block bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition shadow-lg">
              Shop Now
            </Link>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800" 
            alt="Clothing Rack" 
            className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-50 md:opacity-100 rounded-r-[24px] hidden md:block" 
          />
        </div>

        {/* --- CATEGORY ICON BAR --- */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {[
            { name: "All", icon: "👕" },
            { name: "Men", icon: "🧥" },
            { name: "Women", icon: "👗" },
            { name: "Shoes", icon: "👟" },
            { name: "Bags", icon: "👜" },
            { name: "Accessories", icon: "⌚" },
            { name: "Beauty", icon: "🧴" },
            { name: "Sale", icon: "🏷️" },
          ].map((cat, idx) => (
            <button 
              key={cat.name} 
              className={`flex flex-col items-center gap-1 min-w-[80px] p-3 rounded-[16px] border transition-all ${idx === 0 ? 'border-black bg-white' : 'border-transparent hover:border-gray-200 bg-white'}`}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-[10px] font-medium text-gray-600">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* --- FILTER BAR --- */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-3">
            <button className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:border-black transition">Filters ⌄</button>
            <button className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:border-black transition">Price ⌄</button>
            <button className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:border-black transition">Size ⌄</button>
            <button className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:border-black transition">Color ⌄</button>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Sort by:</span>
            <button className="bg-white border border-gray-200 px-4 py-2 rounded-full hover:border-black transition flex items-center gap-2">Featured ⌄</button>
          </div>
        </div>

        {/* --- PRODUCT GRID (4 Columns) --- */}
        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading products...</div>
        ) : (
          <>
            <div className="text-sm text-gray-500 mb-6">Showing 1-{products.length} of {products.length} products</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-[20px] shadow-sm hover:shadow-md transition duration-300 group relative">
                  <div className="relative aspect-square bg-gray-50 rounded-[16px] overflow-hidden mb-4">
                    {product.discount && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">-{product.discount}%</span>
                    )}
                    <button className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-full text-gray-700 shadow-sm hover:bg-white transition">♡</button>
                    <Link href={`/shop/${product.id}`}>
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    </Link>
                  </div>
                  <Link href={`/shop/${product.id}`}>
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-1 mb-1">{product.name}</h4>
                  </Link>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-sm text-gray-900">${product.price}</p>
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] text-yellow-500">★</span>
                      <span className="text-[10px] text-gray-500">{product.rating}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="mt-3 w-full py-2 bg-black text-white text-xs font-semibold rounded-full hover:bg-gray-800 transition opacity-0 group-hover:opacity-100"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
            
            {/* --- PAGINATION --- */}
            <div className="flex justify-center gap-2 mt-12">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-sm hover:border-black transition">1</button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-sm hover:border-black transition">2</button>
              <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">3</button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-sm hover:border-black transition">...</button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-sm hover:border-black transition">99</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}