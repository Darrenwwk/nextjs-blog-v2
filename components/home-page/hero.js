import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/brooke-cagle--uHVRvDr7pg-unsplash.jpg'
          alt='An image'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Darren</h1>
      <p>
        I am learning NextJS.
      </p>
    </section>
  );
}

export default Hero;
