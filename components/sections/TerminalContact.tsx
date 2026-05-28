'use client';

import { useState, useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Card from '@/components/ui/Card';

const commands = [
  'whoami',
  'cat contact_info.txt',
  'ls -la skills/',
  'ping github.com',
];

const responses: Record<string, string[]> = {
  whoami: ['Yurii — Backend Developer'],
  'cat contact_info.txt': [
    'Email: yurii@example.com',
    'Telegram: @yurii_dev',
    'GitHub: github.com/yurii',
  ],
  'ls -la skills/': [
    'Node.js',
    'NestJS',
    'TypeScript',
    'PostgreSQL',
    'Redis',
    'Docker',
  ],
  'ping github.com': ['64 bytes from github.com: icmp_seq=1 ttl=52 time=12.3 ms'],
};

export default function TerminalContact() {
  const [cmdIndex, setCmdIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const cmd = commands[cmdIndex % commands.length];
    const resp = responses[cmd];
    
    // Reset for new command
    setDisplayedLines([]);
    setCurrentLine(cmd);
    setIsTyping(true);

    // Simulate typing command
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < cmd.length) {
        setCurrentLine(cmd.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        // Show response after a short delay
        setTimeout(() => {
          setDisplayedLines(resp);
          // Switch to next command after showing response
          setTimeout(() => {
            setCmdIndex((prev) => prev + 1);
          }, 3000);
        }, 500);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [cmdIndex]);

  return (
    <section id="contact" className="py-16 sm:py-20">
      <ScrollReveal>
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 text-center">
            Контакты
          </h2>

          <Card className="bg-[#0d1117] border-slate-800 font-mono text-sm sm:text-base overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-2 bg-slate-900/50 border-b border-slate-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 text-xs text-slate-500">bash — 80x24</div>
            </div>

            <div className="p-4 sm:p-6 min-h-[300px] flex flex-col">
              <div className="flex-grow space-y-2">
                {displayedLines.map((line, i) => (
                  <div key={i} className="text-emerald-400">
                    {line}
                  </div>
                ))}
                <div className="flex items-center text-emerald-400">
                  <span className="text-blue-400 mr-2">➜</span>
                  <span className="text-purple-400 mr-2">~</span>
                  <span>{currentLine}</span>
                  {!isTyping && displayedLines.length > 0 && (
                     <span className="w-2 h-4 bg-emerald-400 ml-1 animate-blink"></span>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </ScrollReveal>
    </section>
  );
}