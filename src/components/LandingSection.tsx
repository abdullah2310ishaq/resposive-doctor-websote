"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("home");
    if (nextSection) {
      // Sexy smooth scroll with custom easing
      nextSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image - landing.png */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image
          src="/landing.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      {/* SCROLL text with animated down arrow - positioned in the light beam */}
      <motion.button 
        onClick={scrollToNext}
        className="absolute bottom-10 sm:bottom-16 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer group"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to next section"
      >
        <motion.div 
          className="text-white text-2xl sm:text-3xl font-bold uppercase tracking-widest mb-4 sm:mb-6"
          animate={{ 
            opacity: [1, 0.8, 1],
            textShadow: [
              "0 0 20px rgba(255, 255, 255, 0.8)",
              "0 0 30px rgba(255, 255, 255, 1)",
              "0 0 20px rgba(255, 255, 255, 0.8)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SCROLL
        </motion.div>
        <motion.div 
          className="text-white text-4xl sm:text-5xl"
          animate={{ 
            y: [0, 8, 0],
            opacity: [1, 0.7, 1]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          whileHover={{
            scale: 1.3,
            y: -5,
            transition: { duration: 0.3 }
          }}
        >
          ↓
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
