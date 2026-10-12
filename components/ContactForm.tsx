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
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const payload = (await response.json()) as { message?: string };
      setMessage(payload.message ?? 'Something went wrong.');
      setStatus(response.ok ? 'success' : 'error');
      if (response.ok) form.reset();
    } catch {
      setMessage('Network error. Please email me directly.');
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card grid gap-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-mono text-stone-500">
          NAME
          <input name="name" required className="input" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-xs font-mono text-stone-500">
          EMAIL
          <input name="email" type="email" required className="input" placeholder="you@example.com" />
        </label>
      </div>
      <label className="grid gap-2 text-xs font-mono text-stone-500">
        MESSAGE
        <textarea name="message" required rows={5} className="input resize-none" placeholder="What are you building?" />
      </label>
      <button disabled={status === 'sending'} className="btn-primary justify-center disabled:opacity-60">
        <Send className="h-4 w-4" />
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {message ? <p className={`text-sm ${status === 'success' ? 'text-lime-400' : 'text-red-400'}`}>{message}</p> : null}
    </form>
  );
}
