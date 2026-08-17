import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState('logo'); // 'logo' → 'reveal' → 'done'

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('reveal'), 1200);
    const timer2 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left curtain */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50%',
              height: '100%',
              background: '#0A0A0F',
              zIndex: 2,
            }}
            animate={phase === 'reveal' ? { x: '-100%' } : { x: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Right curtain */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '50%',
              height: '100%',
              background: '#0A0A0F',
              zIndex: 2,
            }}
            animate={phase === 'reveal' ? { x: '100%' } : { x: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Logo */}
          <motion.div
            className="loading-logo"
            style={{ zIndex: 3, userSelect: 'none' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              phase === 'logo'
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 1.2 }
            }
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            R∆GHAV
          </motion.div>

          {/* Radial glow behind logo */}
          <motion.div
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
              zIndex: 1,
            }}
            animate={
              phase === 'logo'
                ? { scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }
                : { opacity: 0 }
            }
            transition={
              phase === 'logo'
                ? { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0.3 }
            }
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
