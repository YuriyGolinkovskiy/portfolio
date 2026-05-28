'use client';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Юрии. Backend Developer.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
            >
              GitHub
            </a>
            <pre className="text-green-400 text-xs font-mono hidden sm:block">
              {`  _   _ 
 | | | |
 | |_| |
 |  _  |
 |_| |_|
         `}
            </pre>
          </div>
        </div>
      </div>
    </footer>
  );
}