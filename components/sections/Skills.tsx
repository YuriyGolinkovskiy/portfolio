'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import Card from '@/components/ui/Card';
import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <ScrollReveal>
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 text-center">
            Навыки
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Основной стек</h3>
              <ul className="space-y-2">
                {skills.main.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Знаком с технологиями</h3>
              <ul className="space-y-2">
                {skills.familiar.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-green-400 mb-4">Хобби и изучение</h3>
              <ul className="space-y-2">
                {skills.hobbies.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-300">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
