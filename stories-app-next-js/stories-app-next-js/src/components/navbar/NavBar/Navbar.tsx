import { auth } from '@/lib/auth';

import Link from 'next/link';
import Links from '../Links/Links';

import styles from './NavbarStyle.module.css';

const logoLink = {
  title: 'Home',
  path: '/',
};

export default async function Navbar() {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href={logoLink.path} className={styles.logo}>
        {logoLink.title}
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
}
