"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setError("");

    // Save user to Local Storage (This is our "backend")
    localStorage.setItem("btm_login_email", email);
    if (rememberMe) {
      localStorage.setItem("btm_remember_me", "true");
    } else {
      localStorage.removeItem("btm_remember_me");
    }

    // Simulate a short delay for a realistic login feel
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
            <h1 className="text-2xl font-bold text-[#111827]">Welcome Back</h1>
            <p className="text-sm text-gray-500 mt-1">Sign in to your account to continue</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 text-xs font-medium px-4 py-3 rounded-[12px] mb-4">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
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
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-gray-700">Password</label>
                <Link href="#" className="text-xs text-gray-500 hover:text-black">Forgot Password?</Link>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔒</span>
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-200 rounded-[14px] pl-12 pr-4 py-3.5 text-sm outline-none focus:border-black transition placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3.5 h-3.5 accent-black rounded"
                />
                Remember Me
              </label>
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
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full border border-gray-200 rounded-full py-3 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <span className="text-xl">G</span> Sign in with Google
            </button>
            <button className="w-full border border-gray-200 rounded-full py-3 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <span className="text-xl">🍎</span> Sign in with Apple
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-8">
            Don't have an account? <Link href="/register" className="text-black font-semibold hover:underline">Create one</Link>
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