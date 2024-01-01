import Image from 'next/image';
import { getPost } from '@/lib/db-utils';

import PostUser from '@/components/post/PostUser/PostUser';

import { Post } from '@/lib/db-models';

import styles from './pageStyle.module.css';
import { formatDate } from '@/lib/date-utils';
import { Suspense } from 'react';

interface SinglePostProps {
  params: {
    slug: string;
  };
}

const SinglePostPage = async ({ params }: SinglePostProps) => {
  const { slug } = params;

  const postData: Promise<Post> = getPost(slug);
  const post = await postData;

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
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={String(post.userId) || ''} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt ? formatDate(post.createdAt) : '-'}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
