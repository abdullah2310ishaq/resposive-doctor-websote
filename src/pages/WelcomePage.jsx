import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getCloudinaryImage } from '../utils/cloudinary'
import { motion as Motion } from 'framer-motion'

function WelcomePage({ asSection = false }) {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  // Get optimized image from Cloudinary
  const welcomeBg = getCloudinaryImage('welcome.png', {
    width: 1920,
    quality: 'auto',
    format: 'auto'
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    // Debounce resize for better performance
    let timeoutId
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkMobile, 150)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  // Preload background image with better optimization
  useEffect(() => {
    const img = new Image()
    img.src = welcomeBg
    img.loading = 'eager'
    img.fetchPriority = 'high'
    img.decoding = 'async'
    img.onload = () => {
      setImageLoaded(true)
    }
    img.onerror = () => {
      setImageLoaded(true) // Still show content even if image fails
    }
    // Cleanup
    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [welcomeBg])
  const containerClass = asSection
    ? "relative w-full min-h-screen flex flex-col items-center justify-between bg-cover bg-center bg-no-repeat"
    : "relative w-screen h-screen fixed inset-0 flex flex-col items-center justify-between overflow-y-auto bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed [&::-webkit-scrollbar]:hidden";

  const containerStyle = {
    backgroundImage: imageLoaded ? `url(${welcomeBg})` : 'none',
    backgroundColor: imageLoaded ? 'transparent' : '#000',
    ...(asSection
      ? {}
      : {
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }),
  };

  return (
    <Motion.div
      className={containerClass}
      style={containerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: imageLoaded ? 1 : 0.8 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      
      {/* Animated Background Overlay */}
      <Motion.div 
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: [0.5, 0.6, 0.5] }}
        transition={{ 
          duration: 4, 
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />

      {/* Subtle full-page dim gradient (no side bias) */}
      <Motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/50"
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Floating Particles Effect */}
      {[...Array(5)].map((_, i) => (
        <Motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${20 + i * 20}%`,
            top: `${15 + (i % 3) * 35}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 4 + i * 0.6,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      <div
        className="relative z-10 flex flex-col items-center justify-between w-full max-w-[1000px] min-h-full px-6 sm:px-8 md:px-8 lg:px-24 pt-[55%] sm:pt-[36%] md:pt-[5%] pb-12 md:pb-12 pl-6 sm:pl-16 md:pl-48 lg:pl-64 pr-6 sm:pr-10 md:pr-16 lg:pr-24"
        style={{
          paddingTop: isMobile ? '35%' : undefined,
          transform: isMobile ? 'translateY(-35px)' : 'none',
        }}
      >
        <div className="w-full text-left">
          <Motion.h1
            initial={{ opacity: 0, y: -30, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{
              fontFamily: 'Calibri, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(1.9rem, 6vw, 2.75rem)',
              lineHeight: 1.15,
              letterSpacing: '0%',
              color: 'white',
              margin: 0,
              marginBottom: 'clamp(2rem, 5vw, 3rem)',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
            }}
            whileHover={{
              scale: 1.02,
              textShadow: '0 0 30px rgba(255, 255, 255, 0.4)',
              transition: { duration: 0.3 }
            }}
          >
            Welcome To Mind Spa
          </Motion.h1>

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col gap-5 mb-11"
          >
            {[
              'Mana Of Arta Is A Sanctuary Space We Sculpt For Your Mind, Body And Spirit To Retune And Revive',
              'To Reveal Your True Power — Art And Nature',
              'We Are An Eco-Friendly, And Tech-Integrated Solution For Complex Psychological Needs Of Today\'s Global Citizens.'
            ].map((text, index) => (
              <Motion.p
                key={index}
                initial={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  filter: 'blur(0px)'
                }}
                transition={{ 
                  duration: 0.7,
                  delay: 0.5 + index * 0.15,
                  ease: 'easeOut'
                }}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.3 }
                }}
                className="text-white text-sm sm:text-[0.95rem] leading-relaxed capitalize whitespace-normal md:whitespace-nowrap"
                style={{ 
                  fontFamily: 'Calibri, sans-serif',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                }}
              >
                {text}
              </Motion.p>
            ))}
          </Motion.div>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <Motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            animate={{ 
              opacity: 1, 
              y: 0,
              filter: 'blur(0px)'
            }}
            transition={{ 
              duration: 0.7, 
              delay: 0.9,
              ease: 'easeOut'
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="text-white text-xs sm:text-sm leading-relaxed capitalize whitespace-normal md:whitespace-nowrap text-center md:text-left"
            style={{
              fontFamily: 'Calibri, sans-serif',
              margin: '0',
              marginRight: isMobile ? 0 : '10rem',
              marginBottom: isMobile ? '1.25rem' : 'clamp(1.75rem, 4vw, 2.75rem)',
              textShadow: '0 2px 15px rgba(255, 255, 255, 0.2)',
            }}
          >
            A Routine For Psyche Detox & Self Hygiene For Mind
          </Motion.p>

          <Motion.button
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1
            }}
            transition={{ 
              duration: 0.8, 
              delay: 1.1,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            whileHover={{ 
              scale: 1.08,
              boxShadow: '0 6px 25px rgba(20, 241, 149, 0.5)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/explore')}
            className="text-black text-sm font-bold relative overflow-hidden group inline-flex items-center justify-center"
            style={{
              background: 'linear-gradient(90deg, #14F195, #63DB70)',
              boxShadow: '0 4px 15px rgba(20, 241, 149, 0.3)',
              width: 140,
              height: 42,
              border: 'none',
              borderRadius: 3,
              padding: '15px 27px',
              cursor: 'pointer',
              fontFamily: 'Calibri, sans-serif',
              margin: '0',
              marginRight: isMobile ? 0 : '10rem',
              marginTop: isMobile ? '0.25rem' : 0,
            }}
          >
            {/* Glow effect */}
            <Motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-200%', '200%'],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
              }}
            />
            <Motion.span 
              className="relative z-10" 
              whileHover={{ scale: 1.05 }}
              style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)' }}
            >
              Learn More
            </Motion.span>
            {/* Pulsing glow on hover */}
            <Motion.div
              className="absolute inset-0 rounded-sm bg-white/20 opacity-0 group-hover:opacity-100 blur-md"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
          </Motion.button>
        </div>
      </div>
    </Motion.div>
  )
}

export default WelcomePage