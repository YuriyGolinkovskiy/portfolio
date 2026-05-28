'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export default function ScrollReveal({ 
  children, 
  delay = 0,
  direction = 'up' 
}: ScrollRevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px',
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0 
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1], // Custom easing for smoother feel
        delay 
      }}
    >
      {children}
    </motion.div>
  );
}
