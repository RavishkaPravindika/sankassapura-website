import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs/AboutUs";
import OurService from "@/components/OurService/OurService";
import styles from "./page.module.scss";
import SocialLinks from "@/components/SocialLinks/SocialLinks";

export default function Home() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heroWrapper}>
          <Hero />
        </div>
      </div>
      <AboutUs />
      <OurService />
      <SocialLinks />
    </>
  );
}