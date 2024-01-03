import RegisterForm from '@/components/auth/RegisterForm/RegisterForm';

import styles from './pageStyle.module.css';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
