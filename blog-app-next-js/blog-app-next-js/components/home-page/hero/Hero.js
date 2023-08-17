import Image from 'next/image';

import classes from './Hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/alin.jpeg"
          alt="An image showing Alin"
          priority
          width={350}
          height={350}
        />
      </div>
      <h1>Hi, I&apos;m Alin</h1>
      <p>My blog about web development - especially frondend frameworks Like React.</p>
    </section>
  );
}

export default Hero;
