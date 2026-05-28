'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <ScrollReveal>
        <div className="text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 mb-4 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm"
          >
            <span className="text-xs font-mono text-purple-300">// Backend Developer</span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400">
              Привет, я{' '}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 animate-glow">
              Юрии
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Разрабатываю{' '}
            <span className="text-slate-200 font-medium">надёжные</span>{' '}
            и{' '}
            <span className="text-slate-200 font-medium">масштабируемые</span>{' '}
            backend-решения на Node.js и NestJS.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button href="#contact">Связаться</Button>
            <Button href="#projects" variant="secondary">Проекты</Button>
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
}