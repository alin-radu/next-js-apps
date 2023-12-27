import { db } from '@/db';

import Link from 'next/link';

import type { Snippet } from '@prisma/client';

function SnippetsList({ snippets }: { snippets: Snippet[] }) {
  return snippets.map((snippet) => {
    return (
      <Link
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className="flex justify-between items-center p-2 border rounded"
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });
}

export default async function Home() {
  // await new Promise((r) => {
  //   setTimeout(r, 1000);
  // });

  const snippets = await db.snippet.findMany();

  return (
    <div>
      <div className="flex my-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <SnippetsList snippets={snippets} />
      </div>
    </div>
  );
}
