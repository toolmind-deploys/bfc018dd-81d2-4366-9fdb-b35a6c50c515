import React from 'react';

async function getFeedData() {
  const res = await fetch('http://localhost:3000/api/home', {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch feed data');
  }
  return res.json();
}

export default async function HomePage() {
  const data = await getFeedData();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Feeds Page</h1>
      {data.posts?.map((post: any) => (
        <article key={post.id} className="mb-4 border p-3 rounded">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </main>
  );
}
