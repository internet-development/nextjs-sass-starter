import * as Constants from '@common/constants';
import * as Queries from '@common/queries';
import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import Button from '@system/Button';
import Cookies from '@modules/cookies';
import FormUpload from '@system/FormUpload';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Input from '@system/Input';
import KeyHeader from '@system/KeyHeader';
import ModalError from '@demos/modals/ModalError';
import MonospacePreview from '@system/MonospacePreview';
import Page from '@components/Page';
import ThinAppLayout from '@system/layouts/ThinAppLayout';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';

import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';
import { useModals } from '@root/system/modals/ModalContext';

function ExampleFilesS3(props) {
  const modals = useModals();

  const [currentUser, setUser] = React.useState<Record<string, any> | null>(null);
  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [domain, setDomain] = React.useState<string>('internet.dev');
  const [files, setFiles] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [uploading, setUploading] = React.useState<boolean>(false);

  const onError = (message: string) => {
    modals.open(ModalError, { message: message });
  };

  return (
    <Page
      title="wireframes.internet.dev ➝ features ➝ files S3"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/features/files-s3"
    >
      <KeyHeader onInputChange={setKey} value={key} viewer={currentUser} />

      <ThinAppLayout>
        <ThinAppLayoutHeader
          token={key}
          onSignOut={() => {
            const confirm = window.confirm('Are you sure you want to sign out?');
            if (!confirm) {
              return;
            }

            setKey('');
            Cookies.remove('sitekey');
            window.location.reload();
          }}
        />
        <FormHeading style={{ marginTop: 64 }}>Files</FormHeading>
        <FormParagraph>Organize files you have uploaded using this template.</FormParagraph>
        <Button
          style={{ margin: `24px 0 0 0`, width: '100%' }}
          onClick={async () => {
            setLoading(true);
            const response = await Queries.onUserListData({ key });
            setLoading(false);

            if (!response) {
              onError('Something went wrong but we are too lazy to tell you.');
              return;
            }

            setFiles(response.data);
          }}
        >
          List files
        </Button>
        {files.map((each: Record<string, any>) => {
          return (
            <MonospacePreview
              key={each.id}
              onDelete={async () => {
                const confirm = window.confirm(`Are you sure you want to delete ${each.data.src}? This action is irreversible.`);
                if (!confirm) {
                  return;
                }

                await Queries.onUserDeleteData({ id: each.id, key });
                const list = await Queries.onUserListData({ key });
                setUploading(false);

                if (!list) {
                  return;
                }

                setFiles(list.data);
              }}
              style={{ marginTop: 16 }}
              title={each.data.type}
            >
              {JSON.stringify(each, null, 2)}
            </MonospacePreview>
          );
        })}

        <FormHeading style={{ marginTop: 64 }}>Upload (AWS S3)</FormHeading>
        <FormParagraph>
          Uses Amazon S3 as the destination for your hosted object. The following steps represent whether or not you have permissions to upload a file. To upload a file you need to
          be part of an organization and have been granted permissions.
        </FormParagraph>

        <InputLabel style={{ marginTop: 24 }}>Domain (optional)</InputLabel>
        <Input autoComplete="off" onChange={(e) => setDomain(e.target.value)} style={{ marginTop: 8 }} type="text" value={domain} />

        <FormUpload
          loading={uploading}
          onSetFile={async (file) => {
            setUploading(true);
            const response = await Queries.onUserUploadDataS3({ domain, file, key });
            if (!response) {
              onError('Something went wrong');
              setUploading(false);
              return;
            }

            const list = await Queries.onUserListData({ key });
            setUploading(false);

            if (!list) {
              return;
            }

            setFiles(list.data);
          }}
          style={{ marginTop: 24 }}
        />
      </ThinAppLayout>
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const { sessionKey, viewer } = await Server.setup(context);

  return {
    props: { sessionKey, viewer },
  };
}

export default ExampleFilesS3;
