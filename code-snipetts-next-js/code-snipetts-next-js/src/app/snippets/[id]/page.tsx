import { notFound } from 'next/navigation';
import { db } from '@/db';

import * as actions from '@/actions';

import Link from 'next/link';

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  // await new Promise((r) => {
  //   setTimeout(r, 1000);
  // });

  const id = Number(props.params.id);

  const snippet = await actions.findSnippet.call(null, id);
  const deleteSnippetAction = actions.deleteSnippet.bind(null, id);

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="flex my-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link href={'/'} className="p-2 border rounded">
            Home
          </Link>
          <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded">
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((item) => {
    return {
      id: String(item.id),
    };
  });
}
