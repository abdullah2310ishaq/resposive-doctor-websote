"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function ExplorePage() {
  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image - third.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/third.png"
          alt="Background"
          fill
          className="object-cover"
        />
        {/* Subtle global darkening */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        {/* Left gradient panel behind text */}
        <div className="absolute inset-y-0 left-0 w-[85vw] sm:w-[520px] md:w-[640px] lg:w-[700px] xl:w-[760px] bg-gradient-to-r from-black/75 via-black/40 to-transparent pointer-events-none" />
      </div>
      
      <Navbar />
      
      {/* Main Content - Left-aligned like reference */}
      <div className="absolute inset-0 z-10 flex items-center justify-start pt-24 pb-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-3xl text-left">
          {/* Main Heading - Bebas Neue font */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase mb-3"
            style={{ fontFamily: 'var(--font-bebas-neue)' }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            EXPLORE ART THERAPY
          </motion.h1>
          
          {/* Green Underline spanning heading width */}
          <motion.div 
            className="h-1 bg-green-400 mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ transformOrigin: 'left', width: '100%', maxWidth: '38rem' }}
          />
          
          {/* Descriptive Text - Poppins font */}
          <motion.div 
            className="space-y-4 text-white text-base leading-relaxed max-w-2xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="text-left">
              Today, We Welcome You To Step Into A New Panorama, And Fearlessly Explore A Venerable Tradition With A Fresh Set Of Skills Salutary To Everyone.
            </p>
            <p className="text-left">
              For Millennia, Our Earliest Ancestors Have Intuitively Applied The Therapeutic Power Of Arts For Self-Expression And Healing.
            </p>
            <p className="text-left">
              Since The Mid-20th Century, The Discipline Of Art Therapy Stood As A Superior Non-Pharmacological Modality With Minimal Side Effects – A Sustainable Tool For Life For Acute Crises Through Loss, Grief, And Trauma, And Chronic Conditions Like Depression, Pain, Fatigue, And Eating Abnormalities, Anxiety, PTSD, Cognitive Impairments, And Autism Spectrum.
            </p>
          </motion.div>
          
          {/* Our Offerings Button */}
          <motion.button 
            className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-lg font-medium text-sm uppercase"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            OUR OFFERINGS
          </motion.button>
        </div>
      </div>
      
    </motion.div>
  );
}
