"use client";

import Link from "next/link";
import { useState } from "react";

export default function AccountPage() {
  // Mock data for the dashboard
  const [activeTab, setActiveTab] = useState("Dashboard");
  
  const user = {
    name: "John Doe",
    email: "john.doe@mail.com",
    phone: "(123) 456-7890",
    joined: "March 15, 2024",
    avatar: "https://i.pravatar.cc/300?img=11"
  };

  const stats = [
    { label: "Total Orders", count: 12, icon: "📦" },
    { label: "Pending Orders", count: 2, icon: "⏳" },
    { label: "Delivered Orders", count: 9, icon: "✅" },
    { label: "Cancelled Orders", count: 1, icon: "❌" },
  ];

  const recentOrders = [
    { id: "#SH12345", date: "May 12, 2024", items: 3, total: "$219.97", status: "Delivered", statusColor: "bg-green-100 text-green-700" },
    { id: "#SH12344", date: "May 08, 2024", items: 2, total: "$89.98", status: "Processing", statusColor: "bg-orange-100 text-orange-700" },
    { id: "#SH12343", date: "May 04, 2024", items: 1, total: "$129.99", status: "Cancelled", statusColor: "bg-red-100 text-red-700" },
  ];

  const menuItems = [
    { name: "Dashboard", icon: "📊" },
    { name: "My Orders", icon: "📋" },
    { name: "Wishlist", icon: "♥️" },
    { name: "Addresses", icon: "📍" },
    { name: "Payment Methods", icon: "💳" },
    { name: "Account Details", icon: "👤" },
    { name: "Notifications", icon: "🔔" },
    { name: "Returns & Refunds", icon: "↩️" },
    { name: "Settings", icon: "⚙️" },
    { name: "Log Out", icon: "🚪" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans pb-20">
      
      {/* --- BREADCRUMB --- */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-black">Home</Link> <span className="mx-1">/</span> 
        <span className="text-black font-medium">My Account</span>
      </div>

      {/* --- PAGE HEADER --- */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="text-3xl font-bold text-[#111827]">My Account</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your profile, orders and account settings</p>
      </div>

      {/* --- MAIN DASHBOARD LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* --- LEFT SIDEBAR --- */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
            <div className="flex flex-col py-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors w-full text-left border-l-4 ${
                    activeTab === item.name
                      ? "bg-[#FFF5F0] text-black border-[#E48B64]"
                      : "text-gray-600 border-transparent hover:bg-gray-50 hover:text-black"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN (MAIN CONTENT) --- */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* TOP ROW: Profile Info & Order Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Profile Card */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Profile Information</h3>
              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                  <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1 text-sm">
                  <p className="font-medium text-gray-900">Full Name</p>
                  <p className="text-gray-600">{user.name}</p>
                  <p className="font-medium text-gray-900 mt-2">Email Address</p>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
              <button className="bg-black text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-gray-800 transition">
                Edit Profile
              </button>
            </div>

            {/* Order Summary Card */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Order Summary</h3>
                <Link href="/account/orders" className="text-xs text-gray-500 hover:text-black underline">View all orders</Link>
              </div>
              <div className="space-y-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-[12px]">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{stat.icon}</span>
                      <span className="text-sm text-gray-600">{stat.label}</span>
                    </div>
                    <span className="font-bold text-sm">{stat.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: Recent Orders & Account Settings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Recent Orders */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Recent Orders</h3>
                <Link href="/account/orders" className="text-xs text-gray-500 hover:text-black underline">View all orders</Link>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-[12px] flex items-center justify-center text-xl">📦</div>
                      <div>
                        <p className="text-sm font-semibold">{order.id}</p>
                        <p className="text-xs text-gray-500">{order.date} • {order.items} items</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${order.statusColor}`}>
                        {order.status}
                      </span>
                      <p className="text-sm font-semibold mt-1">{order.total}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Account Settings</h3>
              <div className="space-y-3">
                {[
                  { label: "Personal Information", desc: "Update your name, email and phone number" },
                  { label: "Password", desc: "Change your account password" },
                  { label: "Manage Addresses", desc: "Add or edit your shipping addresses" },
                  { label: "Payment Methods", desc: "Manage your saved payment methods" },
                  { label: "Notification Preferences", desc: "Choose how you want to be notified" },
                ].map((setting, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0 cursor-pointer group">
                    <div>
                      <p className="text-sm font-medium group-hover:text-black transition">{setting.label}</p>
                      <p className="text-xs text-gray-500">{setting.desc}</p>
                    </div>
                    <span className="text-gray-400 group-hover:text-black transition">›</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* --- EXCLUSIVE OFFER BANNER --- */}
          <div className="bg-[#FFF5F0] rounded-[20px] p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm mt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl">🎁</div>
              <div>
                <h3 className="font-bold text-lg text-[#111827]">Exclusive Offers Just for You!</h3>
                <p className="text-sm text-gray-600">Be the first to know about new arrivals, special deals and exclusive discounts.</p>
              </div>
            </div>
            <button className="bg-black text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition whitespace-nowrap">
              Manage Preferences
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}