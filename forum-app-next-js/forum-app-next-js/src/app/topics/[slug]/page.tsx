import { Suspense } from 'react';

import { fetchPostsByTopicSlug } from '@/db/queries/posts';

import { PostList } from '@/components/posts/PostList';
import { PostCreateForm } from '@/components/posts/PostCreateForm';
import { SkeletonBasic } from '@/components/common/SkeletonBasic';

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <Suspense fallback={<SkeletonBasic items={5} rows={1} />}>
          <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
        </Suspense>
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
