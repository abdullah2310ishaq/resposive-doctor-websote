"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function OfferingsPage() {
  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image - offering.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/offering.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-5"></div>
      
      <Navbar />
      
      {/* Main Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center min-h-screen py-8">
        {/* Page Title */}
        <motion.h1 
          className="text-4xl font-bold text-white text-center mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Our Offerings
        </motion.h1>
        
        {/* Descriptive Subtitle */}
        <motion.p 
          className="text-white/90 text-sm text-center max-w-3xl mb-12 px-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          You are a striking blend of art and nature, walking a unique experience in life we strive to meet your needs, expectations, budget and time if the standard offerings is not suitable,
        </motion.p>
        
        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 max-w-5xl w-full px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          
          {/* Left Card: Individual Packages */}
          <motion.div 
            className="rounded-2xl p-[1px] bg-[linear-gradient(180deg,rgba(96,165,250,0.35),rgba(96,165,250,0.05))] shadow-2xl max-w-[560px] w-full mx-auto"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-gray-700 p-4 sm:p-6">
              <div className="flex items-center mb-6">
                <span className="mr-3 text-blue-400 text-xl">○</span>
                <h2 className="text-xl font-bold text-white">Individual Packages (Virtual)</h2>
              </div>
              
              <div className="space-y-3">
                {/* Single Sessions */}
                <div className="border border-gray-700 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold text-white">Single Sessions</h3>
                    <div className="text-xl font-bold text-white">$130</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-white/90 text-xs">
                      <span className="mr-2 text-blue-400/70">○</span>
                      45 min
                    </div>
                    <div className="flex items-center text-white/90 text-xs">
                      <span className="mr-2 text-blue-400/70">○</span>
                      Free 15 min intro session
                    </div>
                  </div>
                </div>
                
                {/* Bundle 1 */}
                <div className="border border-gray-700 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold text-white">Bundle 1</h3>
                    <div className="text-xl font-bold text-white">$1000</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-white/90 text-xs">
                      <span className="mr-2 text-blue-400/70">○</span>
                      Once a week, 8 weeks (45 min a session)
                    </div>
                    <div className="flex items-center text-white/90 text-xs">
                      <span className="mr-2 text-blue-400/70">○</span>
                      Free introduction (15 min each)
                    </div>
                  </div>
                </div>
                
                {/* Bundle 2 */}
                <div className="border border-gray-700 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold text-white">Bundle 2</h3>
                    <div className="text-xl font-bold text-white">$2000</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-white/90 text-xs">
                      <span className="mr-2 text-blue-400/70">○</span>
                      Twice a week, 8 weeks (45 min a session)
                    </div>
                    <div className="flex items-center text-white/90 text-xs">
                      <span className="mr-2 text-blue-400/70">○</span>
                      Free introduction (15 min each)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Card: Joint Sessions */}
          <motion.div 
            className="rounded-2xl p-[1px] bg-[linear-gradient(180deg,rgba(20,184,166,0.35),rgba(20,184,166,0.05))] shadow-2xl max-w-[560px] w-full mx-auto"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-gray-700 p-4 sm:p-6">
              <div className="flex items-center mb-6">
                <span className="mr-3 text-teal-400 text-xl">○</span>
                <h2 className="text-xl font-bold text-white">Joint Sessions (Virtual)</h2>
              </div>
              
              <div className="space-y-3">
                {/* Single Sessions */}
                <div className="border border-gray-700 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold text-white">Single Sessions</h3>
                    <div className="text-xl font-bold text-white">$200</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-white/90 text-xs">
                      <span className="mr-2 text-teal-400/70">○</span>
                      60 min
                    </div>
                    <div className="flex items-center text-white/90 text-xs">
                      <span className="mr-2 text-teal-400/70">○</span>
                      Free introduction session (15 min)
                    </div>
                  </div>
                </div>
                
                {/* Bundle 1 */}
                <div className="border border-gray-700 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold text-white">Bundle 1</h3>
                    <div className="text-xl font-bold text-white">$1000</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-white/90 text-xs">
                      <span className="mr-2 text-teal-400/70">○</span>
                      5 sessions (60 min a session)
                    </div>
                    <div className="flex items-center text-white/90 text-xs">
                      <span className="mr-2 text-teal-400/70">○</span>
                      Free introduction (15 min each)
                    </div>
                  </div>
                </div>
                
                {/* Bundle 2 */}
                <div className="border border-gray-700 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold text-white">Bundle 2</h3>
                    <div className="text-xl font-bold text-white">$1,500</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-white/90 text-xs">
                      <span className="mr-2 text-teal-400/70">○</span>
                      10 sessions (60 min a session)
                    </div>
                    <div className="flex items-center text-white/90 text-xs">
                      <span className="mr-2 text-teal-400/70">○</span>
                      Free introduction (15 min each)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}