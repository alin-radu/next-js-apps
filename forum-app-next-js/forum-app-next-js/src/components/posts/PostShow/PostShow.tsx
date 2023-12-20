import { getPostByPostId } from '@/actions/get-post-by-post-id';
import { notFound } from 'next/navigation';

interface PostShowProps {
  postId: string;
}

export async function PostShow({ postId }: PostShowProps) {
  const post = await getPostByPostId(postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold my-2">{post.title}</h1>
      <p className="p-4 border rounded">{post.content}</p>
    </div>
  );
}
