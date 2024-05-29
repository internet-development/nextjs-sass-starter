import styles from '@demos/DemoWebsitePrompt.module.scss';

import * as React from 'react';

import { H1, H2, H3, H4, Lead, SubLead, P, Title, Text, SubTitle, SubText, UnitLabel } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';

const Zip = (props) => {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" strokeWidth="1.5" fillRule="evenodd">
      <g transform="translate(.749 .748)">
        <path d="m10.5 14.9999903h1.892c.2496315-.0012647.4835353.1217487.6239458.3281522s.1689216.4691398.0760542.7008577l-2.181 5.443c-.0929679.2316036-.0644736.4942982.0759917.7005815.1404652.2062833.3744475.3290542.6240083.3274346h1.892" />
        <path d="m16.5 22.5v-7.5" />
        <path d="m19.5 22.5v-7.5" />
        <path d="m19.5 15.0000002h.751c1.2426407 0 2.2499999 1.0073593 2.2499999 2.25 0 1.2426406-1.0073592 2.25-2.2499999 2.25h-.75" />
        <path d="m7.5 22.5h-6c-.82842712 0-1.5-.6715727-1.5-1.5v-19.5c0-.82842697.67157288-1.5 1.5-1.5h10.628c.3978937 0 .7795565.15773692 1.061.43900015l5.871 5.872c.281385.28103472.4396499.6623093.44 1.06v4.62899985" />
        <path d="m19.5 7.50000015h-6c-.8284271 0-1.5-.67157287-1.5-1.5v-6" />
      </g>
    </svg>
  );
};

const Layers = (props) => {
  return (
    <svg {...props} viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" fillRule="evenodd">
      <path d="M22.917,6.2,12.708.922a1.543,1.543,0,0,0-1.416,0L1.083,6.2a.616.616,0,0,0,0,1.094l10.209,5.281a1.543,1.543,0,0,0,1.416,0L22.917,7.3a.616.616,0,0,0,0-1.094Z" />
      <path d="M5.1,9.375,1.083,11.453a.616.616,0,0,0,0,1.094l10.209,5.281a1.543,1.543,0,0,0,1.416,0l10.209-5.281a.616.616,0,0,0,0-1.094L18.9,9.375" />
      <path d="M5.1,14.625,1.083,16.7a.616.616,0,0,0,0,1.094l10.209,5.281a1.543,1.543,0,0,0,1.416,0L22.917,17.8a.616.616,0,0,0,0-1.094L18.9,14.625" />
    </svg>
  );
};

const Item = (props) => {
  let style = {};

  if (!props.active) {
    style = { opacity: 0.4 };
  }

  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <span className={styles.square} style={style}>
          <Layers height="16px" />
        </span>
      </div>
      <div className={styles.middle} style={style}>
        <SubTitle>{props.title}</SubTitle>
        <SubText style={{ marginTop: 2, paddingBottom: 0 }}>{props.children}</SubText>
      </div>
      <div className={styles.right} style={{ color: `var(--theme-border)` }}>
        <Zip height="16px" />
      </div>
    </div>
  );
};

export default function DemoWebsitePrompt(props) {
  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <span className={styles.largeLabel}>Wireframe Application Generator</span>
      </div>
      <input className={styles.input} defaultValue="An application that works like AirTable + Users." />
      <Item title="Variant A ➝ Essentials single user spreadsheet template">• Navigation • Footer • SpreadSheet</Item>
      <Item active title="Variant B ➝ Multiplayer spreadsheet template">
        • Navigation • Footer • SpreadSheet-B • WebSockets
      </Item>
      <Item title="Variant C ➝ Essentials single user spreadsheet with users">• Navigation • Footer • SpreadSheet • Settings • API</Item>
      <Item title="Variant D ➝ Multiplayer spreadsheet with threads and users">• Navigation • Footer • SpreadSheet-B • WebSockets • Settings • API</Item>
    </div>
  );
}
