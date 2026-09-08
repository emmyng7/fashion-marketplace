"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { items, cartCount, totalPrice, removeFromCart } = useCart();
  
  // Hydration fix
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const subtotal = totalPrice;
  const shipping = 5.99;
  const finalTotal = subtotal + shipping;

  if (!isMounted) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="text-3xl font-bold text-[#111827]">Your Cart ({cartCount})</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[24px] shadow-sm p-6">
            {items.length === 0 ? (
              <div className="py-12 text-center text-gray-500">
                <p className="text-6xl mb-4">🛒</p>
                <p>Your cart is empty.</p>
                <Link href="/shop" className="inline-block mt-4 bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 border-b border-gray-100 pb-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-[16px] overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                      
                      {/* ✅ THE DELETE BUTTON */}
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="mt-1 text-xs font-medium text-red-500 hover:text-red-700 transition flex items-center gap-1"
                      >
                        🗑️ Delete
                      </button>
                      
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-[24px] p-6 shadow-sm sticky top-4">
            <h2 className="text-lg font-bold mb-6 text-[#111827]">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({cartCount} items)</span>
                <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-gray-900">${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
            <Link href="/checkout">
              <button className="w-full bg-black text-white py-3.5 rounded-full font-semibold hover:bg-gray-800 transition mt-6">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}