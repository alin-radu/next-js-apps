'use client';

import { useState } from 'react';

import Image from 'next/image';

import LinkItem from './LinkItem/LinkItem';

import styles from './LinksStyle.module.css';

const links = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

const loginLink = {
  title: 'Login',
  path: '/login',
};

const adminLink = {
  title: 'Admin',
  path: '/admin',
};

const LinksComponent = ({ links }: { links: Link[] }) =>
  links.map((link) => <LinkItem key={link.title} item={link} />);

export default function Links() {
  const [open, setOpen] = useState<boolean>(false);

  const handleSetOpen = () => {
    setOpen((currentState) => !currentState);
  };

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <LinksComponent links={links} />
        {session ? (
          <>
            {isAdmin && <LinkItem item={adminLink} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <LinkItem item={loginLink} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={handleSetOpen}
      />
      {open && (
        <div className={styles.mobileLinks}>
          <LinksComponent links={links} />
        </div>
      )}
    </div>
  );
}
