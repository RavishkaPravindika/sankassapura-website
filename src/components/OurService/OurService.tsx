import Image from 'next/image';
import styles from './OurService.module.scss';

const OurService = () => {
  return (
    <section className={styles.ourServiceSection}>
      <div className={styles.ourServiceContainer}>
        <div className={styles.ourServiceImageWrapper}>
          <Image
            src="/images/our-service.png"
            alt="Sankassapura Mansion"
            fill
            className={styles.ourServiceImage}
          />
        </div>
        <div className={styles.ourServiceTextWrapper}>
          <h2 className={styles.ourServiceTitle}>Our Service</h2>
          <p className={styles.ourServiceParagraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </p>
          <p className={styles.ourServiceParagraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </p>
          <button className={styles.button}>
            Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurService;