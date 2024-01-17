import styles from '@components/clients/plvs/BlogList.module.scss';

import * as React from 'react';

import { H2, P } from '@components/clients/plvs/typography';

function Post(props) {
  return (
    <div className={styles.post}>
      <div className={styles.left}>
        <div className={styles.byline}>Thursday, January 11th, 2024 — 2:33 AM</div>

        <div className={styles.row}>
          <div className={styles.rowRight}>
            <div className={styles.rowName}>
              <strong>Leopold Kohr</strong>
            </div>
            <div className={styles.rowTitle}>EVP of Engineering, Really Fun Labs</div>
          </div>
        </div>
      </div>
      <div className={styles.middle}>
        <H2>What Is Appropriate in the Scheme of Things?</H2>
        <P>
          The idea of ‘appropriate’ implies the existence of limits. When something is inappropriate, it means it is either too large or too small, too advanced or too retarded,
          too slow or too fast, too rich or too poor. As the prince of advertisers, the late Howard Gossage, used to say when he defined poison as ‘too much’, so also we can say of
          the ‘inappropriate’ that it can be defined quite simply as ‘too much’ — too much in either direction. It is as inappropriate to be too virtuous as it is to be too
          depraved.
        </P>
      </div>
      <div className={styles.right}>
        <div className={styles.button}>READ</div>
      </div>
    </div>
  );
}

export default function BlogList(props) {
  return (
    <>
      <section className={styles.blog}>
        <header className={styles.header}>
          <div className={styles.title}>Blog</div>
          <div className={styles.corner}></div>
        </header>
      </section>
      <div className={styles.grid}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}
