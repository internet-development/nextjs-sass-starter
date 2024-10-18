import styles from '@demos/DemoSearchComponentTwo.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import Audio from '@system/svg/Audio';
import ActionItem from '@system/documents/ActionItem';
import Focus from '@system/svg/Focus';
import Plus from '@system/svg/Plus';
import Globe from '@system/svg/Globe';
import Search from '@system/svg/Search';

export default function DemoSearchComponentOne(props) {
  return (
    <div className={styles.root}>
      <div className={styles.layout}>
        <div className={styles.containerGradient}>xxxx</div>
        <div className={styles.container}>
          <div className={styles.containerInput}>
            <input className={styles.input} placeholder="Ask the web anything" />
            <span className={styles.absoluteButton}>
              <span className={styles.transparentRoundButton}>
                <Audio height="24px" />
              </span>

              <span
                className={styles.roundButton}
                onClick={() => {
                  Utilities.onHandleThemeChange();
                }}
              >
                <Search height="24px" />
              </span>
            </span>
          </div>
        </div>
        <div className={styles.footer}>
          <ul className={styles.actions}>
            <li className={styles.item}>
              <span className={styles.icon}>
                <Plus height="14px" />
              </span>
              <span className={styles.words}>Attach</span>
            </li>
            <li className={styles.item}>
              <span className={styles.icon}>
                <Focus height="16px" />
              </span>
              <span className={styles.words}>Focus on web</span>
            </li>
            <li className={styles.item}>
              <span className={styles.icon}>
                <Globe height="16px" />
              </span>
              <span className={styles.words}>Discover</span>
            </li>
          </ul>
          <ul className={styles.history}>
            <li className={styles.record}>
              Yesterday, you searched for{' '}
              <a href="#" className={styles.link}>
                “What is the perfect dog food?”
              </a>{' '}
              We found{' '}
              <a href="#" className={styles.link}>
                4,288 relevant results
              </a>
              , and today we’ve discovered{' '}
              <a href="#" className={styles.link}>
                24 more
              </a>
              . We have a question for you,{' '}
              <a href="#" className={styles.link}>
                what kind of dog do you have?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
