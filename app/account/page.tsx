"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SkeletonBox } from "@/components/Skeleton";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showEditForm, setShowEditForm] = useState(false);
  const [toast, setToast] = useState<string | null>(null); // ✅ Toast state

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ✅ Auto-hide toast after 3 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // User Info
  const [userInfo, setUserInfo] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("btm_user_profile");
      return saved ? JSON.parse(saved) : {
        name: "John Doe",
        email: "john.doe@mail.com",
        phone: "(123) 456-7890",
        image: "",
        address: "",
        city: "",
        country: "Nigeria"
      };
    }
    return {
      name: "John Doe",
      email: "john.doe@mail.com",
      phone: "(123) 456-7890",
      image: "",
      address: "",
      city: "",
      country: "Nigeria"
    };
  });

  // Payment Methods
  const [cards, setCards] = useState([
    { id: 1, brand: "Visa", last4: "4242", expiry: "12/26" },
    { id: 2, brand: "Mastercard", last4: "8888", expiry: "09/25" },
  ]);

  // Notifications
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    newsletter: true,
    productAlerts: true,
  });

  // Save user info
  useEffect(() => {
    if (isMounted && typeof window !== "undefined") {
      localStorage.setItem("btm_user_profile", JSON.stringify(userInfo));
    }
  }, [userInfo, isMounted]);

  // Save active tab
  useEffect(() => {
    if (isMounted && typeof window !== "undefined") {
      localStorage.setItem("btm_active_tab", activeTab);
    }
  }, [activeTab, isMounted]);

  if (!isMounted) {
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <SkeletonBox className="h-10 w-1/4 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <SkeletonBox className="h-96 w-full" />
          </div>
          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkeletonBox className="h-64 w-full" />
              <SkeletonBox className="h-64 w-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkeletonBox className="h-64 w-full" />
              <SkeletonBox className="h-64 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

  // Mock data
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

  const allOrders = [
    ...recentOrders,
    { id: "#SH12342", date: "Apr 28, 2024", items: 4, total: "$349.99", status: "Delivered", statusColor: "bg-green-100 text-green-700" },
    { id: "#SH12341", date: "Apr 20, 2024", items: 1, total: "$59.99", status: "Delivered", statusColor: "bg-green-100 text-green-700" },
    { id: "#SH12340", date: "Apr 15, 2024", items: 2, total: "$110.00", status: "Cancelled", statusColor: "bg-red-100 text-red-700" },
  ];

  const menuItems = [
    { name: "Dashboard", icon: "📊", action: "Dashboard" },
    { name: "My Orders", icon: "📋", action: "Orders" },
    { name: "Wishlist", icon: "♥️", action: "Wishlist", link: "/wishlist" },
    { name: "Addresses", icon: "📍", action: "Addresses" },
    { name: "Payment Methods", icon: "💳", action: "Payments" },
    { name: "Account Details", icon: "👤", action: "Details" },
    { name: "Notifications", icon: "🔔", action: "Notifications" },
    { name: "Returns & Refunds", icon: "↩️", action: "Returns", link: "/track-order" },
    { name: "Settings", icon: "⚙️", action: "Settings" },
    { name: "Log Out", icon: "🚪", action: "Logout" },
  ];

  const handleTabClick = (action: string, link?: string) => {
    if (link) {
      window.location.href = link;
      return;
    }
    if (action === "Logout") {
      localStorage.removeItem("btm_login_email");
      localStorage.removeItem("btm_remember_me");
      localStorage.removeItem("btm_user_profile");
      setToast("👋 You have been logged out!");
      setTimeout(() => { window.location.href = "/login"; }, 1000);
      return;
    }
    setActiveTab(action);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        setUserInfo({...userInfo, image: uploadEvent.target?.result as string});
        setToast("📸 Photo updated successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("btm_user_profile", JSON.stringify(userInfo));
    setToast("✅ Profile updated successfully!");
    setShowEditForm(false);
  };

  const handleAddCard = () => {
    const newCard = {
      id: cards.length + 1,
      brand: "Visa",
      last4: Math.floor(1000 + Math.random() * 9000).toString(),
      expiry: "12/28"
    };
    setCards([...cards, newCard]);
    setToast("💳 New card added!");
  };

  const handleDeleteCard = (id: number) => {
    setCards(cards.filter((c) => c.id !== id));
    setToast("🗑️ Card removed.");
  };

  const handleToggleNotification = (key: string) => {
    setNotifications({...notifications, [key]: !notifications[key as keyof typeof notifications]});
    setToast("🔔 Notification preferences updated!");
  };

  // =================== SUB-COMPONENTS ===================

  const DashboardTab = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-[20px] p-6 shadow-sm">
          <h3 className="font-bold text-lg mb-4">Profile Information</h3>
          <div className="flex items-center gap-6 mb-6">
            <div className="relative w-24 h-24 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
              {userInfo.image ? (
                <img src={userInfo.image} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-4xl text-gray-400">👤</span>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <p className="font-medium text-gray-900">Full Name</p>
              <p className="text-gray-600">{userInfo.name}</p>
              <p className="font-medium text-gray-900 mt-2">Email</p>
              <p className="text-gray-600">{userInfo.email}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShowEditForm(!showEditForm)} className="bg-black text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-gray-800 transition">
              {showEditForm ? "Close" : "Edit Profile"}
            </button>
            <label className="cursor-pointer bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-200 transition">
              📷 Change Photo
              <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
            </label>
          </div>
          {showEditForm && (
            <form onSubmit={handleSaveProfile} className="mt-4 p-4 bg-gray-50 rounded-[12px] space-y-3">
              <input type="text" value={userInfo.name} onChange={(e) => setUserInfo({...userInfo, name: e.target.value})} className="w-full border border-gray-200 rounded-[8px] px-3 py-2 text-sm outline-none focus:border-black" placeholder="Full Name" />
              <input type="email" value={userInfo.email} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} className="w-full border border-gray-200 rounded-[8px] px-3 py-2 text-sm outline-none focus:border-black" placeholder="Email" />
              <input type="text" value={userInfo.phone} onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})} className="w-full border border-gray-200 rounded-[8px] px-3 py-2 text-sm outline-none focus:border-black" placeholder="Phone" />
              <button type="submit" className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">Save Changes</button>
            </form>
          )}
        </div>

        <div className="bg-white rounded-[20px] p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Order Summary</h3>
            <button onClick={() => setActiveTab("Orders")} className="text-xs text-gray-500 hover:text-black underline">View all orders</button>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-[20px] p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Recent Orders</h3>
            <button onClick={() => setActiveTab("Orders")} className="text-xs text-gray-500 hover:text-black underline">View all orders</button>
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
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${order.statusColor}`}>{order.status}</span>
                  <p className="text-sm font-semibold mt-1">{order.total}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[20px] p-6 shadow-sm">
          <h3 className="font-bold text-lg mb-4">Quick Settings</h3>
          <div className="space-y-3">
            {[
              { label: "Personal Information", action: "Details" },
              { label: "Manage Addresses", action: "Addresses" },
              { label: "Payment Methods", action: "Payments" },
              { label: "Notification Preferences", action: "Notifications" },
            ].map((setting, idx) => (
              <button key={idx} onClick={() => setActiveTab(setting.action)} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 w-full text-left group">
                <p className="text-sm font-medium group-hover:text-black transition">{setting.label}</p>
                <span className="text-gray-400 group-hover:text-black transition">›</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const OrdersTab = () => (
    <div className="bg-white rounded-[20px] p-6 shadow-sm">
      <h3 className="font-bold text-lg mb-6">All Orders ({allOrders.length})</h3>
      <div className="space-y-4">
        {allOrders.map((order) => (
          <div key={order.id} className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-4 gap-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-[12px] flex items-center justify-center text-xl">📦</div>
              <div>
                <p className="text-sm font-semibold">{order.id}</p>
                <p className="text-xs text-gray-500">{order.date} • {order.items} items</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${order.statusColor}`}>{order.status}</span>
              <p className="text-sm font-semibold">{order.total}</p>
              <button className="text-xs text-gray-500 hover:text-black underline">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AddressesTab = () => (
    <div className="bg-white rounded-[20px] p-6 shadow-sm">
      <h3 className="font-bold text-lg mb-4">Shipping Addresses</h3>
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-[16px] p-4 flex justify-between items-center">
          <div>
            <p className="font-medium text-sm">{userInfo.name}</p>
            <p className="text-xs text-gray-500">{userInfo.address || "123 Main Street"}</p>
            <p className="text-xs text-gray-500">{userInfo.city || "Lagos"}, {userInfo.country}</p>
            <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">Default</span>
          </div>
          <button className="text-xs text-blue-600 hover:underline">Edit</button>
        </div>
      </div>
      <button onClick={() => setToast("📍 Address feature coming soon!")} className="mt-4 border border-dashed border-gray-300 text-gray-600 py-3 rounded-[16px] w-full hover:border-black hover:text-black transition">
        + Add New Address
      </button>
    </div>
  );

  const PaymentsTab = () => (
    <div className="bg-white rounded-[20px] p-6 shadow-sm">
      <h3 className="font-bold text-lg mb-4">Saved Payment Methods</h3>
      <div className="space-y-3">
        {cards.map((card) => (
          <div key={card.id} className="flex justify-between items-center border border-gray-200 rounded-[16px] p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-[8px] flex items-center justify-center text-xs font-bold">💳</div>
              <div>
                <p className="text-sm font-medium">{card.brand} •••• {card.last4}</p>
                <p className="text-xs text-gray-500">Expires {card.expiry}</p>
              </div>
            </div>
            <button onClick={() => handleDeleteCard(card.id)} className="text-xs text-red-500 hover:text-red-700">Remove</button>
          </div>
        ))}
      </div>
      <button onClick={handleAddCard} className="mt-4 border border-dashed border-gray-300 text-gray-600 py-3 rounded-[16px] w-full hover:border-black hover:text-black transition">
        + Add New Card
      </button>
    </div>
  );

  const DetailsTab = () => (
    <div className="bg-white rounded-[20px] p-6 shadow-sm">
      <h3 className="font-bold text-lg mb-4">Account Details</h3>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSaveProfile(e); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" value={userInfo.name} onChange={(e) => setUserInfo({...userInfo, name: e.target.value})} className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value={userInfo.email} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
            <input type="text" value={userInfo.phone} onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})} className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Country</label>
            <input type="text" value={userInfo.country} onChange={(e) => setUserInfo({...userInfo, country: e.target.value})} className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black" />
          </div>
        </div>
        <button type="submit" className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
          Save Details
        </button>
      </form>
    </div>
  );

  const NotificationsTab = () => (
    <div className="bg-white rounded-[20px] p-6 shadow-sm">
      <h3 className="font-bold text-lg mb-4">Notification Preferences</h3>
      <div className="space-y-4">
        {[
          { key: "orderUpdates", label: "Order Updates", desc: "Get notified when your order status changes" },
          { key: "promotions", label: "Promotions & Deals", desc: "Receive exclusive discount offers" },
          { key: "newsletter", label: "Newsletter", desc: "Weekly newsletter with new arrivals" },
          { key: "productAlerts", label: "Product Alerts", desc: "Alerts when items are back in stock" },
        ].map((item) => (
          <div key={item.key} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0">
            <div>
              <p className="text-sm font-medium">{item.label}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
            <button
              onClick={() => handleToggleNotification(item.key)}
              className={`w-12 h-6 rounded-full transition relative ${notifications[item.key as keyof typeof notifications] ? "bg-black" : "bg-gray-300"}`}
            >
              <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all ${notifications[item.key as keyof typeof notifications] ? "left-6" : "left-0.5"}`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const SettingsTab = () => (
    <div className="bg-white rounded-[20px] p-6 shadow-sm">
      <h3 className="font-bold text-lg mb-4">Account Settings</h3>
      <div className="space-y-3">
        {[
          { label: "Language", value: "English (US)" },
          { label: "Currency", value: "USD ($)" },
          { label: "Time Zone", value: "(GMT+1) Lagos" },
        ].map((setting) => (
          <div key={setting.label} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0">
            <p className="text-sm font-medium">{setting.label}</p>
            <p className="text-sm text-gray-500">{setting.value}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "Orders": return <OrdersTab />;
      case "Addresses": return <AddressesTab />;
      case "Payments": return <PaymentsTab />;
      case "Details": return <DetailsTab />;
      case "Notifications": return <NotificationsTab />;
      case "Settings": return <SettingsTab />;
      default: return <DashboardTab />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans pb-20">
      
      {/* ✅ PROFESSIONAL TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed top-6 right-6 z-[9999] bg-black text-white px-6 py-4 rounded-[16px] shadow-2xl flex items-center gap-3 animate-fadeIn">
          <span className="text-sm font-medium">{toast}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-black">Home</Link> <span className="mx-1">/</span> 
        <span className="text-black font-medium">My Account</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="text-3xl font-bold text-[#111827]">My Account</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your profile, orders and account settings</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
            <div className="flex flex-col py-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleTabClick(item.action, item.link)}
                  className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors w-full text-left border-l-4 ${
                    activeTab === item.action
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

        <div className="lg:col-span-3 space-y-6">
          {renderContent()}

          <div className="bg-[#FFF5F0] rounded-[20px] p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
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