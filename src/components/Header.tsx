'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About us' },
    { href: '/contact', label: 'contact us' },
    { href: '/service', label: 'service' },
    { href: '/menu', label: 'menu' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/"><Image
                    src="/images/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                  /></Link>
        </div>
        <nav className={styles.nav}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            // Conditionally apply the 'active' class
            const linkClassName = isActive
              ? `${styles.navLink} ${styles.active}`
              : styles.navLink;

            return (
              <Link key={link.href} href={link.href} className={linkClassName}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;