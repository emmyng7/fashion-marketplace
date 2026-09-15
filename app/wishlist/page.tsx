"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/components/CartProvider";
import { CartSkeleton } from "@/components/Skeleton";

type WishlistItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  color?: string;
  size?: string;
  addedOn?: string;
};

export default function WishlistPage() {
  const { addToCart } = useCart();
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [toast, setToast] = useState<string | null>(null); // ✅ Toast state

  // ✅ Load wishlist from Local Storage
  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("btm_wishlist");
      setItems(saved ? JSON.parse(saved) : []);
    }
  }, []);

  // ✅ Save wishlist to Local Storage whenever it changes
  useEffect(() => {
    if (isMounted && typeof window !== "undefined") {
      localStorage.setItem("btm_wishlist", JSON.stringify(items));
      window.dispatchEvent(new Event("storage"));
    }
  }, [items, isMounted]);

  // ✅ Auto-hide toast after 3 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const totalItems = items.length;
  const estTotalValue = items.reduce((sum, item) => sum + item.price, 0);

  const handleAddToCart = (item: WishlistItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
      size: item.size || "M",
      color: item.color || "Default",
    });
    setToast(`✅ Added "${item.name}" to cart!`);
  };

  const handleRemove = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleAddAll = () => {
    items.forEach((item) => handleAddToCart(item));
    setToast(`✅ Added ${items.length} items to cart!`);
  };

  const handleMoveAll = () => {
    handleAddAll();
    setItems([]);
    localStorage.removeItem("btm_wishlist");
  };

  const handleClear = () => {
    if (confirm("Are you sure you want to clear your entire wishlist?")) {
      setItems([]);
      localStorage.removeItem("btm_wishlist");
    }
  };

  if (!isMounted) {
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <div className="h-8 bg-gray-200 rounded-full w-1/3 mb-8 animate-pulse" />
        <CartSkeleton />
      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      
      {/* ✅ PROFESSIONAL TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed top-6 right-6 z-[9999] bg-black text-white px-6 py-4 rounded-[16px] shadow-2xl flex items-center gap-3 animate-fadeIn">
          <span className="text-lg">{toast}</span>
        </div>
      )}

      {/* --- PAGE HEADER --- */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-black">Home</Link> <span className="mx-1">/</span> 
        <span className="text-black font-medium">Wishlist</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#111827]">My Wishlist ({totalItems})</h1>
          <p className="text-sm text-gray-500 mt-1">Items you love. Don't lose them!</p>
        </div>
        <button className="border border-gray-300 bg-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-50 transition flex items-center gap-2">
          🔗 Share Wishlist
        </button>
      </div>

      {/* --- EMPTY STATE --- */}
      {items.length === 0 ? (
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[24px] p-16 text-center shadow-sm">
            <p className="text-6xl mb-4">💔</p>
            <h2 className="text-xl font-bold mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-6">Start saving your favorite items to see them here!</p>
            <Link href="/shop" className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              Start Shopping →
            </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 bg-white rounded-[24px] shadow-sm overflow-hidden">
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase">
              <div className="col-span-5">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Stock</div>
              <div className="col-span-2 text-center">Added On</div>
              <div className="col-span-1 text-center">Action</div>
            </div>

            <div className="divide-y divide-gray-100">
              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-6 py-6 items-center">
                  <div className="md:col-span-5 flex items-center gap-4">
                    <Link href={`/shop/${item.id}`} className="w-16 h-20 bg-gray-100 rounded-[12px] overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </Link>
                    <div>
                      <Link href={`/shop/${item.id}`}>
                        <h3 className="font-medium text-gray-900 text-sm hover:underline">{item.name}</h3>
                      </Link>
                      {item.color && <p className="text-xs text-gray-500 mt-0.5">Color: {item.color}</p>}
                      {item.size && <p className="text-xs text-gray-500">Size: {item.size}</p>}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 text-center font-medium text-sm">${item.price.toFixed(2)}</div>
                  
                  <div className="md:col-span-2 text-center">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> In Stock
                    </span>
                  </div>
                  
                  <div className="md:col-span-2 text-center text-xs text-gray-500">
                    {item.addedOn || new Date().toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  
                  <div className="md:col-span-1 flex justify-center gap-2">
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs hover:bg-gray-800 transition"
                      title="Add to Cart"
                    >
                      🛒
                    </button>
                    <button 
                      onClick={() => handleRemove(item.id)}
                      className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-xs hover:bg-red-100 hover:text-red-600 transition"
                      title="Remove"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50/50">
              <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-medium hover:underline text-gray-600 hover:text-black">
                ← Continue Shopping
              </Link>
              <button 
                onClick={handleClear}
                className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-700 transition"
              >
                🗑️ Clear Wishlist
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-[24px] p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-500 text-xl">♥️</div>
                <div>
                  <p className="font-bold text-lg">{totalItems} Items</p>
                  <p className="text-xs text-gray-500">Total in wishlist</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center border-t border-b border-gray-100 py-4 mb-4">
                <span className="text-sm text-gray-600 font-medium">Est. Total Value</span>
                <span className="text-lg font-bold text-[#111827]">${estTotalValue.toFixed(2)}</span>
              </div>

              <div className="space-y-2">
                <button onClick={handleAddAll} className="w-full bg-black text-white py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                  🛒 Add All to Cart
                </button>
                <button onClick={handleMoveAll} className="w-full border border-gray-300 bg-white text-black py-3 rounded-full text-sm font-semibold hover:bg-gray-50 transition">
                  Move All to Cart
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">You May Also Like</h3>
                <Link href="/shop" className="text-xs text-gray-500 hover:text-black underline">View All →</Link>
              </div>
              
              <div className="space-y-3">
                {[
                  { id: 101, name: "Eau de Parfum", price: 49.99, image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&w=150" },
                  { id: 102, name: "Leather Belt", price: 29.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=150" },
                  { id: 103, name: "Travel Backpack", price: 79.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=150" },
                  { id: 104, name: "Baseball Cap", price: 15.99, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89d?auto=format&fit=crop&w=150" },
                ].map((product) => (
                  <Link key={product.id} href={`/shop/${product.id}`} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-14 bg-gray-100 rounded-[10px] overflow-hidden flex-shrink-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      </div>
                      <div>
                        <p className="text-sm font-medium line-clamp-1">{product.name}</p>
                        <p className="text-xs text-gray-500">${product.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <span className="text-gray-400 group-hover:text-red-500 transition">♡</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}