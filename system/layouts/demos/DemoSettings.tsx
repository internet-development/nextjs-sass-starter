import styles from '@system/layouts/demos/DemoSettings.module.scss';

import ActionItem from '@system/documents/ActionItem';
import MonospacePreview from '@system/MonospacePreview';

import * as React from 'react';

import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';

export default function DemoSettings(props) {
  if (!props.viewer) {
    return (
      <div className={styles.row}>
        <div className={styles.column}>
          <FormHeading style={{ marginTop: 48 }}>You are not signed in</FormHeading>
          <FormParagraph>
            To access this page, you will need to authenticate on the authentication page. Afterwards you will need to assign a Cookie to your browser and revisit this page
            afterwards.
          </FormParagraph>

          <div style={{ marginTop: 48 }}>
            <ActionItem icon={`⭢`} href={`/examples/authentication`} style={{ marginTop: 16 }}>
              Authenticate
            </ActionItem>
          </div>
        </div>
      </div>
    );
  }

  if (props.active === 'PERSONAL') {
    return (
      <>
        <div className={styles.row}>
          <div className={styles.column}>
            <FormHeading style={{ marginTop: 48 }}>Your settings</FormHeading>
            <FormParagraph>Below is an example of a CURL command to update your user settings.</FormParagraph>
            <FormParagraph>
              Additionally, you have the option to replace your custom avatar with any desired URL, provided you are familiar with executing this type of request.
            </FormParagraph>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <MonospacePreview style={{ opacity: 1, marginTop: 24 }} title="CURL - /api/users/update">{`curl -X PUT "http://api.internet.dev/api/users/update" \\
  -H "Content-Type: application/json" \\
  -H "X-API-KEY: ${props.sessionKey}" \\
  -d '{"id": "${props.viewer.id}", "updates": {"name": "YOUR_NAME"}}'`}</MonospacePreview>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <FormSubHeading style={{ marginTop: 48 }}>Preview</FormSubHeading>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <MonospacePreview style={{ opacity: 1, marginTop: 24 }} title="Viewer">
              {JSON.stringify(props.viewer, null, 2)}
            </MonospacePreview>
            <div style={{ marginTop: 24 }}>
              <ActionItem icon={`✳`} href={`/examples/settings`} style={{ marginTop: 16 }}>
                Refresh this page
              </ActionItem>
            </div>
          </div>
        </div>
      </>
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
