import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { blogPosts, profile } from '@/lib/data';

export const metadata: Metadata = {
  title: `Blog - ${profile.name}`,
  description: 'Notes on shipping ML platforms, distributed systems, and engineering at scale.',
};

export default function BlogIndexPage() {
  const tags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));

  return (
    <>
      <Navbar />
      <main className="section-shell pt-36">
        <p className="label">Writing</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Blog</h1>
        <p className="mt-4 max-w-2xl text-lg text-stone-400">
          Notes on shipping ML platforms, distributed systems, and the craft of engineering at scale.
        </p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {tags.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>

        <div className="mt-14 grid gap-4">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card group block p-6 sm:p-8">
              <div className="flex items-center justify-between font-mono text-xs text-stone-500">
                <span>{post.date} · {post.readTime}</span>
                <ArrowUpRight className="h-5 w-5 transition group-hover:text-lime-400" />
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-white transition group-hover:text-lime-400">{post.title}</h2>
              <p className="mt-3 text-stone-400">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {post.tags.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
