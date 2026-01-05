import { getCloudinaryImage } from '../utils/cloudinary'
import { motion } from 'framer-motion'

export default function ExplorePage({ asSection = false }) {

  const exploreImage = getCloudinaryImage('explore.png', {
    width: 1920,
    quality: 'auto',
    format: 'auto'
  })
  
  const containerClass = asSection
    ? "w-full h-screen flex flex-col md:flex-row m-0 p-0 box-border relative"
    : "w-full h-screen absolute top-0 left-0 right-0 bottom-0 flex flex-col md:flex-row overflow-y-auto m-0 p-0 box-border";

  return (
    <motion.div 
      className={containerClass}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background Image - Full screen on mobile, side section on desktop with black padding */}
      <motion.div 
        className="absolute md:absolute inset-0 md:left-0 md:top-0 md:right-auto md:bottom-0 w-full md:w-[35%] h-full md:h-full overflow-hidden md:flex-shrink-0 bg-black"
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
        className="absolute md:absolute inset-0 md:left-[35%] md:right-0 md:top-0 md:bottom-0 w-full md:w-[65%] h-full md:min-h-full md:bg-black flex flex-col justify-center items-start md:items-center relative overflow-y-auto overflow-x-hidden px-0 py-0 font-sans z-10"
        style={{ maxWidth: '100%' }}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <style>{`
          .responsive-text {
            font-size: clamp(0.875rem, 2.5vw, 1.0625rem);
          }
          @media (min-width: 640px) {
            .responsive-text {
              font-size: clamp(1rem, 1.8vw, 1.0625rem);
            }
          }
          @media (min-width: 768px) {
            .responsive-text {
              font-size: clamp(0.95rem, 1.1vw, 1.125rem);
            }
            .pyramid-indent-1 { margin-left: 1%; }
            .pyramid-indent-2 { margin-left: 3%; }
            .pyramid-indent-3 { margin-left: 5%; }
          }
          @media (max-width: 767px) {
            .pyramid-indent-1, .pyramid-indent-2, .pyramid-indent-3 { margin-left: 0 !important; }
          }
        `}</style>

        <div className="flex flex-col overflow-x-hidden relative z-10 w-full max-w-4xl px-4 sm:px-6 md:px-8">
          {/* Paragraphs with Stagger Animation - All Centered */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col pt-24 md:pt-0"
          >
            {[
              { text: 'Today you step in a new panorama', gap: 'mb-3 sm:mb-2', indent: '' },
              { text: 'A Fearless exploration of a fresh set of skills remained from venerable tradition of our early ancestors', gap: 'mb-14 sm:mb-16 md:mb-20', indent: 'pyramid-indent-1' },
              { text: 'A discovery of a superior non-pharmacological modern treatment', gap: 'mb-3 sm:mb-2', indent: '' },
              { text: 'Effective, minimal side effects, and salutary to everyone', gap: 'mb-20 sm:mb-20 md:mb-24', indent: '' },
              { text: 'A sustainable tool for life', gap: 'mb-20 sm:mb-20 md:mb-24', indent: '' },
              { text: 'Acute crises through loss, grief, and trauma', gap: 'mb-3 sm:mb-4', indent: '' },
              { text: 'Chronic conditions like depression, pain, fatigue, eating abnormalities', gap: 'mb-3 sm:mb-4', indent: 'pyramid-indent-2' },
              { text: 'Anxiety, post traumatic stress disorder (PTSD), cognitive impairments, and autism spectrum', gap: 'mb-0', indent: 'pyramid-indent-3' }
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
                className={`font-sans font-light text-white leading-[1.6] sm:leading-[1.5] md:leading-[1.4] whitespace-normal text-left md:text-center ${item.gap} ${item.indent} responsive-text`}
                style={{ 
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)'
                }}
              >
                {item.text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
