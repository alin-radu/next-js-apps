import Image from 'next/image';

import { User } from '@/lib/db-models';

import styles from './PostUserStyle.module.css';
import { getUser } from '@/lib/db-utils';

interface PostUserProps {
  userId: string;
}

const PostUser = async ({ userId }: PostUserProps) => {
  const user: User = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : '/noavatar.png'}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username ? user.username : '-'}</span>
      </div>
    </div>
  );
};

export default PostUser;
