'use client';

import { getCloudinaryImage } from '../utils/cloudinary';
import roundIcon from '../assets/round.png';
import titleImage from '../assets/title.png';
import { motion as Motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMenuOverlay } from '../components/MenuOverlayContext';

function LandingPage({ asSection = false }) {
  const { openMenu } = useMenuOverlay();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [imagesLoaded, setImagesLoaded] = useState({
    background: false,
    roundIcon: false,
    title: false,
  });

  // Get optimized image from Cloudinary
  const backMana = getCloudinaryImage('first.jpg', {
    width: 1920,
    quality: 'auto',
    format: 'auto'
  });

  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

  const handleMenuClick = () => {
    openMenu();
  };

  // Preload all images for better performance
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = [
        // Background image (highest priority)
        new Promise((resolve) => {
          const img = new Image();
          img.src = backMana;
          img.loading = 'eager';
          img.fetchPriority = 'high';
          img.decoding = 'async';
          img.onload = () => {
            setImagesLoaded(prev => ({ ...prev, background: true }));
            resolve();
          };
          img.onerror = resolve;
        }),
        // Round icon
        new Promise((resolve) => {
          const img = new Image();
          img.src = roundIcon?.src || roundIcon;
          img.loading = 'eager';
          img.fetchPriority = 'high';
          img.decoding = 'async';
          img.onload = () => {
            setImagesLoaded(prev => ({ ...prev, roundIcon: true }));
            resolve();
          };
          img.onerror = resolve;
        }),
        // Title image
        new Promise((resolve) => {
          const img = new Image();
          img.src = titleImage?.src || titleImage;
          img.loading = 'eager';
          img.fetchPriority = 'high';
          img.decoding = 'async';
          img.onload = () => {
            setImagesLoaded(prev => ({ ...prev, title: true }));
            resolve();
          };
          img.onerror = resolve;
        }),
      ];
      await Promise.all(imagePromises);
    };
    preloadImages();
  }, [backMana]);

  // Handle mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isMobile) {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  // Background now static (no parallax)

  const containerClass = asSection
    ? "w-full h-screen relative flex flex-col items-center bg-cover bg-center bg-no-repeat m-0 p-0 box-border"
    : "w-screen h-screen fixed inset-0 flex flex-col items-center bg-cover bg-center bg-no-repeat overflow-y-auto md:overflow-y-hidden m-0 p-0 box-border";

  const containerStyle = asSection
    ? {
        backgroundImage: imagesLoaded.background ? `url(${backMana})` : 'none',
        backgroundColor: imagesLoaded.background ? 'transparent' : '#000',
      }
    : {
        backgroundImage: imagesLoaded.background ? `url(${backMana})` : 'none',
        backgroundColor: imagesLoaded.background ? 'transparent' : '#000',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      };

  return (
    <Motion.div
      className={containerClass}
      style={containerStyle}
      role="main"
      aria-label="Landing Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: imagesLoaded.background ? 1 : 0.8 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Static Background Layer (no light overlay) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: imagesLoaded.background ? `url(${backMana})` : 'none',
          backgroundColor: imagesLoaded.background ? 'transparent' : '#000',
        }}
      />

      {/* Main Content - Centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-12 md:py-16 lg:py-20 pb-12 sm:pb-12 md:pb-16 lg:pb-20">
        {/* Round Icon with Floating and Glow Animation */}
        <Motion.div className="relative flex justify-center items-center w-full">
          {/* Glow Effect */}
          <Motion.div
            className="absolute blur-xl bg-white/20 rounded-full pointer-events-none"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              width: '120%',
              height: '120%',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <Motion.img
            src={roundIcon?.src || roundIcon}
            alt="Round Icon"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="relative w-[28vw] sm:w-[22vw] md:w-[15vw] lg:w-[12vw] max-w-[160px] sm:max-w-[140px] md:max-w-[150px] lg:max-w-[180px] h-auto mb-2 sm:mb-2 md:mb-4 lg:mb-6 object-contain drop-shadow-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.5, y: -30, rotate: -180 }}
            animate={{ 
              opacity: imagesLoaded.roundIcon ? 1 : 0, 
              scale: 1, 
              y: [0, -8, 0],
              rotate: 0,
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
              rotate: { duration: 1, delay: 0.2, ease: 'easeOut' },
              y: {
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 1,
              },
            }}
            whileHover={{
              scale: 1.15,
              rotate: [0, 5, -5, 0],
              transition: { 
                duration: 0.5,
                rotate: { duration: 0.6 }
              },
            }}
          />
        </Motion.div>

        {/* Title Image with Enhanced Slide Up and Parallax */}
        <Motion.div className="relative flex justify-center items-center w-full">
          <Motion.img
            src={titleImage?.src || titleImage}
            alt="MANA OF ARTA Title"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-[42vw] sm:w-[45vw] md:w-[40vw] lg:w-[35vw] max-w-[170px] sm:max-w-[220px] md:max-w-[300px] lg:max-w-[360px] h-auto object-contain drop-shadow-2xl block mx-auto"
            initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ 
              opacity: imagesLoaded.title ? 1 : 0, 
              y: 0, 
              scale: 1,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              scale: 1.08,
              filter: 'brightness(1.1)',
              transition: { duration: 0.3 },
            }}
          />
        </Motion.div>
      </div>

      {/* Bottom Section - 9 Dots and Mind Spa */}
      <Motion.div
        className="relative z-10 w-full flex flex-col sm:flex-row justify-center items-center px-4 sm:px-6 md:px-8 pb-6 sm:pb-6 md:pb-8 gap-2 sm:gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        {/* 9 Dots Grid with Enhanced Stagger Animation */}
        <Motion.div
          onClick={handleMenuClick}
          role="button"
          aria-label="Open Menu"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleMenuClick();
            }
          }}
          className="cursor-pointer grid grid-cols-3 grid-rows-3 gap-[2px] sm:gap-[3px] w-[26px] sm:w-[28px] md:w-[30px] lg:w-[32px] h-[26px] sm:h-[28px] md:h-[30px] lg:h-[32px] mb-2 sm:mb-0 relative group"
          initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: 0,
          }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Static 9 dots grid (no hover animation) */}
          {[...Array(9)].map((_, index) => (
            <Motion.div
              key={index}
              className="bg-white rounded-full w-full h-full aspect-square relative z-10 shadow-lg"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.9 + index * 0.05,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            />
          ))}
        </Motion.div>

        {/* Mind Spa Text with Enhanced Fade In and Glow */}
        <Motion.span
          className="text-white font-medium capitalize text-[13px] sm:text-base md:text-xl lg:text-2xl leading-[16px] sm:leading-5 md:leading-6 lg:leading-7 mt-2 sm:mt-0 relative"
          style={{
            fontFamily:
              'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
          }}
          initial={{ opacity: 0, x: -10, filter: 'blur(5px)' }}
          animate={{ 
            opacity: 1, 
            x: 0,
            filter: 'blur(0px)',
            textShadow: [
              '0 0 10px rgba(255, 255, 255, 0.3)',
              '0 0 20px rgba(255, 255, 255, 0.5)',
              '0 0 10px rgba(255, 255, 255, 0.3)',
            ],
          }}
          transition={{ 
            opacity: { duration: 0.6, delay: 1.2 },
            x: { duration: 0.6, delay: 1.2 },
            filter: { duration: 0.6, delay: 1.2 },
            textShadow: {
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 1.5,
            },
          }}
        >
          Mind Spa
        </Motion.span>
      </Motion.div>
    </Motion.div>
  );
}

export default LandingPage;