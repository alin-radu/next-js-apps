'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

import styles from './LinkItemStyle.module.css';

export default function LinkItem({ item }: { item: Link }) {
  const { title, path } = item;

  const pathName = usePathname();

  const isActiveStyle = pathName === path ? 'active' : '';

  return (
    <Link href={path} className={`${styles.container} ${styles[isActiveStyle]}`}>
      {title}
    </Link>
  );
}
