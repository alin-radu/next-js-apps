'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
  const session = useSession();

  let profile = 'From client: user is not Signed In';

  if (session.data?.user) {
    profile = 'From client: user is Signed In';
  }

  return <div>{profile}</div>;
}
