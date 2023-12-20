'use client';

import { useSession } from 'next-auth/react';
import * as actions from '@/actions';

import { Button, Spinner } from '@nextui-org/react';
import { NavbarItem } from '@nextui-org/react';
import { Popover } from '@nextui-org/react';
import { PopoverContent } from '@nextui-org/react';
import { PopoverTrigger } from '@nextui-org/react';
import { User } from '@nextui-org/react';

interface AvatarComponentsProps {
  image: string | '';
  name: string;
}

const Avatar = ({ name, image }: AvatarComponentsProps) => (
  <Popover placement="left">
    <PopoverTrigger>
      <User
        as="button"
        name={name}
        className="transition-transform"
        avatarProps={{
          src: image,
        }}
      />
    </PopoverTrigger>
    <PopoverContent>
      <div className="p-4">
        <form action={actions.signOut}>
          <Button type="submit">Sign Out</Button>
        </form>
      </div>
    </PopoverContent>
  </Popover>
);

const SignInButton = () => (
  <NavbarItem>
    <form action={actions.signIn}>
      <Button type="submit" color="secondary" variant="bordered">
        Sign In
      </Button>
    </form>
  </NavbarItem>
);

const SignUpButton = () => (
  <NavbarItem>
    <form action={actions.signIn}>
      <Button type="submit" color="primary" variant="flat">
        Sign Up
      </Button>
    </form>
  </NavbarItem>
);

export function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
  switch (session.status) {
    case 'loading':
      authContent = <Spinner size="sm" color="default" />;
      break;
    case 'authenticated':
      authContent = (
        <Avatar
          name={session.data.user?.name || ''}
          image={session.data.user?.image || ''}
        />
      );
      break;
    default:
      authContent = (
        <>
          <SignInButton />
          <SignUpButton />
        </>
      );
  }

  return authContent;
}
