import * as actions from '@/actions';

import LoginForm from '@/components/auth/LoginForm/LoginForm';

import styles from './pageStyle.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={actions.githubSignIn}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <hr />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
