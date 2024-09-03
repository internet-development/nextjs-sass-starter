'use client';

import styles from '@system/HamburgerMenu.module.scss';

import * as React from 'react';

import { H4 } from '@system/typography';
import { usePathname } from 'next/navigation';

import Link from 'next/link';

export default function HamburgerMenu(props) {
  const [menuActive, setMenuActive] = React.useState(false);
  const [delayedBackground, setDelayedBackground] = React.useState(false);

  const hamburgerRef = React.useRef<HTMLDivElement>(null);
  const navMenuRef = React.useRef<HTMLDivElement>(null);

  const mobileMenuOnClickHandler = () => {
    if (hamburgerRef.current) {
      hamburgerRef.current.classList.toggle(styles.active);
    }
    if (!menuActive) {
      setDelayedBackground(true);
      setMenuActive(true);
    } else {
      setMenuActive(false);
      setTimeout(() => {
        setDelayedBackground(false);
      }, 3000);
    }
  };

  React.useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuActive]);

  const navbarStyle = {
    backgroundColor: menuActive || delayedBackground ? 'var(--theme-background)' : '',
  };

  return (
    <div className={styles.body}>
      <div className={styles.hamburgerContainer}>
        <div ref={hamburgerRef} className={styles.hamburger} onClick={mobileMenuOnClickHandler}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>

      <nav ref={navMenuRef} className={`${styles.navbar} ${menuActive ? styles.active : ''}`} style={navbarStyle}>
        {props?.navContent?.map((item, index) => (
          <ul key={index} className={styles.navItem}>
            <Link href={item.link} style={{ textDecoration: 'none', color: 'currentColor' }}>
              <li className={styles.navItemText}>
                <H4>{item.name}</H4>
                {/* TODO (@xBalbinus): Add animation on selecting a page */}
              </li>
            </Link>
          </ul>
        ))}
      </nav>
    </div>
  );
}
