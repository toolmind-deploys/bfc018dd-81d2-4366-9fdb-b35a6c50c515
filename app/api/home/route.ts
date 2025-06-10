import { NextResponse } from 'next/server';

export async function GET() {
  const dummyData = [
    { id: 1, title: 'First Feed Item', content: 'This is the first dummy content.' },
    { id: 2, title: 'Second Feed Item', content: 'This is another placeholder content.' },
  ];

  return NextResponse.json({ posts: dummyData });
}
