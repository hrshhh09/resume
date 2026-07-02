'use client';

import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '@/lib/data';

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blog', href: '/#blog' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <nav className={`glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 sm:py-3 ${scrolled ? 'bg-white/[0.06]' : ''}`}>
        <Link href="/" className="group flex min-w-0 items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 text-sm font-bold shadow-lg shadow-blue-500/30">
            {profile.initials}
          </div>
          <span className="hidden truncate font-semibold tracking-tight text-white sm:block">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-all hover:bg-white/[0.05] hover:text-white lg:px-4">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={profile.resumePath} download className="hidden items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 px-3.5 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] hover:shadow-blue-500/60 sm:inline-flex lg:px-4">
            <Download className="h-4 w-4" />
            <span className="hidden lg:inline">Download Resume</span>
            <span className="lg:hidden">Resume</span>
          </a>
          <button aria-label="Toggle menu" onClick={() => setOpen((value) => !value)} className="rounded-lg p-2 text-slate-200 hover:bg-white/[0.05] md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl p-3 md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm text-slate-200 transition-all hover:bg-white/[0.06] hover:text-white">
              {link.label}
            </Link>
          ))}
          <a href={profile.resumePath} download onClick={() => setOpen(false)} className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 px-4 py-3 text-sm font-medium text-white">
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      ) : null}
    </header>
  );
}