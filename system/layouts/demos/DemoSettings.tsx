import styles from '@system/layouts/demos/DemoSettings.module.scss';

import * as React from 'react';
import * as Queries from '@common/queries';
import * as Utilities from '@common/utilities';

import ActionItem from '@system/documents/ActionItem';
import Button from '@system/Button';
import FormUpload from '@system/FormUpload';
import MonospacePreview from '@system/MonospacePreview';
import Table from '@system/Table';

import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';

export default function DemoSettings(props) {
  const [selected, setSelected] = React.useState<any[]>([]);
  const [uploading, setUploading] = React.useState<boolean>(false);

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
            <ActionItem icon={`⭢`} href={`/examples/authentication-google`} style={{ marginTop: 16 }}>
              Authenticate with Google
            </ActionItem>
            <ActionItem icon={`⭢`} href={`/examples/authentication`}>
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
            <div style={{ marginTop: 24, paddingBottom: 88 }}>
              <ActionItem icon={`⊹`} href={`/examples/settings`} style={{ marginTop: 16 }}>
                Refresh this page
              </ActionItem>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (props.active === 'DOCUMENTS') {
    const structuredData =
      props.data && props.data.length
        ? props.data.map((each) => {
            let link = '#';
            if (each.data.type === 'INVOICE') link = `/examples/invoices/${each.id}`;
            if (each.data.type === 'STATEMENT_OF_WORK') link = `/examples/statement-of-work/${each.id}`;

            return {
              id: each.id,
              data: [
                each.data.type,
                Utilities.toDateISOString(each.updated_at),
                <a href={link} target="_blank">
                  {link}
                </a>,
              ],
            };
          })
        : [];

    return (
      <>
        <div className={styles.row}>
          <div className={styles.column}>
            <FormHeading style={{ marginTop: 48 }}>Documents</FormHeading>
            <FormParagraph>All of the documents that have been created from your account.</FormParagraph>
          </div>
        </div>
        <div className={styles.root}>
          <Table data={structuredData} headings={['Type', 'Updated date', 'URL']} />
        </div>
        <div className={styles.row} style={{ paddingBottom: 88 }}>
          <div className={styles.column}>
            <ActionItem icon={`⭢`} href={`/examples/invoices`}>
              Manage and edit your invoices
            </ActionItem>
            <ActionItem icon={`⭢`} href={`/examples/statement-of-work`}>
              Manage and edit your Statement of Works
            </ActionItem>
          </div>
        </div>
      </>
    );
  }

  if (props.active === 'CONTENT') {
    const structuredData =
      props.data && props.data.length
        ? props.data.map((each) => {
            return {
              id: each.id,
              data: [
                each.type,
                Utilities.toDateISOString(each.created_at),
                <a href={each.src} target="_blank">
                  {each.src}
                </a>,
              ],
            };
          })
        : [];

    return (
      <>
        <div className={styles.row}>
          <div className={styles.column}>
            <FormHeading style={{ marginTop: 48 }}>Mood content</FormHeading>
            <FormParagraph>Upload mood board content for your organization The data is available public and can be queried for by organization Id.</FormParagraph>
          </div>
        </div>
        <div className={styles.root}>
          <Table
            data={structuredData}
            headings={['Type', 'Created date', 'Source']}
            isInteractive
            onChange={(each) => {
              Object.keys(each).forEach((id) => {
                if (!selected.includes(id)) {
                  setSelected([...selected, id]);
                  return;
                }

                setSelected(selected.filter((each) => each !== id));
              });
            }}
            value={selected}
          />
        </div>
        <div className={styles.row} style={{ paddingBottom: 88 }}>
          <div className={styles.column}>
            <FormUpload
              isActionItem
              loading={uploading}
              onSetFile={async (file) => {
                setUploading(true);
                const response = await Queries.userUploadData({ file, key: props.sessionKey });
                if (!response) {
                  setUploading(false);
                  props.onSetModal({ name: 'ERROR', message: 'failed to upload file' });
                  return;
                }

                if (response.error) {
                  props.onSetModal({ name: 'ERROR', message: response.error });
                  setUploading(false);
                  return;
                }

                const save = await Queries.userCreatePost({ id: response.id, src: response.fileURL, key: props.sessionKey, type: 'MOOD' });
                if (!save) {
                  props.onSetModal({ name: 'ERROR', message: 'failed to save post' });
                  setUploading(false);
                  return;
                }

                if (save.error) {
                  props.onSetModal({ name: 'ERROR', message: save.error });
                  setUploading(false);
                  return;
                }

                window.location.reload();
              }}
            >
              Upload mood board for your organization
            </FormUpload>
            {selected && selected.length ? (
              <ActionItem
                icon={`⊹`}
                onClick={async () => {
                  for (const targetId of selected) {
                    const response = await Queries.userDeletePost({ id: targetId, key: props.sessionKey });
                    if (!response) {
                      props.onSetModal({ name: 'ERROR', message: 'failed to delete post' });
                      // TODO(jimmylee):
                      // Very lazy.
                      window.location.reload();
                      return;
                    }

                    if (response.error) {
                      props.onSetModal({ name: 'ERROR', message: response.error });
                      // TODO(jimmylee):
                      // Very lazy.
                      window.location.reload();
                      return;
                    }
                  }

                  window.location.reload();
                }}
              >
                Delete selected posts
              </ActionItem>
            ) : null}
          </div>
        </div>
      </>
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

  if (props.active === 'END') {
    if (props.viewer && props.viewer.level < 20) {
      return (
        <div className={styles.row}>
          <div className={styles.column}>
            <FormHeading style={{ marginTop: 48 }}>You do not have any paid services</FormHeading>
            <FormParagraph>You are not paying for anything on api.internet.dev right now. So there is nothing to cancel.</FormParagraph>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.row}>
        <div className={styles.column}>
          <FormHeading style={{ marginTop: 48 }}>End services</FormHeading>
          <FormParagraph>
            By clicking the button below, you can end all of your subscriptions to our services. If you have office space with us and you're brave enough to use this template to
            end your services, you will have to upgrade again to get a desk and you might lose your desk.
          </FormParagraph>
          <Button
            onClick={async () => {
              const confirm = window.confirm('Are you sure?');
              if (!confirm) {
                return;
              }

              await Queries.userUnsubscribeServices({ key: props.sessionKey });
              window.location.reload();
            }}
            style={{ marginTop: 24 }}
          >
            End services
          </Button>
        </div>
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
