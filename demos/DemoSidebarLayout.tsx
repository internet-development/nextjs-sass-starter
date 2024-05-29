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
        <figure className={styles.square} style={squareStyle}></figure>
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

export default function DemoSidebarLayout(props) {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <Item>Topic I</Item>
        <SubItem>
          <SubText>Unit I</SubText>
        </SubItem>
        <SubItem>
          <SubText>Unit II</SubText>
        </SubItem>
        <Item active>Topic II</Item>
        <Item>Topic III</Item>
        <SubItem>
          <SubText>Unit I</SubText>
        </SubItem>
        <Item>Topic IV</Item>
        <Item>Topic V</Item>
        <SubItem>
          <SubText>Unit I</SubText>
        </SubItem>
        <SubItem>
          <SubText>Unit II</SubText>
        </SubItem>
        <SubItem>
          <SubText>Unit III</SubText>
        </SubItem>
        <SubItem>
          <SubText>Unit IV</SubText>
        </SubItem>
        <SubItem>
          <SubText>Unit V</SubText>
        </SubItem>
        <SubItem>
          <SubText>Unit VI</SubText>
        </SubItem>
        <Item>Topic VI</Item>
        <Item>Topic VII</Item>
        <Item>Topic VIII</Item>
        <SubItem>
          <SubText>Unit I</SubText>
        </SubItem>
        <SubItem>
          <SubText>Unit II</SubText>
        </SubItem>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <figure className={styles.largeSquare} />
        </div>
        <div className={styles.bottomRight}>
          <SubTitle>User or group</SubTitle>
          <SubText style={{ marginTop: 4 }}>Clear description</SubText>
        </div>
        <div className={styles.left}>
          <figure className={styles.square} style={{ marginRight: 8, marginLeft: 8 }} />
        </div>
      </div>
    </div>
  );
}
