import styles from '@system/Footer.module.scss';

import * as React from 'react';

import Button from '@system/Button';
import Input from '@system/Input';

import { H4, P } from '@system/typography';

export default function Footer(props) {
  return (
    <footer className={styles.root} style={props.style}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.form}>
            <H4 style={{ marginBottom: 24 }}>Footer, Subscribe</H4>
            <P style={{ marginBottom: 24 }}>You can't actually subscribe to a newsletter yet but this is a nice looking placeholder.</P>
            <Input style={{ marginBottom: 24 }} placeholder="Provide an e-mail" />
            <Button style={{ minHeight: 48 }}>Coming soon</Button>
          </div>
        </div>
        <div className={styles.subColumn}>
          <div className={styles.subTitle}>Section I</div>
          <a href="#" className={styles.item}>
            Item I
          </a>
          <a href="#" className={styles.item}>
            Item II
          </a>
          <a href="#" className={styles.item}>
            Item III
          </a>
          <a href="#" className={styles.item}>
            Item IV
          </a>
        </div>
        <div className={styles.subColumn}>
          <div className={styles.subTitle}>Section II</div>
          <a href="#" className={styles.item}>
            Item I
          </a>
          <a href="#" className={styles.item}>
            Item II
          </a>
          <a href="#" className={styles.item}>
            Item III
          </a>
          <a href="#" className={styles.item}>
            Item IV
          </a>
        </div>
        <div className={styles.subColumn}>
          <div className={styles.subTitle}>Section III</div>
          <a href="#" className={styles.item}>
            Item I
          </a>
          <a href="#" className={styles.item}>
            Item II
          </a>
          <a href="#" className={styles.item}>
            Item III
          </a>
          <a href="#" className={styles.item}>
            Item IV
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <a href="#" className={styles.subItem} target="_blank">
            Privacy Policy
          </a>
          <a href="#" className={styles.subItem} target="_blank">
            Terms of Use
          </a>
          <span className={styles.copy}>No copyright. This is a template.</span>
        </div>
        <div className={styles.right}>
          <a href="https://bsky.app/profile/internetstudio.bsky.social" className={styles.subItem} target="_blank">
            Bluesky
          </a>
          <a href="https://x.com/internetxstudio" className={styles.subItem} target="_blank">
            X
          </a>
          <a href="https://github.com/internet-development/nextjs-sass-starter" className={styles.subItem} target="_blank">
            GitHub
          </a>
          <a href="https://read.cv/teams/intdev" className={styles.subItem} target="_blank">
            ReadCV
          </a>
          <a href="https://internet.dev" className={styles.subItem} target="_blank">
            INTDEV
          </a>
        </div>
      </div>
    </footer>
  );
}
