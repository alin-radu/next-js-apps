'use client';

import { useState } from 'react';

import * as actions from '@/actions';

import Image from 'next/image';

import LinkItem from '../LinkItem/LinkItem';

import styles from './LinksStyle.module.css';

import { Session } from 'next-auth';

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

const LinksArr = ({ links }: { links: Link[] }) =>
  links.map((link) => <LinkItem key={link.title} item={link} />);

export default function Links({ session }: { session: Session | null }) {
  const [open, setOpen] = useState<boolean>(false);

  const handleSetOpen = () => {
    setOpen((currentState) => !currentState);
  };

  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <LinksArr links={links} />
        {session?.user ? (
          <>
            {session.user?.isAdmin && <LinkItem item={adminLink} />}
            <form action={actions.githubSignOut}>
              <button className={styles.logout}>Logout</button>
            </form>
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
          <LinksArr links={links} />
        </div>
      )}
    </div>
  );
}
