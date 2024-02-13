import * as React from 'react';
import * as Utilities from '@common/utilities';

import Button from '@system/Button';
import Cookies from 'js-cookie';
import FormUpload from '@system/FormUpload';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Input from '@system/Input';
import KeyHeader from '@system/KeyHeader';
import MonospacePreview from '@system/MonospacePreview';
import Page from '@components/Page';
import ThinAppLayout from '@system/layouts/ThinAppLayout';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';

import { P } from '@system/typography';
import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';

const MAX_SIZE_BYTES = 15728640;

async function onListData({ key }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/data', {
      method: 'GET',
      headers: { 'X-API-KEY': key, 'Content-Type': 'application/json' },
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (!result.data) {
    return null;
  }

  return result;
}

async function onDeleteData({ id, key }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/data/delete', {
      method: 'DELETE',
      headers: { 'X-API-KEY': key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (result.error) {
    return null;
  }

  return result;
}

async function onUploadData({ file, domain, key, setModal }) {
  let signedResult;
  const name = file.name;
  const type = file.type;
  const size = file.size;

  if (size > MAX_SIZE_BYTES) {
    setModal({ name: 'ERROR', message: 'File size exceeds 15mb limit' });
    return;
  }

  try {
    const signedResponse = await fetch(`https://api.internet.dev/api/data/generate-presigned-url`, {
      method: 'POST',
      headers: {
        'X-API-KEY': key,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, domain: domain, file: name, size }),
    });
    signedResult = await signedResponse.json();
  } catch (e) {
    return null;
  }

  if (!signedResult) {
    setModal({ name: 'ERROR', message: 'Failed to upload.' });
    return null;
  }

  if (signedResult.error) {
    setModal({ name: 'ERROR', message: signedResult.message });
    return null;
  }

  if (!signedResult.uploadURL) {
    setModal({ name: 'ERROR', message: 'Failed to upload your data.' });
    return null;
  }

  try {
    fetch(signedResult.uploadURL, {
      method: 'PUT',
      body: file,
    });
  } catch (e) {
    return null;
  }

  return signedResult;
}

function ExampleFiles(props) {
  const [currentError, setError] = React.useState<string | null>(null);
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);
  const [currentUser, setUser] = React.useState<Record<string, any> | null>(null);
  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [domain, setDomain] = React.useState<string>('internet.dev');
  const [files, setFiles] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [uploading, setUploading] = React.useState<boolean>(false);

  return (
    <Page
      title="api.internet.dev: Files"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/files"
    >
      <KeyHeader host={props.host} onInputChange={setKey} onHandleThemeChange={Utilities.onHandleThemeChange} value={key} />

      <ThinAppLayout>
        <ThinAppLayoutHeader
          token={key}
          onSignOut={() => {
            setKey('');
            Cookies.remove('sitekey');
          }}
        />
        <FormHeading style={{ marginTop: 64 }}>Files</FormHeading>
        <FormParagraph>Organize files you have uploaded using this template.</FormParagraph>
        <Button
          style={{ margin: `24px 0 0 0`, width: '100%' }}
          onClick={async () => {
            setLoading(true);
            const response = await onListData({ key });
            setLoading(false);

            if (!response) {
              setModal({
                name: 'ERROR',
                message: 'Something went wrong but we are too lazy to tell you.',
              });
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

                const response = await onDeleteData({ id: each.id, key });
                const list = await onListData({ key });
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

        <FormHeading style={{ marginTop: 64 }}>Upload</FormHeading>
        <FormParagraph>
          The following steps represent whether or not you have permissions to upload a file. To upload a file you need to be part of an organization and have been granted
          permissions.
        </FormParagraph>

        <InputLabel style={{ marginTop: 24 }}>Domain (optional)</InputLabel>
        <Input autoComplete="off" onChange={(e) => setDomain(e.target.value)} style={{ marginTop: 8 }} type="text" value={domain} />

        <FormUpload
          loading={uploading}
          onSetFile={async (file) => {
            setUploading(true);
            const response = await onUploadData({ file, domain, key, setModal });
            if (!response) {
              setUploading(false);
              return;
            }

            if (response.error) {
              setUploading(false);
              setModal({ name: 'ERROR', message: response.message });
              return;
            }

            const list = await onListData({ key });
            setUploading(false);

            if (!list) {
              return;
            }

            setFiles(list.data);
          }}
          style={{ marginTop: 24 }}
        />
      </ThinAppLayout>
      <GlobalModalManager currentModal={currentModal} setModal={setModal} onHandleThemeChange={Utilities.onHandleThemeChange} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  let viewer = null;
  let sessionKey = context.req.cookies['sitekey'] || null;

  try {
    const response = await fetch('https://api.internet.dev/api/users/viewer', {
      method: 'PUT',
      headers: { 'X-API-KEY': sessionKey, 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    if (result && result.viewer) {
      viewer = result.viewer;
    }
  } catch (e) {
    return null;
  }

  return {
    props: { sessionKey, viewer },
  };
}

export default ExampleFiles;
