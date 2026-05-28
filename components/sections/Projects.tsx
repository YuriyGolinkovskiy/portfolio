'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Card from '@/components/ui/Card';
import { projects } from '@/data/projects';
import { Code2 as Github } from 'lucide-react';
import { useState } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <ScrollReveal>
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 text-center">
            Проекты
          </h2>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} variants={item} />
            ))}
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function ProjectCard({ project, variants }: { project: any, variants: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div variants={variants}>
      <Card className="h-full flex flex-col">
        <h3 className="text-xl font-semibold text-slate-100 mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech: string) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-slate-800/50 border border-white/5 text-blue-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-slate-300 hover:text-blue-400 transition-colors mt-auto group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="mr-2"
            animate={isHovered ? {
              rotate: [0, -15, 15, -10, 10, -5, 5, 0],
              scale: 1.2,
            } : {
              rotate: 0,
              scale: 1
            }}
            transition={{ duration: 0.5 }}
          >
            <Github size={16} />
          </motion.div>
          GitHub
        </a>
      </Card>
    </motion.div>
  );
}
