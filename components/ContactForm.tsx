'use client';

import { Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    const payload = (await response.json()) as { message?: string };
    setMessage(payload.message ?? 'Something went wrong.');
    setStatus(response.ok ? 'success' : 'error');
    if (response.ok) form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="glass-strong grid gap-4 rounded-2xl p-5 sm:p-6">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-200">Name</label>
        <input id="name" name="name" required className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60" placeholder="Your name" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-200">Email</label>
        <input id="email" name="email" type="email" required className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60" placeholder="you@example.com" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-200">Message</label>
        <textarea id="message" name="message" required rows={4} className="resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60" placeholder="Tell me what you are building" />
      </div>
      <button disabled={status === 'sending'} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70">
        <Send className="h-4 w-4" />
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {message ? <p className={status === 'success' ? 'text-sm text-emerald-300' : 'text-sm text-red-300'}>{message}</p> : null}
    </form>
  );
}