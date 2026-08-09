"use client";

import Link from "next/link";
import { useState } from "react";
import CartDrawer from "@/components/CartDrawer";

const mockProducts = [
  { id: 1, name: "Classic White Sneakers", price: 89.99, rating: 5, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600", category: "Shoes" },
  { id: 2, name: "Leather Tote Bag", price: 120.00, rating: 4, image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=600", category: "Bags" },
  { id: 3, name: "Oversized Cotton Tee", price: 34.99, rating: 4, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600", category: "T-Shirts" },
  { id: 4, name: "Sunglasses", price: 49.99, rating: 5, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600", category: "Accessories" },
];

export default function ShopPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  return (
    <div className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
      />

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">New Arrivals</h1>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition"
        >
          Cart ({cartItems.length})
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockProducts.map((product) => (
          <div key={product.id} className="group">
            <Link href={`/shop/${product.id}`}>
              <div className="relative bg-white rounded-[24px] overflow-hidden aspect-[4/5] mb-4 shadow-sm hover:shadow-xl transition-all duration-300">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                  {product.category}
                </span>
              </div>
            </Link>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <div className="flex items-center space-x-1 mt-1">
                  <span className="text-yellow-500 text-sm">★</span>
                  <span className="text-xs text-gray-500">{product.rating}.0</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="font-bold text-lg">${product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="mt-1 text-xs font-medium hover:underline text-gray-600 hover:text-black"
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}