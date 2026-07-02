import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;
  const name = payload?.name?.trim();
  const email = payload?.email?.trim();
  const message = payload?.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Please fill out name, email, and message.' }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
  }

  console.info('Portfolio contact submission', { name, email, message, receivedAt: new Date().toISOString() });
  return NextResponse.json({ message: 'Thanks. Your message was received.' });
}