import Link from 'next/link';
import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { IntroVideo } from '@/components/IntroVideo';
import { Navbar } from '@/components/Navbar';
import { SectionHeading } from '@/components/SectionHeading';
import { blogPosts, experiences, metrics, profile, projects, services, skillGroups } from '@/lib/data';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-16">
      <AmbientBackground />
      <Navbar />

      <section id="about" className="section-shell grid min-h-screen items-center gap-10 pt-32 lg:grid-cols-[1fr_0.9fr] lg:pt-20">
        <div className="animate-fadeUp">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-sky-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to Senior SWE / AI Engineer roles
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building scalable systems where software meets <span className="gradient-text">AI</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I&apos;m {profile.name}, a Senior Software Engineer with 2+ years shipping distributed systems, microservices, and production ML platforms across AWS, Azure, and GCP. Full-stack by day, ML infra by night.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-sky-300" />{profile.location}</span>
            <a className="inline-flex items-center gap-2 transition hover:text-white" href={`mailto:${profile.email}`}><Mail className="h-4 w-4 text-sky-300" />{profile.email}</a>
            <a className="inline-flex items-center gap-2 transition hover:text-white" href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone className="h-4 w-4 text-sky-300" />{profile.phone}</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resumePath} download className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.02]"><Download className="h-4 w-4" />Download Resume</a>
            <a href={profile.github} className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]"><Github className="h-4 w-4" />GitHub</a>
            <a href={profile.linkedin} className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]"><Linkedin className="h-4 w-4" />LinkedIn</a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="glass rounded-2xl p-4">
                <p className="text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <IntroVideo />
        </div>
      </section>

      <section id="experience" className="section-shell py-20">
        <SectionHeading eyebrow="Where I have worked" title="Experience" />
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4">
            {experiences.map((item) => (
              <article key={`${item.company}-${item.role}`} className="glass rounded-2xl p-5 transition hover:border-white/20 hover:bg-white/[0.05] sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="text-sky-200">{item.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">{item.period}</span>
                </div>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="glass-strong rounded-2xl p-5 sm:p-6">
            <h3 className="text-xl font-semibold text-white">Technical Stack</h3>
            <div className="mt-5 grid gap-5">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 text-sm font-medium text-sky-200">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell py-20">
        <SectionHeading eyebrow="Selected work" title="Featured Work" description="Systems and platforms I have architected, from ML infrastructure and RAG pipelines to event-driven microservices." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article key={project.title} className="glass group flex min-h-[320px] flex-col rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] sm:p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-200 ring-1 ring-sky-300/20"><Icon className="h-5 w-5" /></div>
                  <div className="flex gap-2">
                    <a href={project.source} aria-label={`${project.title} source`} className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"><Github className="h-4 w-4" /></a>
                    <a href={project.demo} aria-label={`${project.title} demo`} className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"><ExternalLink className="h-4 w-4" /></a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => <span key={tech} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-sky-100">{tech}</span>)}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="blog" className="section-shell py-20">
        <SectionHeading eyebrow="Writing" title="From the Journal" description="Notes on shipping ML platforms, distributed systems, and the craft of engineering at scale." />
        <div className="glass rounded-3xl p-4 sm:p-6">
          <div className="grid gap-4 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-2xl border border-white/10 bg-zinc-900/80 p-5 transition hover:border-sky-300/40">
                <p className="text-sm text-slate-400">{post.date} · {post.readTime}</p>
                <h3 className="mt-4 text-xl font-semibold leading-7 text-white">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{post.excerpt}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => <span key={tag} className="rounded-full bg-sky-400/10 px-2.5 py-1 text-xs text-sky-200">{tag}</span>)}
                </div>
                <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition hover:text-white">Read <ArrowRight className="h-4 w-4" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="PDF - Updated 2025" title="Grab the full CV." description="Complete work history, technical skills matrix, education, and projects, designed to be scanned quickly." />
            <div className="flex flex-wrap gap-3">
              <a href={profile.resumePath} download className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:scale-[1.02]"><Download className="h-4 w-4" />Download Full CV (PDF)</a>
              <a href={`mailto:${profile.email}`} className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"><Mail className="h-4 w-4" />Get in touch</a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return <div key={service.label} className="glass rounded-2xl p-4"><Icon className="mb-3 h-5 w-5 text-sky-200" /><p className="text-sm text-slate-200">{service.label}</p></div>;
              })}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="section-shell border-t border-white/10 pt-8 text-sm text-slate-400">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">{profile.name}</p>
            <p>{profile.title}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${profile.email}`} className="hover:text-white">{profile.email}</a>
            <span>{profile.location}</span>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between pb-2">
          <p>© 2026 {profile.name}. Built with Next.js & Tailwind.</p>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 text-xs font-bold text-white">{profile.initials}</span>
        </div>
      </footer>
    </main>
  );
}

function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-8rem] top-20 h-80 w-80 animate-floatSlow rounded-full bg-blue-700/30 blur-3xl" />
      <div className="absolute right-[-10rem] top-32 h-96 w-96 animate-floatReverse rounded-full bg-cyan-500/18 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-floatSlow rounded-full bg-indigo-600/20 blur-3xl" />
    </div>
  );
}