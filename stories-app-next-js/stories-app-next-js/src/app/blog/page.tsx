import PostCard from '@/components/post/postCard/PostCard';

import styles from './pageStyle.module.css';

const BlogPage = () => {
  const posts: Post[] = [];

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
