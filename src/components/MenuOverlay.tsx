'use client';

import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import backMana from '../assets/back_mana.jpg';
import { useMenuOverlay } from './MenuOverlayContext';

const menuItems = [
  'Welcome',
  'Explore',
  'Choices',
  'Philosophy',
  'Offerings',
  'Contact',
];

export default function MenuOverlay() {
  const router = useRouter();
  const { isOpen, closeMenu } = useMenuOverlay();

  const handleMenuItemClick = (item: string) => {
    if (item === 'Welcome') {
      router.push('/welcome');
    } else if (item === 'Explore') {
      router.push('/explore');
    } else if (item === 'Choices') {
      router.push('/choices-intro');
    } else if (item === 'Philosophy') {
      router.push('/philosophy');
    } else if (item === 'Offerings') {
      router.push('/offerings');
    } else if (item === 'Contact') {
      router.push('/contact');
    }
    closeMenu();
  };

  if (!isOpen) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 1600,
        width: '100vw',
        height: '100vh',
        fontFamily: 'Calibri, "Segoe UI", Arial, sans-serif',
        display: 'flex',
        backgroundImage: `url(${backMana.src || backMana})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxSizing: 'border-box',
        overflowY: { xs: 'auto', md: 'hidden' },
        margin: 0,
        padding: 0,
      }}
      onClick={closeMenu}
    >
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="h-full w-[22%] min-w-[200px] max-w-[280px] bg-[#0f0f0f] border-r border-[#2a2a2a] flex flex-col py-10 px-6 md:px-8"
        onClick={(event) => event.stopPropagation()}
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            onClick={() => handleMenuItemClick(item)}
            className="flex items-center justify-between cursor-pointer py-5 group"
            whileHover={{ x: 5 }}
          >
            <span
              className="text-white text-base md:text-lg font-normal capitalize tracking-normal text-left"
              style={{ fontFamily: 'Calibri, "Segoe UI", Arial, sans-serif' }}
            >
              {item}
            </span>
            <span className="text-white text-lg md:text-xl ml-2">{'>'}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom center close control (9 dots + label) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: '0.75rem', sm: '1rem', md: '1.5rem' },
          gap: { xs: '0.25rem', sm: '0.5rem', md: '0.75rem' },
        }}
      >
        <Box
          component={motion.div}
          onClick={closeMenu}
          sx={{
            cursor: 'pointer',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: { xs: '1px', sm: '2px', md: '3px' },
            width: { xs: '20px', sm: '24px', md: '28px' },
            height: { xs: '20px', sm: '24px', md: '28px' },
          }}
          whileHover={{
            scale: 1.2,
            rotate: -90,
            transition: { duration: 0.3, ease: 'easeInOut' },
          }}
          whileTap={{ scale: 0.95 }}
        >
          {[...Array(9)].map((_, index) => (
            <Box
              key={index}
              component={motion.div}
              sx={{
                backgroundColor: 'white',
                borderRadius: '50%',
                width: '100%',
                height: '100%',
                minWidth: { xs: '5px', sm: '6px', md: '7px' },
                minHeight: { xs: '5px', sm: '6px', md: '7px' },
              }}
              whileHover={{
                scale: 1.3,
                opacity: 0.8,
                transition: {
                  delay: index * 0.02,
                  duration: 0.2,
                },
              }}
            />
          ))}
        </Box>

        <Box
          component="span"
          sx={{
            color: 'white',
            fontFamily: 'Calibri, "Segoe UI", Arial, sans-serif',
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: {
              xs: 'clamp(0.875rem, 3vw, 1rem)',
              sm: 'clamp(0.95rem, 3.3vw, 1.2rem)',
              md: 'clamp(1.05rem, 3.6vw, 1.4rem)',
            },
            lineHeight: 1.3,
            letterSpacing: 0,
            textTransform: 'capitalize',
          }}
        >
          Mind Spa
        </Box>
      </Box>
    </Box>
  );
}


