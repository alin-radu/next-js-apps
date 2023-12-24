import Link from 'next/link';
import Image from 'next/image';

import { MainHeaderBackground } from '.';

import logoImage from '@/assets/logo.png';

import classes from './main-header.module.css';

export function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            priority
            src={logoImage.src}
            alt="A plate with food on it"
            width={100}
            height={100}
          />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
