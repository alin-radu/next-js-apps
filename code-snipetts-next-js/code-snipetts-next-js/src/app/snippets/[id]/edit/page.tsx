import { notFound } from 'next/navigation';

import * as actions from '@/actions';
import { getEnvironment } from '@/utils';

import SnippetEditForm from '@/components/snippet/SnippetEditForm';

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  getEnvironment('SnippetEditPage');

  const id = Number(props.params.id);

  const snippet = await actions.findSnippet(id);

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="flex my-4 justify-between items-center">
        <h1 className="text-xl font-bold">
          Editing the Snippet with the title &quot;{snippet.title}&quot;
        </h1>
      </div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
