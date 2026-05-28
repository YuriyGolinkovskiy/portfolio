'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import Card from '@/components/ui/Card';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <ScrollReveal>
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 text-center">
            Обо мне
          </h2>
          
          <Card>
            <div className="space-y-4 text-slate-300">
              <p>
                Я backend-разработчик с опытом работы в создании масштабируемых и надёжных серверных приложений.
                Мой путь в IT начался с интереса к тому, как работают веб-сервисы изнутри, и перерос в профессиональную деятельность.
              </p>
              <p>
                <strong className="text-blue-400">Основной стек:</strong> Node.js, NestJS, TypeScript, PostgreSQL, Redis, Docker
              </p>
              <p>
                <strong className="text-purple-400">Хобби и интересы:</strong> Arduino, шахматы, open source проекты
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-400 mt-6">
                «Чистый код — это не цель, это процесс постоянного улучшения.»
              </blockquote>
            </div>
          </Card>
        </div>
      </ScrollReveal>
    </section>
  );
}