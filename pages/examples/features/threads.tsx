import * as Queries from '@common/queries';
import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import ActionItem from '@system/documents/ActionItem';
import Cookies from 'js-cookie';
import DemoThreads from '@demos/DemoThreads';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import WideAppLayout from '@system/layouts/WideAppLayout';

import { FormHeading, FormParagraph } from '@system/typography/forms';
import { useModal } from '@system/providers/ModalContextProvider';

function ExampleEmptyApplicationTemplate(props) {
  const { showModal } = useModal();

  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [list, setList] = React.useState<Array<any>>(props.data);

  return (
    <Page
      title="wireframes.internet.dev ➝ features ➝ threads"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/features/threads"
    >
      <KeyHeader onInputChange={setKey} value={key} />
      <WideAppLayout>
        <FormHeading>Example Threads</FormHeading>
        <FormParagraph style={{ maxWidth: 568 }}>Here is an example of a thread based interface where anyone can reply to a thread.</FormParagraph>

        <div style={{ marginTop: 48, maxWidth: 568 }}>
          {!props.viewer ? (
            <ActionItem icon={`⭢`} href="/examples/features/authentication/google">
              Sign in with Google
            </ActionItem>
          ) : null}
          {!props.viewer ? (
            <ActionItem icon={`⭢`} href="/examples/features/authentication">
              Sign in
            </ActionItem>
          ) : null}
          <ActionItem icon={`⭠`} href="/">
            Return home
          </ActionItem>
          {props.viewer ? (
            <ActionItem
              icon={`⊹`}
              onClick={async () => {
                const plainText = window.prompt('The easiest way to do this without building the modal. Type what words you want to share.');

                if (Utilities.isEmpty(plainText)) {
                  showModal({
                    name: 'ERROR',
                    message: 'You must provide words.',
                  });
                  return;
                }

                const response = await Queries.onUserCreateThread({
                  key,
                  fields: {
                    thread: true,
                    parentId: null,
                    plainText,
                  },
                  src: null,
                  type: 'GENERAL',
                });
                if (!response) {
                  showModal({
                    name: 'ERROR',
                    message: 'Something went wrong with creating creating a thread',
                  });
                  return;
                }

                const listing = await Queries.onUserListThreads({ key: null, orderBy: { column: 'created_at', value: 'desc' } });

                if (!listing) {
                  showModal({
                    name: 'ERROR',
                    message: 'Something went wrong with listing threads',
                  });
                  return;
                }

                setList(listing.data);
              }}
            >
              Create thread
            </ActionItem>
          ) : null}
          <ActionItem
            icon={`⊹`}
            onClick={async () => {
              const listing = await Queries.onUserListThreads({ key: null, orderBy: { column: 'created_at', value: 'desc' } });

              if (!listing) {
                showModal({
                  name: 'ERROR',
                  message: 'Something went wrong with listing threads',
                });
                return;
              }

              if (!listing.data.length) {
                showModal({
                  name: 'ERROR',
                  message: 'There are no threads! Create one.',
                });
                return;
              }

              setList(listing.data);
            }}
          >
            Refresh
          </ActionItem>
        </div>

        <DemoThreads data={list} sessionKey={key} setModal={showModal} style={{ marginTop: 32 }} viewer={props.viewer} />
      </WideAppLayout>
      <GlobalModalManager viewer={props.viewer} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const { sessionKey, viewer } = await Server.setup(context);

  let data = null;
  try {
    const results = await Queries.onUserListThreads({ key: sessionKey, orderBy: { column: 'created_at', value: 'desc' } });
    if (results) {
      data = results.data;
    }
  } catch (e) {}

  return {
    props: { data, sessionKey, viewer },
  };
}

export default ExampleEmptyApplicationTemplate;
