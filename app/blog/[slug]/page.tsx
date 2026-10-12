import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/Footer';
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
    <>
      <Navbar />
      <main className="section-shell pt-32">
        <article className="mx-auto max-w-2xl">
          <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-xs text-stone-500 transition hover:text-lime-400">
            <ArrowLeft className="h-3.5 w-3.5" />
            All posts
          </Link>
          <p className="mt-10 font-mono text-xs text-stone-500">{post.date} · {post.readTime}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-stone-400">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
          </div>
          <div className="mt-10 space-y-6 border-t border-white/10 pt-10 text-[17px] leading-8 text-stone-300">
            {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
