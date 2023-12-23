import Link from 'next/link';

import { Suspense } from 'react';
import { Navbar } from '@nextui-org/react';
import { NavbarBrand } from '@nextui-org/react';
import { NavbarContent } from '@nextui-org/react';
import { NavbarItem } from '@nextui-org/react';

import { HeaderAuth } from '../HeaderAuth';
import { SearchInput } from '@/components/SearchInput';

export function Header() {
  return (
    <Navbar className="shadow mb-6 mt-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          DevTopics
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
