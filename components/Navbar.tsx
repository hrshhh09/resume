'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '@/lib/data';

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => href === '/blog' && pathname.startsWith('/blog');

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled || open ? 'border-white/10 bg-[#0a0a0b]/85 backdrop-blur-md' : 'border-transparent'}`}>
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm text-white">
          <span className="text-lime-400">~/</span>harsh-aathavale
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-1.5 text-sm transition ${isActive(link.href) ? 'text-lime-400' : 'text-stone-400 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
          <a href={profile.resumePath} download className="btn-primary ml-3 !py-1.5">
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>

        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="rounded-md p-2 text-stone-200 md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="section-shell flex flex-col gap-1 pb-4 md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-md py-2.5 text-stone-300 hover:text-white">
              {link.label}
            </Link>
          ))}
          <a href={profile.resumePath} download onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      ) : null}
    </header>
  );
}
