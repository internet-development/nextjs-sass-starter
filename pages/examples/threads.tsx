import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import Cookies from 'js-cookie';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import WideAppLayout from '@system/layouts/WideAppLayout';

import { P } from '@system/typography';
import { FormHeading, FormParagraph } from '@system/typography/forms';

function ExampleEmptyApplicationTemplate(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);
  const [key, setKey] = React.useState<string>(props.sessionKey);

  return (
    <Page
      title="api.internet.dev: Threads [WIP]"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/threads"
    >
      <KeyHeader
        isModalVisible={!!currentModal}
        onInputChange={setKey}
        onHandleHideSubNavigation={() => setModal(null)}
        onHandleShowSubNavigation={() => setModal({ name: 'NAVIGATION_TEMPLATE', parentId: 'site-navigation-button' })}
        value={key}
      />
      <WideAppLayout>
        <FormHeading>Example Threads (Interactive)</FormHeading>
        <FormParagraph style={{ maxWidth: 568 }}>Here is an example of a thread based interface where anyone can reply to a thread.</FormParagraph>
      </WideAppLayout>
      <GlobalModalManager
        currentModal={currentModal}
        onHandleThemeChange={Utilities.onHandleThemeChange}
        onSetModal={setModal}
        onSignOut={() => {
          const confirm = window.confirm('Are you sure you want to sign out?');
          if (!confirm) {
            return;
          }

          setKey('');
          Cookies.remove('sitekey');
          window.location.reload();
        }}
        viewer={props.viewer}
      />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const { sessionKey, viewer } = await Server.setup(context);

  return {
    props: { sessionKey, viewer },
  };
}

export default ExampleEmptyApplicationTemplate;
