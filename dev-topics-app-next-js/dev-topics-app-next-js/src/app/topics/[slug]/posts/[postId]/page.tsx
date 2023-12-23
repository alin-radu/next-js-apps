import { Suspense } from 'react';

import Link from 'next/link';

import { fetchCommentsByPostId } from '@/db/queries/comments';

import { paths } from '@/utils/paths';

import { PostShow } from '@/components/posts/PostShow';
import { CommentList } from '@/components/comments/CommentList';
import { CommentCreateForm } from '@/components/comments/CommentCreateForm';
import { SkeletonBasic } from '@/components/common/SkeletonBasic';

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {'< '}Back to {slug}
      </Link>
      <Suspense fallback={<SkeletonBasic items={1} rows={5} withTitle />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList fetchData={() => fetchCommentsByPostId(postId)} />
    </div>
  );
}
