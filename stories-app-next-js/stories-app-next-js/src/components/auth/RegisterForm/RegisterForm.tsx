'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

import Link from 'next/link';

import * as actions from '@/actions';

import styles from './RegisterFormStyle.module.css';

const RegisterForm = () => {
  const [state, action] = useFormState(actions.credentialsRegister, {
    error: '',
    success: false,
  });

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push('/login');
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={action}>
      <h2>Register Form</h2>
      <input type="text" placeholder="User Name" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input type="password" placeholder="Confirm Password" name="passwordRepeat" />
      <button>Register</button>
      {state?.error && <p className={styles.alert}>{state.error}</p>}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
