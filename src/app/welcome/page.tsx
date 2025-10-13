"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function WelcomePage() {
  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image - second_bg.jpg - FULL SCREEN COVER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/second_bg.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        {/* Full dark overlay */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        {/* Focused gradient exactly where the text sits */}
        <div className="absolute inset-y-0 left-0 w-[85vw] sm:w-[520px] md:w-[640px] lg:w-[700px] xl:w-[760px] bg-gradient-to-r from-black/75 via-black/40 to-transparent pointer-events-none" />
      </div>
      
      <Navbar />
      
      {/* Main Content - Left aligned like reference */}
      <div className="absolute inset-0 z-10 flex items-center justify-start pt-24 pb-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-3xl w-full text-left">
          {/* Main Heading - Bebas Neue font, exact size from reference */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-bebas-neue)' }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            WELCOME TO MIND SPA
          </motion.h1>
          
          {/* Green Underline */}
          <motion.div 
            className="w-24 h-1 bg-green-400 mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          
          {/* Descriptive Text - Poppins font, line-height adjusted for alignment */}
          <motion.div 
            className="space-y-4 text-white text-sm sm:text-base leading-6 sm:leading-7 max-w-2xl"
            style={{ fontFamily: 'var(--font-poppins)' }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="text-left">
              Mana Of Arta Is A Sanctuary Space We Sculpt For Your Mind, Body And Spirit To Retune And Revive To Reveal Your True Power — Art And Nature
            </p>
            <p className="text-left">
              We Are An Eco-Friendly, And Tech-Integrated Solution For Complex Psychological Needs Of Today&#39;s Global Citizens.
            </p>
            <p className="text-left">
              Let&#39;s Get On A Routine For Psyche Detox And Personal Hygiene For Mind.
            </p>
          </motion.div>
          
          {/* Learn More Button */}
          <motion.button 
            className="mt-8 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black px-8 py-3 rounded-lg transition-all duration-300 shadow-lg font-medium text-base"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}