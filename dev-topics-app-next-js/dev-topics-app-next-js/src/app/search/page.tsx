import { redirect } from 'next/navigation';

import { fetchPostsBySearchTerm } from '@/db/queries/posts';

import { Suspense } from 'react';

import { PostList } from '@/components/posts/PostList';
import { SkeletonBasic } from '@/components/common/SkeletonBasic';

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  if (!term) {
    redirect('/');
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">Searched term: {term}</h1>
        <Suspense fallback={<SkeletonBasic items={1} rows={2} />}>
          <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
        </Suspense>
      </div>
    </div>
  );
}
