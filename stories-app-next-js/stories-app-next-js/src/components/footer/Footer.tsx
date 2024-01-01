import styles from './FooterStyle.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Next JS</div>
      <div className={styles.text}>Next JS learning</div>
    </div>
  );
};

export default Footer;
