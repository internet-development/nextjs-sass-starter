import styles from '@demos/DemoLevelsExample.module.scss';

import * as React from 'react';

import Edit from '@system/svg/Edit';

import { H1, H2, H3, H4, Lead, SubLead, P, Title, Text, SubTitle, SubText, UnitLabel } from '@system/typography';

const DownArrow = (props) => {
  return (
    <svg {...props} stroke="currentColor" strokeWidth="1px" viewBox="0 0 100 100">
      <path d="M50,0 L50,80" />
      <polygon points="45,80 55,80 50,90" fill="currentColor" />
    </svg>
  );
};

const Plus = (props) => {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
};

const Circle = (props) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (props.percentage / 100) * circumference;

  return (
    <svg className="circle" viewBox="0 0 100 100" style={props.style}>
      <circle cx="50" cy="50" r={radius} fill="none" stroke="var(--theme-border-subdued)" strokeWidth="8" />
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="var(--theme-primary)"
        strokeWidth="8"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90 50 50)"
      />
    </svg>
  );
};

const Item = (props) => {
  let computedStyles = { ...props.style };
  if (props.active) {
    computedStyles = { ...computedStyles, boxShadow: `0 0 0 4px var(--theme-input-active)` };
  }

  return (
    <div className={styles.item} style={computedStyles}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div
            className={styles.square}
            style={{ backgroundImage: `url('https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/1d6f4139-3d59-4c0c-94fa-c7f56ec3a275.png')` }}
          />
        </div>
        <div className={styles.right}>
          <Title style={{ padding: `7px 0px 0px 24px` }}>{props.name}</Title>
        </div>
        <div className={styles.end}>
          <Edit height="16px" style={{ padding: `12px 0px 0px 0px` }} />
        </div>
      </div>
      <MetaData completion={props.completion} />
    </div>
  );
};

const MetaData = ({ completion }) => {
  return (
    <div className={styles.details}>
      <div className={styles.meta}>
        <div className={styles.left}>
          <img
            alt=""
            className={styles.avatar}
            style={{ marginLeft: 16 }}
            src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/f8fc3d36-7707-4d20-86bf-5edc20460f9b.jpg"
          />
        </div>
        <div className={styles.right}>
          <SubText style={{ padding: `3px 8px 6px 10px` }}>
            Created by <strong>Elijah Seed Arita</strong>
          </SubText>
        </div>
      </div>
      <div className={styles.meta} style={{ borderTop: `1px solid var(--theme-border)` }}>
        <div className={styles.left}>
          <Circle percentage={completion} style={{ paddingLeft: 14, height: 28 }} />
        </div>
        <div className={styles.right}>
          <SubText style={{ padding: `3px 8px 6px 8px` }}>
            Only <strong>{completion}%</strong> of marbles reach the end.
          </SubText>
        </div>
      </div>
    </div>
  );
};

export default function DemoLevelsExample(props) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.row} style={{ marginTop: 92 }}>
          <span className={styles.button}>Marble start</span>
        </div>
        <div className={styles.row}>
          <DownArrow style={{ height: 64 }} />
        </div>
        <Item active completion={88} name="001 — World One" />
        <div className={styles.row}>
          <DownArrow style={{ height: 64 }} />
        </div>
        <Item completion={32.45} name="002 — Chaos Monkey" />
        <div className={styles.row}>
          <DownArrow style={{ height: 64 }} />
        </div>
        <Item completion={7.68} name="003 — Explosion World" />
        <div className={styles.row}>
          <DownArrow style={{ height: 64 }} />
        </div>
        <div className={styles.row}>
          <span className={styles.button}>
            <Plus height={16} style={{ marginRight: 8 }} />
            Add next world
          </span>
        </div>
      </div>
    </div>
  );
}
