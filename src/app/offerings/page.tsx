"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function OfferingsPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>("");
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
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-28 pb-12">
        {/* Page Title */}
        <motion.h1 
          className="text-3xl font-bold text-white text-center mb-4 px-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Our Offerings
        </motion.h1>
        
        {/* Descriptive Subtitle */}
        <motion.p 
          className="text-white/90 text-sm text-center max-w-2xl mb-10 px-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          You are a striking blend of art and nature, walking a unique experience in life we strive to meet your needs, expectations, budget and time if the standard offerings is not suitable,
        </motion.p>
        
        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 w-full max-w-4xl mx-auto px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          
          {/* Left Card: Individual Packages */}
          <motion.div 
            className="relative overflow-hidden rounded-[40px] border-2 border-white/10 shadow-2xl max-w-[520px] w-full mx-auto"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {/* tiled radial gradient overlay (slightly stronger) */}
            <div className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay bg-[radial-gradient(circle,_#A5EFFF,_#6EBFF4_22.4%,_#4690D4_0%)] bg-[length:56px_56px]" />
            {/* subtle vertical accent gradient */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(96,165,250,0.35),rgba(96,165,250,0.05))] opacity-70" />
            <div className="relative rounded-[38px] bg-gray-900/80 backdrop-blur-sm border border-gray-700 p-4 sm:p-6">
              <div className="flex items-center mb-6">
                <Image src="/offerings_svg_3.svg" alt="Section" width={32} height={32} className="mr-3" />
                <h2 className="text-xl font-bold text-white">Individual Packages (Virtual)</h2>
              </div>
              
              <div className="space-y-3">
                {/* Single Sessions */}
                <button
                  type="button"
                  onClick={() => setSelectedPlan("individual-single")}
                  className={`${selectedPlan === "individual-single" ? "border-emerald-400/80 ring-1 ring-emerald-400/40" : "border-gray-700"} border rounded-xl p-4 bg-black/20 text-left w-full transition-colors`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold text-white">Single Sessions</h3>
                    <div className="text-2xl font-bold text-white">$130</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-white/90 text-xs">
                      <Image src="/offerings_svg_1.svg" alt="Time" width={16} height={16} className="mr-2" />
                      45 min
                    </div>
                    <div className="flex items-center text-white/90 text-xs">
                      <Image src="/offerings_svg_2.svg" alt="Intro" width={16} height={16} className="mr-2" />
                      Free 15 min intro session
                    </div>
                  </div>
                </button>
                
                {/* Bundle 1 */}
                <button
                  type="button"
                  onClick={() => setSelectedPlan("individual-b1")}
                  className={`${selectedPlan === "individual-b1" ? "border-emerald-400/80 ring-1 ring-emerald-400/40" : "border-gray-700"} border rounded-xl p-4 bg-black/20 text-left w-full transition-colors`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold text-white">Bundle 1</h3>
                    <div className="text-2xl font-bold text-white">$1000</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-white/90 text-xs">
                      <Image src="/offerings_svg_1.svg" alt="Schedule" width={16} height={16} className="mr-2" />
                      Once a week, 8 weeks (45 min a session)
                    </div>
                    <div className="flex items-center text-white/90 text-xs">
                      <Image src="/offerings_svg_2.svg" alt="Intro" width={16} height={16} className="mr-2" />
                      Free introduction (15 min each)
                    </div>
                  </div>
                </button>
                
                {/* Bundle 2 */}
                <button
                  type="button"
                  onClick={() => setSelectedPlan("individual-b2")}
                  className={`${selectedPlan === "individual-b2" ? "border-emerald-400/80 ring-1 ring-emerald-400/40" : "border-gray-700"} border rounded-xl p-4 bg-black/20 text-left w-full transition-colors`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold text-white">Bundle 2</h3>
                    <div className="text-2xl font-bold text-white">$2000</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-white/90 text-xs">
                      <Image src="/offerings_svg_1.svg" alt="Schedule" width={16} height={16} className="mr-2" />
                      Twice a week, 8 weeks (45 min a session)
                    </div>
                    <div className="flex items-center text-white/90 text-xs">
                      <Image src="/offerings_svg_2.svg" alt="Intro" width={16} height={16} className="mr-2" />
                      Free introduction (15 min each)
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Right Card: Joint Sessions */}
          <motion.div 
            className="relative overflow-hidden rounded-[40px] border-2 border-white/10 shadow-2xl max-w-[520px] w-full mx-auto"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {/* tiled radial gradient overlay (slightly stronger) */}
            <div className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay bg-[radial-gradient(circle,_#A5EFFF,_#6EBFF4_22.4%,_#4690D4_0%)] bg-[length:56px_56px]" />
            {/* subtle vertical accent gradient (teal) */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(20,184,166,0.35),rgba(20,184,166,0.05))] opacity-70" />
            <div className="relative rounded-[38px] bg-gray-900/80 backdrop-blur-sm border border-gray-700 p-4 sm:p-6">
              <div className="flex items-center mb-6">
                <Image src="/offerings_svg_3.svg" alt="Section" width={32} height={32} className="mr-3" />
                <h2 className="text-xl font-bold text-white">Joint Sessions (Virtual)</h2>
              </div>
              
              <div className="space-y-3">
                {/* Single Sessions */}
                <button
                  type="button"
                  onClick={() => setSelectedPlan("joint-single")}
                  className={`${selectedPlan === "joint-single" ? "border-emerald-400/80 ring-1 ring-emerald-400/40" : "border-gray-700"} border rounded-xl p-4 bg-black/20 text-left w-full transition-colors`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold text-white">Single Sessions</h3>
                    <div className="text-2xl font-bold text-white">$200</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-white/90 text-xs">
                      <Image src="/offerings_svg_1.svg" alt="Time" width={16} height={16} className="mr-2" />
                      60 min
                    </div>
                    <div className="flex items-center text-white/90 text-xs">
                      <Image src="/offerings_svg_2.svg" alt="Intro" width={16} height={16} className="mr-2" />
                      Free introduction session (15 min)
                    </div>
                  </div>
                </button>
                
                {/* Bundle 1 */}
                <button
                  type="button"
                  onClick={() => setSelectedPlan("joint-b1")}
                  className={`${selectedPlan === "joint-b1" ? "border-emerald-400/80 ring-1 ring-emerald-400/40" : "border-gray-700"} border rounded-xl p-4 bg-black/20 text-left w-full transition-colors`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold text-white">Bundle 1</h3>
                    <div className="text-2xl font-bold text-white">$1000</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-white/90 text-xs">
                      <Image src="/offerings_svg_1.svg" alt="Sessions" width={16} height={16} className="mr-2" />
                      5 sessions (60 min a session)
                    </div>
                    <div className="flex items-center text-white/90 text-xs">
                      <Image src="/offerings_svg_2.svg" alt="Intro" width={16} height={16} className="mr-2" />
                      Free introduction (15 min each)
                    </div>
                  </div>
                </button>
                
                {/* Bundle 2 */}
                <button
                  type="button"
                  onClick={() => setSelectedPlan("joint-b2")}
                  className={`${selectedPlan === "joint-b2" ? "border-emerald-400/80 ring-1 ring-emerald-400/40" : "border-gray-700"} border rounded-xl p-4 bg-black/20 text-left w-full transition-colors`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold text-white">Bundle 2</h3>
                    <div className="text-2xl font-bold text-white">$1,900</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-white/90 text-xs">
                      <Image src="/offerings_svg_1.svg" alt="Sessions" width={16} height={16} className="mr-2" />
                      10 sessions (60 min a session)
                    </div>
                    <div className="flex items-center text-white/90 text-xs">
                      <Image src="/offerings_svg_2.svg" alt="Intro" width={16} height={16} className="mr-2" />
                      Free introduction (15 min each)
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}