"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function HomeSection() {
  const [showMenu, setShowMenu] = useState(false);

  const handleDotsClick = () => {
    setShowMenu(true);
  };

  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Same background as landing */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/landing.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </motion.div>
      
      {/* Main Content - am.png (logo + written part) - NO EXTRA STYLING */}
      <motion.div 
        className="absolute inset-0 z-10 flex items-center justify-center"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <Image
            src="/am.png"
            alt="MANA OF ARTA"
            width={400}
            height={200}
            className="mx-auto"
          />
        </motion.div>
      </motion.div>
      
      {/* Bottom anchor (shared position for both states) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        {/* Dots state */}
        <AnimatePresence>
          {!showMenu && (
            <motion.button 
              key="dots"
              onClick={handleDotsClick}
              className="cursor-pointer"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="flex items-center gap-4">
                <motion.div layoutId="menuBar" className="rounded-2xl px-2 py-2 border border-white/20 bg-white/10">
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <motion.div 
                        key={i} 
                        className="w-2 h-2 bg-white rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.25, delay: 0.2 + (i * 0.05) }}
                      />
                    ))}
                  </div>
                </motion.div>
                <motion.span 
                  className="text-white/90 select-none"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.3 }}
                >
                  Mind Spa
                </motion.span>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Overlay Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="absolute inset-0 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60" onClick={() => setShowMenu(false)} />

            {/* Anchored container matches dots position exactly */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center">
              {/* Menu Bar morphs from dots capsule */}
              <motion.div
                layoutId="menuBar"
                className="mb-3 flex items-center gap-4 rounded-2xl px-4 py-3 border border-white/20 bg-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
                initial={{ opacity: 0.9 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 140, damping: 16 }}
              >
              {[
                { href: "/welcome", label: "Welcome" },
                { href: "/explore", label: "Explore" },
                { href: "/choices", label: "Choices" },
                { href: "/philosophy", label: "Our philosophy" },
                { href: "/offerings", label: "Our offerings" },
                { href: "/contact", label: "Contact us" },
              ].map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setShowMenu(false)}>
                  <span className="inline-block rounded-xl px-4 py-2 text-sm text-white/90 hover:text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
              </motion.div>
              {/* Close row with label (Mind Spa) */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 6, opacity: 0 }}
                transition={{ type: "spring", stiffness: 140, damping: 16 }}
              >
                <button
                  aria-label="Close menu"
                  onClick={() => setShowMenu(false)}
                  className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/20 text-white hover:bg-white/20"
                >
                  ×
                </button>
                <span className="text-white/90 select-none">Mind Spa</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
