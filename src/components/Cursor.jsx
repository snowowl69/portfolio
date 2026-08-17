import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useAnimations';

export default function Cursor() {
  const { position, isHovering } = useMousePosition();
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '12px' : '8px',
          height: isHovering ? '12px' : '8px',
          borderRadius: '50%',
          background: '#6366F1',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference',
        }}
        animate={{
          x: position.x - (isHovering ? 6 : 4),
          y: position.y - (isHovering ? 6 : 4),
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      {/* Outer ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '56px' : '40px',
          height: isHovering ? '56px' : '40px',
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? 'rgba(245,158,11,0.6)' : 'rgba(99,102,241,0.4)'}`,
          pointerEvents: 'none',
          zIndex: 99998,
        }}
        animate={{
          x: position.x - (isHovering ? 28 : 20),
          y: position.y - (isHovering ? 28 : 20),
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 0.8,
        }}
      />
    </>
  );
}
