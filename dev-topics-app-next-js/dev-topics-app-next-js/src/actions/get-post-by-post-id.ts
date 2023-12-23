import { db } from '@/db';

export const getPostByPostId = async (postId: string) => {
  return await db.post.findFirst({
    where: { id: postId },
  });
};
