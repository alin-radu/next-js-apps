import PostCard from '@/components/post/PostCard/PostCard';
import { getPosts } from '@/lib/db-utils';

import { Post } from '@/lib/db-models';

import styles from './pageStyle.module.css';

const getData = async () => {
  const response = await fetch('http://localhost:3000/api/blog');

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  return response.json();
};

const BlogPage = async () => {
  // Note: fetch post WITH an API
  const posts: Post[] = await getData();

  // Note: fetch posts without an API
  // const posts: Post[] = await getPosts();

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
