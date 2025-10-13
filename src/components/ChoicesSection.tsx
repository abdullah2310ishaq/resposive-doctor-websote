"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChoicesSection() {
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image - fourth.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fourth.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>
      
      {/* Main Content - 3 Text Blocks */}
      <div className="absolute inset-0 z-10 flex items-center pt-20">
        <div className="max-w-4xl px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: currentSlide === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: currentSlide === 0 ? 100 : -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-12"
            >
              {currentSlides.map((slide, index) => (
                <motion.div
                  key={index}
                  className="max-w-2xl"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-white uppercase mb-4">
                    {slide.title}
                  </h2>
                  <div className="w-32 h-1 bg-green-400 mb-4"></div>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {slide.content}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Side Arrow Buttons */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
        <button 
          onClick={nextSlide}
          className="w-16 h-16 bg-black/50 border-2 border-green-400 rounded-lg flex items-center justify-center hover:bg-green-400/20 transition-all duration-300"
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>

      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20">
        <button 
          onClick={prevSlide}
          className="w-16 h-16 bg-black/50 border-2 border-green-400 rounded-full flex items-center justify-center hover:bg-green-400/20 transition-all duration-300"
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
}