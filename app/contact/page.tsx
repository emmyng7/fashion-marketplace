"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      
      {/* --- BREADCRUMB --- */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-black">Home</Link> <span className="mx-1">/</span> 
        <Link href="#" className="hover:text-black">Help & Support</Link> <span className="mx-1">/</span> 
        <span className="text-black font-medium">Contact Us</span>
      </div>

      {/* --- MAIN LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* --- LEFT COLUMN: INFO & CONTACT METHODS --- */}
        <div className="space-y-8">
          
          <div>
            <span className="inline-block bg-[#FFF5F0] text-[#111827] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              We're here to help
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight mb-4">
              How can we <br /> help you?
            </h1>
            <p className="text-gray-600 text-base max-w-md">
              Have a question or need assistance? Our support team is ready to help you.
            </p>
          </div>

          <div className="space-y-4">
            {/* Phone Support */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-[16px] shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-[#FFF5F0] rounded-full flex items-center justify-center text-xl text-[#111827]">📞</div>
              <div>
                <p className="font-medium text-gray-900 text-sm">Phone Support</p>
                <p className="text-xs text-gray-500">+1 (123) 456-7890</p>
                <p className="text-[10px] text-gray-400">Mon - Fri, 9AM - 6PM (EST)</p>
              </div>
            </div>

            {/* Email Support */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-[16px] shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-[#FFF5F0] rounded-full flex items-center justify-center text-xl text-[#111827]">✉️</div>
              <div>
                <p className="font-medium text-gray-900 text-sm">Email Support</p>
                <p className="text-xs text-gray-500">support@shopigo.com</p>
                <p className="text-[10px] text-gray-400">We'll respond within 24 hours</p>
              </div>
            </div>

            {/* Live Chat */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-[16px] shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-[#FFF5F0] rounded-full flex items-center justify-center text-xl text-[#111827]">💬</div>
              <div>
                <p className="font-medium text-gray-900 text-sm">Live Chat</p>
                <p className="text-xs text-gray-500">Chat with our support team</p>
                <p className="text-[10px] text-gray-400">Mon - Fri, 9AM - 9PM (EST)</p>
              </div>
            </div>
          </div>

        </div>

        {/* --- RIGHT COLUMN: CONTACT FORM --- */}
        <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm h-fit">
          <h2 className="text-xl font-bold text-[#111827] mb-1">Send us a message</h2>
          <p className="text-sm text-gray-500 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black transition placeholder:text-gray-400" 
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black transition placeholder:text-gray-400" 
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Order Number (Optional)</label>
              <input 
                type="text" 
                placeholder="e.g. #SH123456" 
                className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black transition placeholder:text-gray-400" 
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Subject *</label>
              
              {/* --- FIXED DROPDOWN WITH defaultValue --- */}
              <select 
                defaultValue="" 
                className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black transition bg-white text-gray-700"
              >
                <option value="" disabled>Select a subject</option>
                <option value="order">Order Issue</option>
                <option value="product">Product Question</option>
                <option value="shipping">Shipping Inquiry</option>
                <option value="return">Return & Refund</option>
                <option value="other">Other</option>
              </select>
              {/* ----------------------------------- */}
              
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Message *</label>
              <textarea 
                rows={4} 
                placeholder="How can we help you?" 
                className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-sm outline-none focus:border-black transition placeholder:text-gray-400 resize-none" 
                required
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2"
              >
                ✈️ Send Message
              </button>
              <p className="text-[10px] text-gray-400 flex items-center gap-1">
                🔒 We value your privacy. Your information is safe with us.
              </p>
            </div>
          </form>
        </div>

      </div>

      {/* --- BOTTOM TRUST BANNER --- */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: "🛡️", title: "Secure & Safe", desc: "Your data is 100% secure with us.", color: "bg-green-50" },
            { icon: "📦", title: "Easy Returns", desc: "30-day hassle-free returns.", color: "bg-blue-50" },
            { icon: "🎧", title: "24/7 Support", desc: "We're here to help you anytime.", color: "bg-orange-50" },
            { icon: "🏷️", title: "Best Prices", desc: "We offer the best prices guaranteed.", color: "bg-purple-50" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[20px] shadow-sm flex items-center gap-4 hover:shadow-md transition">
              <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-2xl`}>
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}