'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
  const session = useSession();

  let profile = '...';

  if (!session.data?.user && session.status === 'unauthenticated') {
    profile = 'From client: user is Signed Out';
  }
  if (session.data?.user && session.status === 'authenticated') {
    profile = 'From client: user is Signed In';
  }

  return <div>{profile}</div>;
}
