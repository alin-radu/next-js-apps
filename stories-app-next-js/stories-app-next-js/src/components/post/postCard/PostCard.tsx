import Link from 'next/link';
import Image from 'next/image';

import { formatDate } from '@/lib/date-utils';

import styles from './PostCardStyle.module.css';

import { Post } from '@/lib/db-models';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>{formatDate(post.createdAt)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
