"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, cartCount, totalPrice } = useCart();
  const [shippingMethod, setShippingMethod] = useState("standard");

  // Calculate shipping cost
  const shippingCost = shippingMethod === "express" ? 9.99 : shippingMethod === "overnight" ? 19.99 : 0;
  const discount = 15.00;
  const finalTotal = totalPrice + shippingCost - discount;

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      
      {/* --- CLEAN BACK TO CART LINK (No background color, just a clean link) --- */}
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-2 flex justify-end">
        <Link href="/cart" className="text-sm text-gray-500 hover:text-black transition flex items-center gap-1">
          ← Back to Cart
        </Link>
      </div>

      {/* --- BREADCRUMB --- */}
      <div className="max-w-7xl mx-auto px-4 pb-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-black">Home</Link> <span className="mx-1">/</span> 
        <Link href="/cart" className="hover:text-black">Cart</Link> <span className="mx-1">/</span> 
        <span className="text-black font-medium">Checkout</span>
      </div>

      {/* --- MAIN LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* --- LEFT COLUMN: CHECKOUT FORM --- */}
        <div className="lg:col-span-2 space-y-8">
          
          <h1 className="text-3xl font-bold text-[#111827]">Checkout</h1>

          {/* --- STEP INDICATOR --- */}
          <div className="flex items-center justify-between relative mt-6 mb-8">
            <div className="flex flex-col items-center z-10">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">1</div>
              <span className="text-xs font-semibold mt-1 text-black">Shipping</span>
            </div>
            <div className="absolute left-0 right-0 top-5 h-[2px] bg-gray-200 -z-10"></div>
            <div className="absolute left-0 right-0 top-5 h-[2px] bg-black w-1/3 -z-10"></div>
            
            <div className="flex flex-col items-center z-10">
              <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold text-sm">2</div>
              <span className="text-xs font-medium mt-1 text-gray-400">Payment</span>
            </div>
            
            <div className="flex flex-col items-center z-10">
              <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold text-sm">3</div>
              <span className="text-xs font-medium mt-1 text-gray-400">Review</span>
            </div>
          </div>

          {/* --- SHIPPING INFORMATION FORM --- */}
          <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl">📍</span>
              <h2 className="text-lg font-bold">Shipping Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">First Name *</label>
                <input type="text" defaultValue="John" className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black transition" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Last Name *</label>
                <input type="text" defaultValue="Doe" className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black transition" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
                <input type="email" defaultValue="john.doe@mail.com" className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black transition" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-gray-700 mb-1">Street Address *</label>
                <input type="text" defaultValue="123 Main Street" className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black transition" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-gray-700 mb-1">Apartment, suite, unit, etc. (optional)</label>
                <input type="text" defaultValue="Apt 4B" className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black transition" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">City *</label>
                <input type="text" defaultValue="New York" className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black transition" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">State / Province *</label>
                <select className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black transition bg-white">
                  <option>New York</option>
                  <option>California</option>
                  <option>Texas</option>
                </select>
              </div>
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">ZIP / Postal Code *</label>
                  <input type="text" defaultValue="10001" className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black transition" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Country *</label>
                  <select className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black transition bg-white">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <input type="checkbox" id="saveAddress" defaultChecked className="w-4 h-4 accent-black" />
              <label htmlFor="saveAddress" className="text-sm text-gray-600">Save this address for next time</label>
            </div>
          </div>

          {/* --- SHIPPING METHOD --- */}
          <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">📦</span>
              <h2 className="text-lg font-bold">Shipping Method</h2>
            </div>

            <div className="space-y-3">
              <div 
                onClick={() => setShippingMethod("standard")}
                className={`flex justify-between items-center p-4 border rounded-[16px] cursor-pointer transition ${shippingMethod === "standard" ? "border-black bg-gray-50" : "border-gray-200 hover:border-gray-400"}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${shippingMethod === "standard" ? "border-black" : "border-gray-300"}`}>
                    {shippingMethod === "standard" && <div className="w-3 h-3 rounded-full bg-black"></div>}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Standard Shipping</p>
                    <p className="text-xs text-gray-500">5-7 business days</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-green-600 text-xs font-semibold">Free</span>
                  <p className="text-[10px] text-gray-400">On orders over $50</p>
                </div>
              </div>

              <div 
                onClick={() => setShippingMethod("express")}
                className={`flex justify-between items-center p-4 border rounded-[16px] cursor-pointer transition ${shippingMethod === "express" ? "border-black bg-gray-50" : "border-gray-200 hover:border-gray-400"}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${shippingMethod === "express" ? "border-black" : "border-gray-300"}`}>
                    {shippingMethod === "express" && <div className="w-3 h-3 rounded-full bg-black"></div>}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Express Shipping</p>
                    <p className="text-xs text-gray-500">2-3 business days</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-medium text-sm">$9.99</span>
                </div>
              </div>

              <div 
                onClick={() => setShippingMethod("overnight")}
                className={`flex justify-between items-center p-4 border rounded-[16px] cursor-pointer transition ${shippingMethod === "overnight" ? "border-black bg-gray-50" : "border-gray-200 hover:border-gray-400"}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${shippingMethod === "overnight" ? "border-black" : "border-gray-300"}`}>
                    {shippingMethod === "overnight" && <div className="w-3 h-3 rounded-full bg-black"></div>}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Overnight Shipping</p>
                    <p className="text-xs text-gray-500">1 business day</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-medium text-sm">$19.99</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- CONTINUE BUTTON --- */}
          <Link href="/payment" className="block w-full">
            <button className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2">
              Continue to Payment →
            </button>
          </Link>

        </div>

        {/* --- RIGHT COLUMN: ORDER SUMMARY --- */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm sticky top-4">
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Order Summary ({cartCount} items)</h2>
              <Link href="/cart" className="text-sm text-gray-500 hover:text-black underline">Edit Cart</Link>
            </div>

            {/* Items List */}
            <div className="space-y-4 max-h-[300px] overflow-y-auto mb-6 pr-2">
              {items.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-6">Your cart is empty</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-[12px] overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-900 line-clamp-1">{item.name}</p>
                      <p className="text-xs text-gray-500">Color: Light Blue</p>
                      <p className="text-xs text-gray-500">Size: M</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-[10px] text-gray-400">× {item.quantity}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Totals */}
            <div className="space-y-3 text-sm border-t border-gray-100 pt-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({cartCount} items)</span>
                <span className="font-medium text-gray-900">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className={shippingCost === 0 ? "text-green-600 font-medium" : "font-medium text-gray-900"}>
                  {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Discount</span>
                <span className="font-medium text-red-500">-${discount.toFixed(2)}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 space-y-3 text-xs text-gray-500 border-t border-gray-100 pt-6">
              <div className="flex items-start gap-3">
                <span className="text-lg">🔒</span>
                <div>
                  <p className="font-medium text-gray-900">Secure Checkout</p>
                  <p>Your information is 100% protected</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🔄</span>
                <div>
                  <p className="font-medium text-gray-900">30-Day Returns</p>
                  <p>Not satisfied? Get a full refund</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🎧</span>
                <div>
                  <p className="font-medium text-gray-900">24/7 Support</p>
                  <p>We're here to help anytime</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🏷️</span>
                <div>
                  <p className="font-medium text-gray-900">Best Price Guarantee</p>
                  <p>We offer the best prices</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}