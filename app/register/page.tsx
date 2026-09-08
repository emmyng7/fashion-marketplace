"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    setError("");

    // ✅ Save new user to Local Storage
    const newUser = {
      name: name,
      email: email,
      phone: "",
      image: ""
    };
    localStorage.setItem("btm_user_profile", JSON.stringify(newUser));
    localStorage.setItem("btm_login_email", email);

    // Simulate a short delay for realistic sign up
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/account";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4 py-10">
      
      {/* --- CARD CONTAINER --- */}
      <div className="w-full max-w-md">
        
        {/* Logo */}
        <Link href="/" className="flex justify-center items-center gap-2 mb-8">
          <span className="text-4xl">🛍️</span>
          <span className="text-4xl font-serif font-bold tracking-wider text-[#111827]">BTM</span>
        </Link>

        <div className="bg-white rounded-[30px] p-8 shadow-xl border border-gray-100">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#111827]">Create Account</h1>
            <p className="text-sm text-gray-500 mt-1">Join BTM and start shopping today</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 text-xs font-medium px-4 py-3 rounded-[12px] mb-4">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">👤</span>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-200 rounded-[14px] pl-12 pr-4 py-3.5 text-sm outline-none focus:border-black transition placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">📧</span>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-200 rounded-[14px] pl-12 pr-4 py-3.5 text-sm outline-none focus:border-black transition placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔒</span>
                <input 
                  type="password" 
                  placeholder="Create a password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-200 rounded-[14px] pl-12 pr-4 py-3.5 text-sm outline-none focus:border-black transition placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Confirm Password</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔒</span>
                <input 
                  type="password" 
                  placeholder="Confirm your password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-gray-200 rounded-[14px] pl-12 pr-4 py-3.5 text-sm outline-none focus:border-black transition placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-black text-white py-3.5 rounded-full font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>

          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-8">
            Already have an account? <Link href="/login" className="text-black font-semibold hover:underline">Sign In</Link>
          </p>

        </div>

        {/* Bottom Link */}
        <p className="text-center text-xs text-gray-400 mt-6">
          <Link href="/" className="hover:text-black">← Back to Home</Link>
        </p>
      </div>
    </div>
  );
}