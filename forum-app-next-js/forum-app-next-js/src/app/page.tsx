import * as actions from '@/actions';
import { auth } from '@/utils/auth';

import Profile from '@/components/Profile/Profile';

import { Button } from '@nextui-org/react';

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>

      {session?.user ? (
        <div>From server: user {session.user.name} is Signed In</div>
      ) : (
        <div>From server: user is Signed Out</div>
      )}

      <Profile />
    </div>
  );
}
