import Link from 'next/link';
import Links from './links/Links';

import styles from './NavbarStyle.module.css';

const logoLink = {
  title: 'Home',
  path: '/',
};

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href={logoLink.path} className={styles.logo}>
        {logoLink.title}
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
}
