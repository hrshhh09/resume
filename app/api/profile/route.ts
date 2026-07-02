import { NextResponse } from 'next/server';
import { blogPosts, experiences, profile, projects, skillGroups } from '@/lib/data';

export function GET() {
  return NextResponse.json({ profile, experiences, skillGroups, projects, blogPosts });
}