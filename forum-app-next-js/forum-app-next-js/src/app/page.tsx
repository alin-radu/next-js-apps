import { fetchTopPosts } from '@/db/queries/posts';

import { Divider } from '@nextui-org/react';

import { PostList } from '@/components/posts/PostList';
import { TopicCreateForm } from '@/components/topics/TopicCreateForm';
import { TopicList } from '@/components/topics/TopicList';
import { Suspense } from 'react';
import { SkeletonBasic } from '@/components/common/SkeletonBasic';

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">Top Posts</h1>
        <Suspense fallback={<SkeletonBasic items={5} rows={1} />}>
          <PostList fetchData={fetchTopPosts} />
        </Suspense>
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg mb-2">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
