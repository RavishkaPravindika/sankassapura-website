import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.active}>
          Home
        </Link>
        <Link href="/about">About us</Link>
        <Link href="/contact">contact us</Link>
        <Link href="/service">service</Link>
        <Link href="/menu">menu</Link>
      </nav>
    </header>
  );
};

export default Header;