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
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        {/* Gradient to black on the left side */}
        <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-black/70 via-black/20 to-transparent pointer-events-none" />
      </div>
      
      <Navbar />
      
      {/* Main Content - Centered */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pt-20 px-4">
        <div className="max-w-4xl w-full text-center">
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
            className="w-24 h-1 bg-green-400 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          
          {/* Descriptive Text - Poppins font, line-height adjusted for alignment */}
          <motion.div 
            className="space-y-4 text-white text-sm sm:text-base leading-6 sm:leading-7 max-w-3xl mx-auto px-4"
            style={{ fontFamily: 'var(--font-poppins)' }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="text-left sm:text-center">
              Mana Of Arta Is A Sanctuary Space We Sculpt For Your Mind, Body And Spirit To Retune And Revive To Reveal Your True Power — Art And Nature
            </p>
            <p className="text-left sm:text-center">
              We Are An Eco-Friendly, And Tech-Integrated Solution For Complex Psychological Needs Of Today Global Citizens.
            </p>
            <p className="text-left sm:text-center">
              Let us Get On A Routine For Psyche Detox And Personal Hygiene For Mind.
            </p>
          </motion.div>
          
          {/* Learn More Button */}
          <motion.button 
            className="mt-8 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-8 py-3 rounded-lg transition-all duration-300 shadow-lg font-medium text-base"
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