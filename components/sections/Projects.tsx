'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import Card from '@/components/ui/Card';
import { projects } from '@/data/projects';
import { Code2 as Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <ScrollReveal>
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 text-center">
            Проекты
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <Card className="h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-slate-700 text-blue-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-300 hover:text-blue-400 transition-colors mt-auto"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
