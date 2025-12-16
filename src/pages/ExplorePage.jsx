import { getCloudinaryImage } from '../utils/cloudinary'
import { motion } from 'framer-motion'

export default function ExplorePage({ asSection = false }) {
  // Get optimized image from Cloudinary
  const exploreImage = getCloudinaryImage('explore.png', {
    width: 1920,
    quality: 'auto',
    format: 'auto'
  })
  
  const containerClass = asSection
    ? "w-full h-screen flex flex-col md:flex-row m-0 p-0 box-border relative"
    : "w-screen h-screen fixed top-0 left-0 flex flex-col md:flex-row overflow-y-auto m-0 p-0 box-border relative";

  return (
    <motion.div 
      className={containerClass}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background Image - Full screen on mobile, side section on desktop with black padding */}
      <motion.div 
        className={
          asSection
            ? "absolute md:absolute inset-0 md:left-0 md:top-0 md:right-auto md:bottom-0 w-full md:w-[38%] h-full md:h-full overflow-hidden md:flex-shrink-0 bg-black"
            : "fixed md:absolute inset-0 md:left-0 md:top-0 md:right-auto md:bottom-0 w-full md:w-[38%] h-full md:h-full overflow-hidden md:flex-shrink-0 bg-black"
        }
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.img
          src={exploreImage}
          alt="Explore"
          loading="lazy"
          className="w-full h-full md:w-[90%] md:h-full object-cover md:object-cover"
          style={{ objectPosition: 'left' }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        {/* Light Gradient Overlay - Mobile */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 md:bg-black/50 z-0"
          animate={{ opacity: [0.4, 0.5, 0.4] }}
          transition={{ 
            duration: 3, 
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        {/* Animated Green overlay - Desktop only */}
        <motion.div 
          className="hidden md:block absolute inset-0 bg-gradient-to-r from-green-400/10 to-green-400/5 z-1"
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ 
            duration: 2.5, 
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      </motion.div>

      {/* Text Section - Overlay on mobile, side section on desktop */}
      <motion.div 
        className="absolute md:absolute inset-0 md:left-[38%] md:right-0 md:top-0 md:bottom-0 w-full md:w-[62%] h-full md:min-h-full md:bg-black flex flex-col justify-center relative overflow-hidden px-4 sm:px-5 md:px-0 py-6 sm:py-8 md:py-12 font-sans z-10"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >

        <div className="flex flex-col overflow-x-hidden relative z-10">
          <div className="flex flex-col w-full md:max-w-full pr-4 sm:pr-8 md:pr-36 md:pl-1 pl-2 sm:pl-4">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
              animate={{ 
                opacity: 1, 
                x: 0,
                filter: 'blur(0px)'
              }}
              transition={{ 
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="font-sans font-light md:font-semibold text-white text-base sm:text-lg md:text-lg leading-[1.3] md:leading-[1.2] mb-8 sm:mb-10 md:mb-20"
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.6)' }}
            >
              Explore Art Therapy
            </motion.h1>

            {/* Paragraphs with Stagger Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-6 sm:gap-5 md:gap-7"
            >
              {[
                'Today, We Welcome You To Step In A New Panorama, And Fearlessly Explore A Venerable Tradition With A Fresh Set of Skills Salutary To Everyone',
                'For Millennia, Our Earliest Ancestors Have Intuitively Applied The Therapeutic Power Of Arts For Self-expression And Healing',
                'Since Mid-20th Century, The Discipline Of Art Therapy Stood As A Superior Non-pharmacological Modality With Minimal Side Effects',
                'A Sustainable Tool For Life for Acute Crises through Loss, Grief, And Trauma and Chronic Conditions like Depression, Pain, Fatigue, Eating Abnormalities',
                'Anxiety, Post Traumatic Stress Disorder (PTSD), Cognitive Impairments, and Autism Spectrum'
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    filter: 'blur(0px)'
                  }}
                  transition={{ 
                    duration: 0.7,
                    delay: 0.6 + index * 0.1,
                    ease: 'easeOut'
                  }}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="font-sans font-extralight md:font-light text-white text-sm sm:text-[13px] md:text-[13.5px] leading-[1.5] sm:leading-[1.4] md:leading-[1.25] capitalize text-left whitespace-normal md:whitespace-nowrap"
                  style={{ 
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
