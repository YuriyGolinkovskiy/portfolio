'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, onClick, href, variant = 'primary' }: ButtonProps) {
  const baseClasses = "relative px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center overflow-hidden group";
  
  const primaryClasses = `bg-slate-100 text-slate-950 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]`;
  
  const secondaryClasses = `bg-transparent border border-slate-700 text-slate-300 hover:border-purple-500/50 hover:text-white hover:bg-purple-500/5`;

  const classes = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
