'use client';

import { useFormState } from 'react-dom';
import Link from 'next/link';

import * as actions from '@/actions';

import styles from './LoginFormStyle.module.css';

const LoginForm = () => {
  const [state, formAction] = useFormState(actions.credentialsSignIn, {
    error: '',
    success: false,
  });

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error && <p className={styles.alert}>{state.error}</p>}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
