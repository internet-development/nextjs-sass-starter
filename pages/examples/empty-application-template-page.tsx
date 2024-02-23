import * as React from 'react';
import * as Utilities from '@common/utilities';

import Cookies from 'js-cookie';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import ThinAppLayout from '@system/layouts/ThinAppLayout';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';

import { P } from '@system/typography';

function ExampleEmptyApplicationTemplate(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);
  const [key, setKey] = React.useState<string>(props.sessionKey);

  return (
    <Page
      title="api.internet.dev: Empty Application Template"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/empty-application-template-page"
    >
      <KeyHeader
        isModalVisible={!!currentModal}
        onInputChange={setKey}
        onHandleHideSubNavigation={() => setModal(null)}
        onHandleShowSubNavigation={() => setModal({ name: 'NAVIGATION_TEMPLATE', parentId: 'site-navigation-button' })}
        value={key}
      />
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
      </ThinAppLayout>
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
  let viewer = null;
  let sessionKey = context.req.cookies['sitekey'] || '';
  if (Utilities.isEmpty(sessionKey)) {
    return {
      props: { sessionKey: '', viewer: null },
    };
  }

  try {
    const response = await fetch('https://api.internet.dev/api/users/viewer', {
      method: 'PUT',
      headers: { 'X-API-KEY': sessionKey, 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    if (result && result.viewer) {
      viewer = result.viewer;
    }
  } catch (e) {}

  return {
    props: { sessionKey, viewer },
  };
}

export default ExampleEmptyApplicationTemplate;
