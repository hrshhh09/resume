import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const resumePath = path.join(process.cwd(), 'public', 'resume.pdf');
    const resume = await readFile(resumePath);

    return new Response(resume, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Harsh-Aathavale-Resume.pdf"',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch {
    return NextResponse.json({ message: 'Resume PDF is not available.' }, { status: 404 });
  }
}