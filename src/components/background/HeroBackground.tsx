import Image from "next/image";
import styles from "./HeroBackground.module.scss";

const HeroBackground = () => {
  return (
    <div className={styles.heroBackground}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>
    </div>
  );
};

export default HeroBackground;