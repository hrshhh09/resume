import Link from 'next/link';
import { profile } from '@/lib/data';

export function Footer() {
  return (
    <footer className="section-shell mt-24 border-t border-white/10 py-8 text-sm text-stone-500">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-5">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <a href={`mailto:${profile.email}`} className="hover:text-white">Email</a>
          <a href={profile.github} className="hover:text-white">GitHub</a>
          <a href={profile.linkedin} className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
