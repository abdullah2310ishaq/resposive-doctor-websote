import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { getCloudinaryImage } from '../utils/cloudinary';

export default function PhilosophyPage({ asSection = false }) {
  const router = useRouter();
  // Get optimized image from Cloudinary
  const philosophyImage = getCloudinaryImage('philosphy.png', {
    width: 1920,
    quality: 'auto',
    format: 'auto'
  })
  
  const containerClass = asSection
    ? "w-full min-h-screen flex flex-col md:flex-row bg-black m-0 p-0 box-border"
    : "w-screen h-screen fixed top-0 left-0 flex flex-col md:flex-row bg-black overflow-y-auto md:overflow-y-auto m-0 p-0 box-border [&::-webkit-scrollbar]:hidden";

  const containerStyle = asSection
    ? {}
    : {
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      };

  return (
    <motion.div 
      className={containerClass}
      style={containerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background Image - Full screen on mobile, side section on desktop with black padding */}
      <motion.div 
        className={
          asSection
            ? "relative md:absolute inset-0 md:left-0 md:top-0 md:right-auto md:bottom-0 w-full md:w-[42%] h-[60vh] md:h-full overflow-hidden bg-black"
            : "fixed md:absolute inset-0 md:left-0 md:top-0 md:right-auto md:bottom-0 w-full md:w-[42%] h-full md:h-full overflow-hidden bg-black"
        }
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.img
          src={philosophyImage}
          alt="Philosophy"
          loading="lazy"
          className="w-full h-full md:w-[90%] md:h-full object-cover object-center"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ 
            scale: 1,
            opacity: 1
          }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 }
          }}
        />
        {/* Dim Overlay - Very subtle */}
        <motion.div 
          className="absolute inset-0 bg-black/30 md:bg-black/40 z-0"
        />
        {/* Floating Glow Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full blur-sm"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Text Content - Overlay on mobile, side section on desktop */}
      <motion.div 
        className="absolute md:absolute inset-0 md:left-[42%] md:right-0 md:top-0 md:bottom-0 w-full md:w-[58%] min-h-full md:min-h-full md:bg-black flex flex-col justify-between px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-14 font-[Calibri] z-10"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        {/* Scrollable text area */}
        <div 
          className="flex-1 flex flex-col gap-8 md:gap-10 overflow-y-auto md:overflow-x-hidden [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, x: 20, filter: 'blur(10px)', y: -20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: 0,
              filter: 'blur(0px)'
            }}
            transition={{ 
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="font-normal text-white text-xl sm:text-2xl md:text-4xl leading-tight mb-6"
            style={{ 
              opacity: 0.9,
              textShadow: '0 2px 15px rgba(0, 0, 0, 0.6)',
              animation: 'glow 3s ease-in-out infinite'
            }}
          >
            Philosophy
          </motion.h1>

          {/* I AM ART Section */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            animate={{ 
              opacity: 1, 
              y: 0,
              filter: 'blur(0px)'
            }}
            transition={{ 
              duration: 0.7,
              delay: 0.5,
              ease: 'easeOut'
            }}
            className="flex flex-col gap-3"
          >
            <motion.h2 
              className="text-white font-normal text-base sm:text-lg md:text-xl mb-2 underline underline-offset-8 decoration-white" 
              style={{ opacity: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.9, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I AM ART
            </motion.h2>
            <div className="flex flex-col gap-1.5">
              {[
                "I Am Art — an Echo Of The Universe Within Me, Paradoxical And Inimitable.",
                "A Unique Celebration Of Life, Changing, Adopting, Being And Becoming; Yet Remaining Me I Am Art —",
                "A Masterpiece, A Drama. The Polish, The Paint, The Façade. The Pain, The Trauma, The Depth.",
                "A Bold Statement Of Freedom — Dare To Live, To Fight, To Love And To Expand Horizons.",
                "The Curiosity To Fully Explore My Femininity, My Muscularity, And All The Shades In Between.",
                "The History Behind — A Memory, And A Far Beautiful Vision For Tomorrow Beyond.",
                "At This Momentum Which I Pause Wholly To Sketch My Timeless Legend."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-white font-normal text-[12px] sm:text-[12.5px] md:text-[14px] leading-relaxed"
                  style={{ opacity: 0.9 }}
                  initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
                  animate={{ 
                    opacity: 0.9, 
                    y: 0,
                    filter: 'blur(0px)'
                  }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.7 + index * 0.1,
                    ease: 'easeOut'
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* I AM NATURE Section */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            animate={{ 
              opacity: 1, 
              y: 0,
              filter: 'blur(0px)'
            }}
            transition={{ 
              duration: 0.7,
              delay: 0.7,
              ease: 'easeOut'
            }}
            className="flex flex-col gap-3"
          >
            <motion.h2 
              className="text-white font-normal text-base sm:text-lg md:text-xl mb-2 underline underline-offset-8 decoration-white" 
              style={{ opacity: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.9, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              I AM NATURE
            </motion.h2>
            <div className="flex flex-col gap-1.5">
              {[
                "I Am Nature — a beat of life in balance with infinite lives around me.",
                "The sequences of expansion, pause; contraction, and pause.",
                "A seed of dream striving to fully germinate.",
                "I accept, I honor and celebrate the hardship to be.",
                "A short life, yet an everlasting mark."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-white font-normal text-[12px] sm:text-[12.5px] md:text-[14px] leading-relaxed"
                  style={{ opacity: 0.9 }}
                  initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
                  animate={{ 
                    opacity: 0.9, 
                    y: 0,
                    filter: 'blur(0px)'
                  }}
                  transition={{ 
                    duration: 0.6,
                    delay: 1.5 + index * 0.1,
                    ease: 'easeOut'
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Go to Offerings Button (non-scroll area) */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.9, ease: 'easeOut' }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 6px 25px rgba(20, 241, 149, 0.5)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/offerings')}
          className="self-start mt-6 text-black text-xs sm:text-sm font-semibold relative overflow-hidden group inline-flex items-center justify-center"
          style={{
            background: 'linear-gradient(90deg, #14F195, #63DB70)',
            boxShadow: '0 4px 15px rgba(20, 241, 149, 0.3)',
            width: 150,
            height: 42,
            border: 'none',
            borderRadius: 4,
            padding: '10px 22px',
            cursor: 'pointer',
          }}
        >
          <span className="relative z-10">
            Go to Offerings
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
