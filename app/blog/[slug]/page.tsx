import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { blogPosts, getBlogPost, profile } from '@/lib/data';

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} - ${profile.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen overflow-hidden pb-16">
      <Navbar />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-blue-700/25 blur-3xl" />
        <div className="absolute right-[-10rem] top-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>
      <article className="section-shell pt-36">
        <Link href="/#blog" className="glass mb-8 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-sky-100 transition hover:bg-white/[0.06]">
          <ArrowLeft className="h-4 w-4" />
          Back to journal
        </Link>
        <div className="glass-strong mx-auto max-w-3xl rounded-3xl p-6 sm:p-10">
          <p className="text-sm text-slate-400">{post.date} · {post.readTime}</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => <span key={tag} className="rounded-full bg-sky-400/10 px-3 py-1 text-xs text-sky-200">{tag}</span>)}
          </div>
          <div className="mt-10 grid gap-6 text-base leading-8 text-slate-200">
            {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </article>
    </main>
  );
}