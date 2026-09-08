"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";

// Mock data with real, working image URLs
const wishlistItems = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=300",
    color: "Light Blue",
    size: "M",
    stock: "In Stock",
    addedOn: "May 12, 2024",
  },
  {
    id: 2,
    name: "Comfort Hoodie",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=300",
    color: "Beige",
    size: "L",
    stock: "In Stock",
    addedOn: "May 10, 2024",
  },
  {
    id: 3,
    name: "Leather Duffle Bag",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=300",
    color: "Brown",
    size: "One Size",
    stock: "In Stock",
    addedOn: "May 08, 2024",
  },
  {
    id: 4,
    name: "Minimal Sneakers",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300",
    color: "White",
    size: "42",
    stock: "In Stock",
    addedOn: "May 05, 2024",
  },
  {
    id: 5,
    name: "Polarized Sunglasses",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=300",
    color: "Black",
    size: "One Size",
    stock: "In Stock",
    addedOn: "May 03, 2024",
  },
  {
    id: 6,
    name: "Classic Watch",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=300",
    color: "Brown",
    size: "One Size",
    stock: "In Stock",
    addedOn: "Apr 30, 2024",
  },
];

// Mock "You May Also Like" products
const alsoLike = [
  { id: 101, name: "Eau de Parfum", price: 49.99, image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&w=150" },
  { id: 102, name: "Leather Belt", price: 29.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=150" },
  { id: 103, name: "Travel Backpack", price: 79.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=150" },
  { id: 104, name: "Baseball Cap", price: 15.99, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89d?auto=format&fit=crop&w=150" },
];

export default function WishlistPage() {
  const { addToCart } = useCart();
  const [items, setItems] = useState(wishlistItems);

  // Calculate totals
  const totalItems = items.length;
  const estTotalValue = items.reduce((sum, item) => sum + item.price, 0);

  // Add a single item to the cart
  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
      size: item.size,
      color: item.color,
    });
  };

  // Remove an item from the wishlist
  const handleRemove = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Add ALL items to the cart
  const handleAddAll = () => {
    items.forEach((item) => handleAddToCart(item));
  };

  // Move ALL items to the cart (and clear wishlist)
  const handleMoveAll = () => {
    handleAddAll();
    setItems([]);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      
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

      {/* --- MAIN LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- LEFT COLUMN: PRODUCT TABLE --- */}
        <div className="lg:col-span-2 bg-white rounded-[24px] shadow-sm overflow-hidden">
          
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase">
            <div className="col-span-5">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Stock Status</div>
            <div className="col-span-2 text-center">Added On</div>
            <div className="col-span-1 text-center">Action</div>
          </div>

          {/* Items List */}
          <div className="divide-y divide-gray-100">
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-6 py-6 items-center">
                <div className="md:col-span-5 flex items-center gap-4">
                  {/* REAL IMAGE NOW */}
                  <div className="w-16 h-20 bg-gray-100 rounded-[12px] overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Color: {item.color}</p>
                    <p className="text-xs text-gray-500">Size: {item.size}</p>
                  </div>
                </div>
                
                <div className="md:col-span-2 text-center font-medium text-sm">${item.price.toFixed(2)}</div>
                
                <div className="md:col-span-2 text-center">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> {item.stock}
                  </span>
                </div>
                
                <div className="md:col-span-2 text-center text-xs text-gray-500">{item.addedOn}</div>
                
                <div className="md:col-span-1 flex justify-center gap-2">
                  {/* Working "Add to Cart" */}
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs hover:bg-gray-800 transition"
                  >
                    🛒
                  </button>
                  {/* Working "Remove" */}
                  <button 
                    onClick={() => handleRemove(item.id)}
                    className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-xs hover:bg-gray-200 transition"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer */}
          <div className="px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50/50">
            <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-medium hover:underline text-gray-600 hover:text-black">
              ← Continue Shopping
            </Link>
            <button 
              onClick={() => setItems([])}
              className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-700 transition"
            >
              🗑️ Clear Wishlist
            </button>
          </div>
        </div>

        {/* --- RIGHT COLUMN: SIDEBAR --- */}
        <div className="space-y-6">
          
          {/* Summary Card */}
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
              {/* Working "Add All to Cart" */}
              <button onClick={handleAddAll} className="w-full bg-black text-white py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                🛒 Add All to Cart
              </button>
              {/* Working "Move All to Cart" */}
              <button onClick={handleMoveAll} className="w-full border border-gray-300 bg-white text-black py-3 rounded-full text-sm font-semibold hover:bg-gray-50 transition">
                Move All to Cart
              </button>
            </div>
          </div>

          {/* You May Also Like (Now with working links!) */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">You May Also Like</h3>
              <Link href="/shop" className="text-xs text-gray-500 hover:text-black underline">View All →</Link>
            </div>
            
            <div className="space-y-3">
              {alsoLike.map((product) => (
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
                  <button className="text-gray-400 hover:text-red-500 transition">♡</button>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}