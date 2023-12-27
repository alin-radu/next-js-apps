'use client';

import { useState } from 'react';

import * as actions from '@/actions';

import { getEnvironment } from '@/utils';

import Link from 'next/link';
import Editor from '@monaco-editor/react';

import type { Snippet } from '@prisma/client';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  getEnvironment('SnippetEditForm');

  const [title, setTitle] = useState(snippet.title);
  const [code, setCode] = useState(snippet.code);

  const handleTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const handleEditorChange = (value: string = '') => {
    setCode(value);
  };

  const editAsnippetAction = actions.editSnippet.bind(null, snippet.id, code, title);

  return (
    <>
      <div className="my-4">
        <label className="w-12" htmlFor="title">
          Title
        </label>
        <input
          name="title"
          className="my-4 border rounded p-2 w-full"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <div className="my-4 w-12">Code</div>
        <Editor
          height="40vh"
          theme="vs-dark"
          language="javascript"
          defaultValue={snippet.code}
          options={{ minimap: { enabled: false } }}
          onChange={handleEditorChange}
        />
      </div>
      <div className="my-4 flex gap-4">
        <Link href="/" className="p-2 border rounded">
          Cancel
        </Link>
        <form action={editAsnippetAction}>
          <button type="submit" className="p-2 rounded bg-blue-200">
            Save
          </button>
        </form>
      </div>
    </>
  );
}

// const handleClick = () =>{
//   startTransition(async () =>{
//     await actions.editSnippet(code);
//   })
// }
//<button onClick={handleClick}>
//  Submit
//</button>
