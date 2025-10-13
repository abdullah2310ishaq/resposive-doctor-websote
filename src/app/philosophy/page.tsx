
"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function PhilosophyPage() {
  const [activeTab, setActiveTab] = useState("art");

  const artContent = [
    "I Am Art – an echo of the universe within me, paradoxical and inimitable.",
    "I Am Art – a unique celebration of life, changing, adapting, being and becoming; yet remaining me.",
    "I Am Art – a masterpiece, a drama. The polish, the paint, the façade. The pain, the trauma, the depth.",
    "I Am Art – a bold statement of freedom – dare to live, to fight, to love and to expand horizons.",
    "I Am Art – the curiosity to fully explore my femininity, my muscularity, and all the shades in between.",
    "I Am Art – the history behind – a memory, and a far beautiful vision for tomorrow.",
    "Beyond, I Am Art at this momentum which I pause wholly to sketch my timeless legend."
  ];

  const natureContent = [
    "I Am Nature – a beat of life in balance with infinite lives around me.",
    "I Am Nature – the sequences of expansion, pause; contraction, and pause.",
    "I Am Nature – a seed of dream striving to fully germinate.",
    "I Am Nature – I accept, I honor and celebrate the hardship to be.",
    "I Am Nature – a short life, yet an everlasting mark."
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background - Stable Layout (No Animation) */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full z-0">
          <Image
            src="/philosophy_bg.jpg"
            alt="Background"
            fill
            className="object-cover brightness-100"
            priority
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
           
          />
        </div>
        {/* Fallback background behind the image */}
        <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        {/* Lighter overlay to improve contrast above the image */}
        <div className="absolute inset-0 z-10 bg-black/10" />
      </div>

      <Navbar />

      {/* Main Content Container - Animated */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-white text-5xl font-bold text-center mb-6"
          style={{ fontFamily: "var(--font-bebas-neue)" }}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Philosophy
        </motion.h1>

        {/* Tabs */}
        <motion.div
          className="flex space-x-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {[
            { id: "art", label: "I AM ART" },
            { id: "nature", label: "I AM NATURE" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-2xl font-bold uppercase tracking-wider transition-all border-b-2 pb-1 ${
                activeTab === tab.id
                  ? "text-green-400 border-green-400"
                  : "text-white/90 border-transparent hover:text-green-300 hover:border-green-300"
              }`}
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content Box */}
        <motion.div
          className="w-full max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div
            className="rounded-[24px] border border-green-400/50 backdrop-blur-2xl shadow-2xl p-6 md:p-8"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(165,239,255,0.45), rgba(70,144,212,0.25))",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2
                  className="text-green-400 text-2xl font-bold mb-4 text-center"
                  style={{ fontFamily: "var(--font-bebas-neue)" }}
                >
                  {activeTab === "art" ? "I AM ART" : "I AM NATURE"}
                </h2>

                <div className="space-y-3 text-white/95 text-base leading-relaxed">
                  {(activeTab === "art" ? artContent : natureContent).map(
                    (line, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        style={{ fontFamily: "var(--font-poppins)" }}
                        className="text-center"
                      >
                        {line}
                      </motion.p>
                    )
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
