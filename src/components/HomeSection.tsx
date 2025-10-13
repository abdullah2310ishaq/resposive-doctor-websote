"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function HomeSection() {
  const [showMenu, setShowMenu] = useState(false);
  const menuScrollRef = useRef<HTMLDivElement>(null);

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
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30">
        {/* Dots state */}
        <AnimatePresence>
          {!showMenu && (
            <motion.button 
              key="dots"
              onClick={handleDotsClick}
              className="cursor-pointer"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <motion.div 
                  layoutId="menuBar" 
                  className="rounded-2xl px-2 py-2 border border-white/15 backdrop-blur-xl shadow-[0_6px_30px_rgba(0,0,0,0.45)]
                  bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))]
                  relative before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(20,241,149,0.18),transparent_60%)]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <motion.div 
                        key={i} 
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.25, delay: 0.2 + (i * 0.05) }}
                        viewport={{ once: true }}
                      />
                    ))}
                  </div>
                </motion.div>
                <motion.span 
                  className="text-white/90 select-none text-xs sm:text-base"
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
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center w-[92vw] max-w-[1000px]">
              {/* Menu Bar morphs from dots capsule */}
            <motion.div
              layoutId="menuBar"
              className="relative mb-3 flex flex-col sm:flex-row items-stretch sm:items-center sm:flex-nowrap sm:overflow-x-auto gap-2 sm:gap-4 rounded-2xl px-2.5 sm:px-4 py-2.5 sm:py-3 border border-white/15 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.55)]
              bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))]
              before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(20,241,149,0.18),transparent_60%)]"
              ref={menuScrollRef}
              initial={{ opacity: 0.95 }}
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
                  <span className="inline-block whitespace-nowrap rounded-xl px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm text-white/90 hover:text-white border border-white/15 w-full sm:w-auto text-center
                  bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_0_0_1px_rgba(20,241,149,0.45),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all">
                    {item.label}
                  </span>
                </Link>
              ))}
              </motion.div>
              {/* Mobile scroll controls (not needed with vertical stack) */}
              <div className="hidden" />
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
                  className="flex items-center justify-center w-12 h-12 rounded-2xl border border-white/15 text-white 
                  bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] hover:shadow-[0_0_0_1px_rgba(20,241,149,0.45)]"
                >
                  <Image src="/cross.svg" alt="Close" width={20} height={20} />
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
