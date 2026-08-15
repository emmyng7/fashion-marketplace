"use client";

import Link from "next/link";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4">
      <div className="bg-white rounded-[30px] p-10 max-w-lg w-full text-center shadow-sm">
        <div className="text-6xl mb-4">💳</div>
        <h1 className="text-2xl font-bold text-[#111827] mb-2">Payment Method</h1>
        <p className="text-gray-500 mb-6">This is a demo store. No real payments are taken.</p>
        <Link href="/">
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
}