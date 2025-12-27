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
        className="absolute md:absolute inset-0 md:left-[38%] md:right-0 md:top-0 md:bottom-0 w-full md:w-[62%] h-full md:min-h-full md:bg-black flex flex-col justify-start relative overflow-hidden px-0 sm:px-6 md:px-0 py-8 sm:py-10 md:pt-8 font-sans z-10"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >

        <div className="flex flex-col overflow-x-hidden relative z-10 ml-0 sm:ml-0 md:ml-0">
          <div className="flex flex-col w-full md:max-w-full">
            {/* Paragraphs with Stagger Animation and Custom Alignment */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col pt-16 sm:pt-24 md:pt-48"
            >
              {[
                { text: 'Today you step in a new panorama', align: 'center', gap: 'mb-3 sm:mb-2', padding: 'pl-5 pr-5 sm:px-5 md:px-0' },
                { text: 'A Fearless exploration of a fresh set of skills remained from venerable tradition of our early ancestors', align: 'left', gap: 'mb-6 sm:mb-8 md:mb-12', padding: 'pl-5 pr-5 sm:pl-5 sm:pr-5 md:pl-48 md:pr-36' },
                { text: 'A discovery of a superior non-pharmacological modern treatment', align: 'center', gap: 'mb-3 sm:mb-2', padding: 'pl-5 pr-5 sm:px-5 md:px-0' },
                { text: 'Effective, minimal side effects, and salutary to everyone', align: 'center', gap: 'mb-6 sm:mb-8 md:mb-12', padding: 'pl-5 pr-5 sm:px-5 md:px-0' },
                { text: 'A sustainable tool for life', align: 'center', gap: 'mb-6 sm:mb-8 md:mb-12', padding: 'pl-5 pr-5 sm:px-5 md:px-0' },
                { text: 'Acute crises through loss, grief, and trauma', align: 'center', gap: 'mb-3 sm:mb-4', padding: 'pl-5 pr-5 sm:px-5 md:px-0' },
                { text: 'Chronic conditions like depression, pain, fatigue, eating abnormalities', align: 'left', gap: 'mb-3 sm:mb-4', padding: 'pl-5 pr-5 sm:pl-5 sm:pr-5 md:pl-80 md:pr-36' },
                { text: 'Anxiety, post traumatic stress disorder (PTSD), cognitive impairments, and autism spectrum', align: 'left', gap: 'mb-0', padding: 'pl-5 pr-5 sm:pl-5 sm:pr-5 md:pl-64 md:pr-36' }
              ].map((item, index) => (
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
                  className={`font-sans font-normal text-white text-sm sm:text-[14px] md:text-[15px] leading-[1.6] sm:leading-[1.5] md:leading-[1.25] whitespace-normal md:whitespace-nowrap ${item.gap} ${item.padding} text-left ${item.align === 'center' ? 'md:text-center' : ''}`}
                  style={{ 
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
                  }}
                >
                  {item.text}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
