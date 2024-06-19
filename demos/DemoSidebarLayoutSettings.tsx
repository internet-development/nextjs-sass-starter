import styles from '@demos/DemoSidebarLayout.module.scss';

import * as React from 'react';

import { H1, H2, H3, H4, Lead, SubLead, P, Title, Text, SubTitle, SubText, UnitLabel } from '@system/typography';

const Item = (props) => {
  let style = {};
  let squareStyle = {};
  if (props.active) {
    style = { opacity: 1 };
    squareStyle = { background: `var(--theme-border)` };
  }

  return (
    <li className={styles.item} style={style}>
      <span className={styles.left}>
        <figure className={styles.square} style={squareStyle}>
          ✦
        </figure>
      </span>
      <span className={styles.right}>{props.children}</span>
    </li>
  );
};

const SubItem = (props) => {
  let style = {};
  let squareStyle = {};
  if (props.active) {
    style = { opacity: 1 };
    squareStyle = { background: `var(--theme-border)` };
  }

  return (
    <li className={styles.subItem} style={style}>
      <span className={styles.left}>
        <figure className={styles.subSquare} style={squareStyle}></figure>
      </span>
      <span className={styles.right}>{props.children}</span>
    </li>
  );
};

export default function DemoSidebarLayoutSettings(props) {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <SubTitle style={{ opacity: 0.6, padding: '8px 24px 8px 24px' }}>SETTINGS</SubTitle>
        <Item>Privacy</Item>
      </div>
    </div>
  );
}
