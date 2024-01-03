'use server';
import { signIn } from '@/lib/auth';

interface signInUserState {
  error: string;
  success: boolean;
}

export const credentialsSignIn = async (_: signInUserState, formData: FormData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });

    return { error: '', success: true };
  } catch (err) {
    console.log(
      '%c-> developmentConsole: credentialsSignIn | err ===> ',
      'color:#77dcfd',
      err
    );
    if (err instanceof Error) {
      if (err.message.includes('CredentialsSignin')) {
        return { error: 'Invalid username or password', success: false };
      } else {
        throw err;
      }
    } else {
      return {
        error: 'Something went wrong',
        success: false,
      };
    }
  }
};
