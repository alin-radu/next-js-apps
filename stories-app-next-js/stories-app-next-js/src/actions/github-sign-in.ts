'use server';

import * as auth from '@/lib/auth';

export async function githubSignIn() {
  return auth.signIn('github');
}
