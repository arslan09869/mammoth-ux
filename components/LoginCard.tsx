"use client";

import { EyeOff } from "lucide-react";

export default function LoginCard() {
  return (
    <div className="relative flex items-center justify-center min-h-screen  text-white px-4">
      
      {/* Dark Gradient Background */}
      <div className="absolute inset-0  opacity-60 pointer-events-none"></div>

      {/* Card */}
      <div className="relative w-full max-w-md p-10 space-y-8">
        
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-8 h-8 rounded-full opacity-80"></div>
        </div>

        <h2 className="text-3xl sm:text-4xl text-center leading-snug text-purple-100">
          We help you build
          <br />
          better products
        </h2>

        {/* Form */}
        <form className="space-y-6">
          <div className="space-y-1">
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-gray-200 placeholder-gray-500 border border-gray-700 focus:border-purple-400 focus:outline-none"
            />
          </div>

          <div className="space-y-1 relative">
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-gray-200 placeholder-gray-500 border border-gray-700 focus:border-purple-400 focus:outline-none pr-10"
            />
            <EyeOff className="absolute bottom-3 right-3 h-5 w-5 text-gray-500" />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-400 to-purple-700 text-white font-medium hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm cursor-pointer hover:text-gray-300 transition">
          Forgot password?
        </p>
      </div>
    </div>
  );
}
