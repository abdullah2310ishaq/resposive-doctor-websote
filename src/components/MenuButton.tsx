'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import roundIcon from '../assets/round.png';

export default function MenuButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Hide on landing page
  if (pathname === '/') {
    return null;
  }

  const handleClick = () => {
    router.push('/');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: '1rem', md: '1.25rem' },
        right: { xs: '1rem', md: '1.25rem' },
        zIndex: 1400,
        pointerEvents: 'none',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        style={{ pointerEvents: 'auto' }}
      >
        <Box
          onClick={handleClick}
          sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Box
            component="img"
            src={
              typeof roundIcon === 'string'
                ? roundIcon
                : typeof roundIcon === 'object' && 'src' in roundIcon
                ? (roundIcon as { src: string }).src
                : (roundIcon as string)
            }
            alt="Go to Landing"
            loading="lazy"
            sx={{
              width: { xs: '42px', sm: '48px' },
              height: 'auto',
              objectFit: 'contain',
              cursor: 'pointer',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.45))',
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
}

