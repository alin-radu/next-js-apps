import Link from 'next/link';

import { Input } from '@nextui-org/react';
import { Navbar } from '@nextui-org/react';
import { NavbarBrand } from '@nextui-org/react';
import { NavbarContent } from '@nextui-org/react';
import { NavbarItem } from '@nextui-org/react';

import { HeaderAuth } from '../HeaderAuth';

export function Header() {
  return (
    <Navbar className="shadow mb-6 mt-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Forum
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
