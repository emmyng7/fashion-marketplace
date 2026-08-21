"use client";

import Link from "next/link";

export default function TrackOrderPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      
      {/* --- BREADCRUMB --- */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-black">Home</Link> <span className="mx-1">/</span> 
        <span className="text-black font-medium">Track Order</span>
      </div>

      {/* --- PAGE HEADER --- */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <h1 className="text-3xl font-bold text-[#111827]">Track Order</h1>
        <p className="text-sm text-gray-500 mt-1">Stay updated with your order status</p>
      </div>

      {/* --- MAIN LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- LEFT COLUMN: TRACKING INFO --- */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Order Header Card */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-100 pb-4 mb-4">
              <div>
                <h2 className="text-lg font-bold text-[#111827]">Order #SH123456</h2>
                <p className="text-xs text-gray-500">Placed on May 12, 2024 at 10:30 AM</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Delivered</span>
                <span className="text-xs text-blue-600 hover:text-blue-800 underline cursor-pointer">Need help? Contact Support</span>
              </div>
            </div>
          </div>

          {/* Progress Stepper (Horizontal) */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm">
            <div className="flex justify-between items-center relative px-2 sm:px-6">
              {/* The connecting line */}
              <div className="absolute top-8 left-10 right-10 h-[2px] bg-green-500 z-0 hidden sm:block"></div>
              
              {[
                { step: "Order Placed", date: "May 12, 10:30 AM", icon: "📦" },
                { step: "Processing", date: "May 12, 02:15 PM", icon: "⚙️" },
                { step: "Shipped", date: "May 13, 09:40 AM", icon: "🚚" },
                { step: "Out for Delivery", date: "May 15, 08:20 AM", icon: "🚛" },
                { step: "Delivered", date: "May 15, 02:45 PM", icon: "✅" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center z-10 w-full">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center text-lg shadow-sm mb-2">
                    {item.icon}
                  </div>
                  <p className="text-[10px] font-semibold text-gray-900 text-center">{item.step}</p>
                  <p className="text-[8px] text-gray-400 text-center">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tracking Details List */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Tracking Details</h3>
            <div className="space-y-6 relative border-l-2 border-gray-200 ml-4 pb-4">
              
              {/* Delivered */}
              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <p className="font-semibold text-sm">Delivered</p>
                    <p className="text-xs text-gray-500">Your package has been delivered</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 sm:mt-0">May 15, 2024 02:45 PM</p>
                </div>
                <p className="text-xs text-gray-400 mt-1">New York, NY, USA</p>
              </div>

              {/* Out for Delivery */}
              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></div>
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <p className="font-semibold text-sm">Out for Delivery</p>
                    <p className="text-xs text-gray-500">Package is out for delivery</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 sm:mt-0">May 15, 2024 08:30 AM</p>
                </div>
                <p className="text-xs text-gray-400 mt-1">New York, NY, USA</p>
              </div>

              {/* In Transit */}
              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></div>
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <p className="font-semibold text-sm">In Transit</p>
                    <p className="text-xs text-gray-500">Package arrived at local distribution center</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 sm:mt-0">May 14, 2024 11:20 PM</p>
                </div>
                <p className="text-xs text-gray-400 mt-1">New York, NY, USA</p>
              </div>

              {/* In Transit 2 */}
              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></div>
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <p className="font-semibold text-sm">In Transit</p>
                    <p className="text-xs text-gray-500">Package departed from regional facility</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 sm:mt-0">May 13, 2024 09:40 AM</p>
                </div>
                <p className="text-xs text-gray-400 mt-1">Newark, NJ, USA</p>
              </div>

              {/* Order Placed */}
              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></div>
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <p className="font-semibold text-sm">Order Placed</p>
                    <p className="text-xs text-gray-500">Your order has been placed successfully</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 sm:mt-0">May 12, 2024 10:30 AM</p>
                </div>
                <p className="text-xs text-gray-400 mt-1">New York, NY, USA</p>
              </div>

            </div>
            <button className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              Show less ^
            </button>
          </div>

          {/* Need Help Banner */}
          <div className="bg-gray-50 rounded-[16px] p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">🎧</div>
              <div>
                <p className="font-semibold text-sm">Need help with your order?</p>
                <p className="text-xs text-gray-500">Our support team is here to help you with any questions.</p>
              </div>
            </div>
            <Link href="/contact">
              <button className="bg-black text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-800 transition whitespace-nowrap">
                Contact Support
              </button>
            </Link>
          </div>

        </div>

        {/* --- RIGHT COLUMN: ORDER SUMMARY --- */}
        <div className="lg:col-span-1 space-y-6">
          
          <div className="bg-white rounded-[20px] p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Order Summary</h3>
            
            {/* Items */}
            <div className="space-y-4 border-b border-gray-100 pb-4">
              {[
                { name: "Classic Denim Jacket", color: "Light Blue", size: "M", qty: 1, price: 59.99, img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=150" },
                { name: "Comfort Hoodie", color: "Beige", size: "L", qty: 1, price: 44.99, img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=150" },
                { name: "Leather Duffle Bag", color: "Brown", size: "One Size", qty: 1, price: 129.99, img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=150" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-12 h-14 bg-gray-100 rounded-[10px] overflow-hidden flex-shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                    <p className="text-[10px] text-gray-500">{item.color} • Size {item.size}</p>
                    <p className="text-[10px] text-gray-500">Qty: {item.qty}</p>
                  </div>
                  <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-2 pt-4 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal (3 items)</span>
                <span className="font-medium text-gray-900">$234.97</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-gray-900">$5.99</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Discount</span>
                <span className="font-medium text-red-500">-$15.00</span>
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$225.96</span>
              </div>
              <div className="text-[10px] text-red-500 font-medium text-right">You saved $15.00</div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-2">Shipping Address</h3>
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <span className="text-lg mt-0.5">📍</span>
              <div>
                <p className="font-medium text-gray-900">John Doe</p>
                <p>123 Main Street, Apt 4B</p>
                <p>New York, NY 10001, USA</p>
                <p className="mt-1 text-gray-500">+1 (123) 456-7890</p>
              </div>
            </div>
            <button className="w-full mt-4 border border-gray-300 text-sm font-medium py-2 rounded-full hover:bg-gray-50 transition">
              View Order Details
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}