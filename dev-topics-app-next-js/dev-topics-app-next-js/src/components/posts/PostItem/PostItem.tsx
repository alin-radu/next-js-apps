import Link from 'next/link';

import { paths } from '@/utils/paths';

import type { PostWithData } from '@/db/queries/posts';

interface PostItemProps {
  post: PostWithData;
  topicSlug: string;
}

export function PostItem({ post, topicSlug }: PostItemProps) {
  return (
    <div key={post.id} className="border rounded p-2">
      <Link href={paths.postShow(topicSlug, post.id)}>
        <h3 className="text-lg font-bold">{post.title}</h3>
        <div className="flex flex-row gap-8">
          <p className="text-xs text-gray-400">By {post.user.name}</p>
          <p className="text-xs text-gray-400">{post._count.comments} comments</p>
        </div>
      </Link>
    </div>
  );
}
