"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function ChoicesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(1);
  };

  const prevSlide = () => {
    setCurrentSlide(0);
  };

  const slides = [
    {
      title: "MIND DETOX, MENTAL BOOST",
      content: "Routine preservation of mental fitness is strongly connected to psychological power and health. Mental fitness is a dynamic process of neutralizing endless external forces — social, financial, cultural, and political — while staying tuned with internal biological waves."
    },
    {
      title: "FATIGUE / PAIN / BURNOUT",
      content: "Burnout is characterized by emotional exhaustion, depersonalization, and a decline in personal accomplishment. Symptoms may include fatigue, pain, lack of drive, dysregulated sleep, helplessness, hopelessness, isolation, procrastination, and poor coping strategies like overeating, substance use, or shopping to escape frustration."
    },
    {
      title: "MOOD AND ANXIETY",
      content: "Art therapy surpasses the limitations of verbal expression. It engages the soul, body, and mind to address emotional, spiritual, social, and clinical well-being. Through creativity, individuals gain insight into emotions behind dysregulation, depression, anxiety, and anger. It enhances motivation, reduces stress, strengthens interpersonal bonds, and nurtures fulfillment."
    }
  ];

  const slides2 = [
    {
      title: "TRAUMA",
      content: "Art therapy provides a safe environment to process trauma through nonverbal, symbolic expression. It helps revisit experiences and visually represent trauma, gradually filling memory gaps and reducing emotional suffering."
    },
    {
      title: "IMBALANCED EATING / WEIGHT GAIN / WEIGHT LOSS",
      content: "Art therapy bypasses cultural and language barriers, uncovering root causes of eating disorders. Art offers safe self-expression and helps individuals understand relationships and internal conflicts, such as the desire for safety through food versus control."
    },
    {
      title: "AUTISM SPECTRUM",
      content: "Creative arts interventions for children with Autism Spectrum Disorder (Level 1) improve process and social interaction skills. Art therapy promotes self-expression and structured freedom, reducing anxiety and stress."
    }
  ];

  const currentSlides = currentSlide === 0 ? slides : slides2;

  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image - fourth.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fourth.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Dark overlay for text readability - removed blur */}
      <div className="absolute inset-0 bg-black/25 z-5"></div>
      {/* Focused left gradient panel behind text area */}
      <div className="absolute inset-y-0 left-0 z-5 w-[85vw] sm:w-[520px] md:w-[640px] lg:w-[700px] xl:w-[760px] bg-gradient-to-r from-black/75 via-black/40 to-transparent pointer-events-none"></div>
      
      <Navbar />
      
      {/* Main Content - Left aligned like reference */}
      <div className="absolute inset-0 z-10 flex items-start justify-start pt-24 pb-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: currentSlide === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: currentSlide === 0 ? 100 : -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-6"
            >
              {currentSlides.map((slide, index) => (
                <motion.div
                  key={index}
                  className="max-w-3xl mb-10"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <div className="inline-block">
                    <h2 
                      className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase mb-2"
                      style={{ fontFamily: 'var(--font-bebas-neue)' }}
                    >
                      {slide.title}
                    </h2>
                    <div className="h-1 bg-green-400 mb-4"></div>
                  </div>
                  <p 
                    className="text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {slide.content}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Arrow Button - vertically centered in both states; left on second slide */}
      <div className={`absolute z-20 transform ${currentSlide === 1 ? 'left-8 top-1/2 -translate-y-1/2' : 'right-8 top-1/2 -translate-y-1/2'}`}>
        <motion.button 
          onClick={currentSlide === 0 ? nextSlide : prevSlide}
          className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src="/side.png"
            alt="Navigation Arrow"
            width={48}
            height={48}
            className="object-contain"
            style={{ 
              transform: currentSlide === 1 ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          />
        </motion.button>
      </div>
    </motion.div>
  );
}
