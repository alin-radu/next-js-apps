import Image from 'next/image';

import styles from './PostUserStyle.module.css';

interface PostUserProps {
  userId: string;
}

const PostUser = ({ userId }: PostUserProps) => {
  const user = {} as User;

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
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
