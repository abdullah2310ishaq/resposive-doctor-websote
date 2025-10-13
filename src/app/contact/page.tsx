
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image - contact.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-5"></div>
      
      <Navbar />
      
      {/* Main Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center min-h-screen px-4 py-4">
        {/* Page Title */}
        <motion.h1 
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-6"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Contact Us
        </motion.h1>
        
        {/* Unified Card: Form + Image in one container */}
        <div className="max-w-4xl w-full">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-white/10 p-4 lg:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          
              {/* Left: Contact Form */}
              <motion.div 
                className="space-y-3"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Let&apos;s connect!</h2>
                <p className="text-white/80 text-sm mb-4">Let your thoughts flow, we&apos;re just a message away.</p>
                
                <form className="space-y-3">
                  {/* Full Name */}
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-3 py-2 bg-[#141a21] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                  
                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 bg-[#141a21] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                  
                  {/* Phone */}
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-3 py-2 bg-[#141a21] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                  
                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-400 to-green-600 hover:brightness-110 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    SUBMIT
                  </motion.button>
                </form>
              </motion.div>
          
              {/* Right: Visual Section */}
              <motion.div 
                className="relative"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <div className="relative h-[300px] sm:h-[400px] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/contact.jpg"
                    alt="Contact Visual"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 text-white/95 text-xs sm:text-sm leading-tight">
                    <p>Recharge your thoughts, refresh your soul.</p>
                    <p>This is where calm begins.</p>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-white">Mana Of Arta</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Row above footer: logo left, powered by right */}
      <motion.div 
        className="absolute left-0 right-0 bottom-12 z-20"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/am.png" alt="Mana Of Arta" width={200} height={200} />
            </div>
            <p className="text-white font-semibold text-xs sm:text-sm tracking-wider">POWERED BY MANA OF ARTA</p>
          </div>
        </div>
      </motion.div>

      {/* Footer: copyright left, social right */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 z-20 bg-black/60 backdrop-blur-sm border-t border-gray-700"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <p className="text-white/70 text-[11px]">© 2025 ManaofArta — All rights reserved.</p>
            <div className="flex items-center gap-3">
              <span className="text-white/80 text-xs">Follow Us</span>
              <div className="flex space-x-3">
                <a href="#" className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69.072 4.949.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
                <a href="#" className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
