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
      </div>
      
      <Navbar />
      
      {/* Main Content - Left-aligned */}
      <div className="absolute inset-0 z-10 flex items-center pt-24">
        <div className="max-w-4xl px-8 text-center">
          {/* Main Heading - Bebas Neue font */}
          <motion.h1 
            className="text-4xl font-bold text-white uppercase mb-4"
            style={{ fontFamily: 'var(--font-bebas-neue)' }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            EXPLORE ART THERAPY
          </motion.h1>
          
          {/* Green Underline */}
          <motion.div 
            className="w-24 h-1 bg-green-400 mb-6 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          
          {/* Descriptive Text - Poppins font */}
          <motion.div 
            className="space-y-4 text-white text-base leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-poppins)' }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p>
              Today, We Welcome You To Step Into A New Panorama, And Fearlessly Explore A Venerable Tradition With A Fresh Set Of Skills Salutary To Everyone.
            </p>
            <p>
              For Millennia, Our Earliest Ancestors Have Intuitively Applied The Therapeutic Power Of Arts For Self-Expression And Healing.
            </p>
            <p>
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
