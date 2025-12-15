'use client';

import Link from 'next/link';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import roundIcon from '../assets/round.png';

export default function MenuButton() {
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
        <Link
          href="/menu"
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Box
            component="img"
            src={typeof roundIcon === 'string' ? roundIcon : (roundIcon as any)?.src || roundIcon}
            alt="Menu"
            loading="lazy"
            sx={{
              width: { xs: '42px', sm: '48px' },
              height: 'auto',
              objectFit: 'contain',
              cursor: 'pointer',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.45))',
            }}
          />
        </Link>
      </motion.div>
    </Box>
  );
}

