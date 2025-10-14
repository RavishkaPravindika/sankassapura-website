import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        SANKASSAPURA <br />
        SRI SAMBUDDHARAJA <br />
        BUDDHIST MANSION
      </h1>
      <p className={styles.subtitle}>
        The teaching of the Buddha will last long in this world
      </p>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          contact
        </button>
        <button className={styles.button}>
          Gallery
        </button>
      </div>
    </div>
  );
};

export default Hero;