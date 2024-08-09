'use client';

import styles from '@components/SectionHeading.module.scss';

import * as React from 'react';

import Link from 'next/link';
import { classNames } from '@root/common/utilities';
import { usePathname } from 'next/navigation';

import PageGutterWrapper from '@components/PageGutterWrapper';

export default function SectionHeading(props) {
  const [menuActive, setMenuActive] = React.useState(false);
  const [scrolling, setScrolling] = React.useState(false);
  const [delayedBackground, setDelayedBackground] = React.useState(false);

  const pathname = usePathname();

  const hamburgerRef = React.useRef(null);
  const navMenuRef = React.useRef(null);

  const mobileMenuOnClickHandler = () => {
    if (hamburgerRef.current) {
      hamburgerRef.current.classList.toggle(styles.active);
    }
    if (navMenuRef.current) {
      navMenuRef.current.classList.toggle(styles.active);
    }
    if (!menuActive) {
      setDelayedBackground(true);
      setMenuActive(true);
    } else {
      setMenuActive(false);
      setTimeout(() => {
        setDelayedBackground(false);
      }, 3000); // Adjust the delay as needed
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        setScrolling(window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <PageGutterWrapper>
        <div className={styles.logoContainer}>
          <Link href="/" style={{ color: 'inherit' }}>
            Home
          </Link>

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
                  {item.name}
                </li>
              </Link>
            </ul>
          ))}
        </nav>
      </PageGutterWrapper>
    </div>
  );
}
