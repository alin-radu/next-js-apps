import Image from 'next/image';

import PostUser from '@/components/post/PostUser/PostUser';

import styles from './singlePost.module.css';

interface SinglePostProps {
  params: string;
}

const SinglePostPage = async ({ params }: SinglePostProps) => {
  const post = {} as Post;

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && <PostUser userId={String(post.userId) || ''} />}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt?.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
