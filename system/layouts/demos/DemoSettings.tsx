import styles from '@system/layouts/demos/DemoSettings.module.scss';

import * as React from 'react';

import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';

export default function DemoSettings(props) {
  if (props.active === 'PERSONAL') {
    return (
      <div className={styles.root}>
        <FormHeading>Your settings</FormHeading>
        <FormParagraph>Change any of your personal settings here.</FormParagraph>
      </div>
    );
  }

  if (props.active === 'DOCUMENTS') {
    return (
      <div className={styles.root}>
        <FormHeading>Documents</FormHeading>
        <FormParagraph>All of the documents that have been created from your account.</FormParagraph>
      </div>
    );
  }

  if (props.active === 'CONTENT') {
    return (
      <div className={styles.root}>
        <FormHeading>Content</FormHeading>
        <FormParagraph>All of the content that has been created from your account.</FormParagraph>
      </div>
    );
  }

  if (props.active === 'CREDITS') {
    return (
      <div className={styles.root}>
        <FormHeading>Credits</FormHeading>
        <FormParagraph>All of the credits you have received in your account.</FormParagraph>
      </div>
    );
  }

  if (props.active === 'PURCHASE') {
    return (
      <div className={styles.root}>
        <FormHeading>Purchase</FormHeading>
        <FormParagraph>All of the services you have purchased.</FormParagraph>
      </div>
    );
  }

  if (props.active === 'END') {
    return (
      <div className={styles.root}>
        <FormHeading>End services</FormHeading>
        <FormParagraph>All of the services you can cancel and end monthly payments to.</FormParagraph>
      </div>
    );
  }

  if (props.active === 'DELETE') {
    return (
      <div className={styles.root}>
        <FormHeading>Delete your account</FormHeading>
        <FormParagraph>Delete your account and remove all of your content and cancel all of your payments and services.</FormParagraph>
      </div>
    );
  }

  return <div className={styles.root} />;
}
