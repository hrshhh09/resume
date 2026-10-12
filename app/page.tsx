import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { SectionHeading } from '@/components/SectionHeading';
import { blogPosts, education, experiences, metrics, profile, projects, skillGroups } from '@/lib/data';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section id="about" className="section-shell pb-20 pt-36 sm:pt-44">
          <p className="inline-flex items-center gap-2 font-mono text-xs text-stone-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
            </span>
            Open to Senior SWE / AI Engineer roles
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-7xl">{profile.name}</h1>
          <p className="mt-3 font-mono text-lg text-lime-400 sm:text-xl">{profile.title} · AI Platforms</p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-400">
            I build scalable distributed systems, microservices, and production ML platforms across AWS, Azure, and GCP —
            from <span className="text-stone-200">model-serving pipelines on Kubernetes</span> to{' '}
            <span className="text-stone-200">agentic RAG systems</span> and full-stack GenAI apps.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={profile.resumePath} download className="btn-primary"><Download className="h-4 w-4" />Download Resume</a>
            <Link href="/#contact" className="btn-ghost"><Mail className="h-4 w-4" />Get in touch</Link>
            <a href={profile.github} aria-label="GitHub" className="btn-ghost !px-3"><Github className="h-4 w-4" /></a>
            <a href={profile.linkedin} aria-label="LinkedIn" className="btn-ghost !px-3"><Linkedin className="h-4 w-4" /></a>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-4">
            {[...metrics, { value: '2+ yrs', label: 'Shipping production systems' }].map((m) => (
              <div key={m.label} className="bg-[#0a0a0b] p-5">
                <dt className="font-mono text-2xl font-semibold text-white">{m.value}</dt>
                <dd className="mt-1 text-xs text-stone-500">{m.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Experience */}
        <section id="experience" className="section-shell py-20">
          <SectionHeading index="01 — Experience" title="Where I've worked" />
          <ol className="relative border-l border-white/10">
            {experiences.map((item) => (
              <li key={`${item.company}-${item.role}`} className="relative pb-12 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-lime-400 bg-[#0a0a0b]" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {item.role} <span className="text-stone-500">@</span> <span className="text-lime-400">{item.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-stone-500">{item.period}</span>
                </div>
                <ul className="mt-4 space-y-2.5 text-[15px] leading-7 text-stone-400">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-3"><span className="mt-[11px] h-px w-3 shrink-0 bg-stone-600" />{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="card mt-14 flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="label">Education</p>
              <p className="mt-2 font-semibold text-white">{education.degree}</p>
              <p className="text-sm text-stone-400">{education.school}</p>
            </div>
            <div className="font-mono text-sm text-stone-400 sm:text-right">
              <p>{education.period}</p>
              <p className="text-lime-400">CGPA {education.cgpa}</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section-shell py-20">
          <SectionHeading index="02 — Stack" title="Tools I reach for" />
          <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.label} className="bg-[#0a0a0b] p-5">
                <p className="font-mono text-xs text-stone-500">{g.label}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {g.skills.map((s) => <span key={s} className="rounded-md bg-white/[0.05] px-2.5 py-1 text-sm text-stone-200">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section-shell py-20">
          <SectionHeading index="03 — Projects" title="Selected work" description="Systems I've architected — ML infrastructure, RAG pipelines, and event-driven services." />
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => {
              const Icon = p.icon;
              return (
                <article key={p.title} className="card group flex flex-col p-6">
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-lime-400" />
                    <a href={p.source} aria-label={`${p.title} source`} className="text-stone-500 transition hover:text-white"><ArrowUpRight className="h-5 w-5" /></a>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-stone-400">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="section-shell py-20">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading index="04 — Writing" title="Latest from the blog" />
            <Link href="/blog" className="mb-10 hidden items-center gap-1.5 text-sm text-stone-400 transition hover:text-lime-400 sm:inline-flex">
              All posts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8">
                <span className="w-32 shrink-0 font-mono text-xs text-stone-500">{post.date}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white transition group-hover:text-lime-400">{post.title}</h3>
                  <p className="mt-1 text-sm text-stone-500">{post.excerpt}</p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-stone-600 transition group-hover:text-lime-400 sm:block" />
              </Link>
            ))}
          </div>
          <Link href="/blog" className="btn-ghost mt-8 sm:hidden">All posts <ArrowRight className="h-4 w-4" /></Link>
        </section>

        {/* Contact */}
        <section id="contact" className="section-shell py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading index="05 — Contact" title="Let's build something." description="Hiring, collaborating, or just want to talk ML infra? My inbox is open." />
              <div className="space-y-3 text-sm">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-stone-300 hover:text-lime-400"><Mail className="h-4 w-4 text-stone-500" />{profile.email}</a>
                <p className="flex items-center gap-3 text-stone-300"><MapPin className="h-4 w-4 text-stone-500" />{profile.location}</p>
              </div>
              <a href={profile.resumePath} download className="btn-primary mt-8"><Download className="h-4 w-4" />Download full CV (PDF)</a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
