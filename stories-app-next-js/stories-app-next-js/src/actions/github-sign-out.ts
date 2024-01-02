'use server';

import * as auth from '@/lib/auth';

export async function githubSignOut() {
  return auth.signOut();
}
