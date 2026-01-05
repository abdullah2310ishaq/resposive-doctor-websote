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
        className="absolute md:absolute inset-0 md:left-0 md:top-0 md:right-auto md:bottom-0 w-full md:w-[38%] h-full md:h-full overflow-hidden md:flex-shrink-0 bg-black"
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
        className="absolute md:absolute inset-0 md:left-[38%] md:right-0 md:top-0 md:bottom-0 w-full md:w-[62%] h-full md:min-h-full md:bg-black flex flex-col justify-start relative overflow-y-auto overflow-x-hidden px-0 py-0 font-sans z-10"
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
              font-size: clamp(1rem, 1.2vw, 1.0625rem);
            }
            .text-item-1 { padding-left: 9vw; padding-right: 7.5vw; }
            .text-item-6 { padding-left: 13.3vw; padding-right: 0; }
            .text-item-7 { padding-left: 10vw; padding-right: 7.5vw; }
          }
          @media (max-width: 767px) {
            .text-item-1 { padding-left: 1.25rem; padding-right: 1.25rem; }
            .text-item-6 { padding-left: 1.25rem; padding-right: 1.25rem; }
            .text-item-7 { padding-left: 1.25rem; padding-right: 1.25rem; }
          }
        `}</style>

        <div className="flex flex-col overflow-x-hidden relative z-10 ml-0 sm:ml-0 md:ml-0">
          <div className="flex flex-col w-full md:max-w-full">
            {/* Paragraphs with Stagger Animation and Custom Alignment */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col pt-24"
            >
              {[
                { text: 'Today you step in a new panorama', gap: 'mb-3 sm:mb-2', padding: 'px-0', align: 'text-center', cssClass: '' },
                { text: 'A Fearless exploration of a fresh set of skills remained from venerable tradition of our early ancestors', gap: 'mb-14 sm:mb-16 md:mb-20', padding: '', align: 'text-left', cssClass: 'text-item-1' },
                { text: 'A discovery of a superior non-pharmacological modern treatment', gap: 'mb-3 sm:mb-2', padding: 'px-0', align: 'text-center', cssClass: '' },
                { text: 'Effective, minimal side effects, and salutary to everyone', gap: 'mb-20 sm:mb-20 md:mb-24', padding: 'px-0', align: 'text-center', cssClass: '' },
                { text: 'A sustainable tool for life', gap: 'mb-20 sm:mb-20 md:mb-24', padding: 'px-0', align: 'text-center', cssClass: '' },
                { text: 'Acute crises through loss, grief, and trauma', gap: 'mb-3 sm:mb-4', padding: 'px-0', align: 'text-center', cssClass: '' },
                { text: 'Chronic conditions like depression, pain, fatigue, eating abnormalities', gap: 'mb-3 sm:mb-4', padding: '', align: 'text-left', cssClass: 'text-item-6' },
                { text: 'Anxiety, post traumatic stress disorder (PTSD), cognitive impairments, and autism spectrum', gap: 'mb-0', padding: '', align: 'text-left', cssClass: 'text-item-7' }
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
                  className={`font-sans font-light text-white leading-[1.6] sm:leading-[1.5] md:leading-[1.25] whitespace-normal md:whitespace-nowrap ${item.gap} ${item.padding} ${item.align} ${item.cssClass} responsive-text`}
                  style={{ 
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)'
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
