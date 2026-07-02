'use client';

import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '/#about' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Blog', href: '/#blog' },
  ];

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-4">
      <nav className={`max-w-6xl mx-auto glass rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-white/[0.06]' : ''}`}>
        <Link href="/" className="flex items-center gap-2 group min-w-0">
          <div className="w-8 h-8 shrink-0 rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/30">
            HA
          </div>
          <span className="font-semibold tracking-tight text-white hidden sm:block truncate">Harsh Aathavale</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="px-3 lg:px-4 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 px-3.5 lg:px-4 py-2 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white text-sm font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/60 hover:scale-[1.02] transition-all"
          >
            <Download className="w-4 h-4" />
            <span className="hidden lg:inline">Download Resume</span>
            <span className="lg:hidden">Resume</span>
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-white/[0.05] text-slate-200"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 glass rounded-2xl p-3 flex flex-col gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-4 py-3 text-sm text-slate-200 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all">
              {l.label}
            </Link>
          ))}
          <a href="/resume.pdf" download onClick={() => setOpen(false)} className="mt-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white text-sm font-medium">
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
