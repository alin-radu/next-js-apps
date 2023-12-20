import { PostItem } from '../PostItem';

import type { PostWithData } from '@/db/queries/posts';

interface PostListProps {
  fetchData: () => Promise<PostWithData[]>;
}

export async function PostList({ fetchData }: PostListProps) {
  const posts = await fetchData();

  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error('Need a slug to link to a post');
    }

    return <PostItem key={post.id} post={post} topicSlug={topicSlug} />;
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}
