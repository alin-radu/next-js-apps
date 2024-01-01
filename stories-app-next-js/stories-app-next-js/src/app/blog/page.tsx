import PostCard from '@/components/post/postCard/PostCard';
import { getPosts } from '@/lib/db-utils';

import { Post } from '@/lib/db-models';

import styles from './pageStyle.module.css';

const BlogPage = async () => {
  const posts: Post[] = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.slug}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
