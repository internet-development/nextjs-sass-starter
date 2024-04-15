import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import Cookies from 'js-cookie';
import DemoSettings from '@system/layouts/demos/DemoSettings';
import DemoSettingsSidebar from '@system/layouts/demos/DemoSettingsSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import TwoColumnLayout from '@system/layouts/TwoColumnLayout';

import { P } from '@system/typography';
import { useModal } from '@system/providers/ModalContextProvider';

const SUB_SECTION_ROUTES = {
  documents: 'DOCUMENTS',
  content: 'CONTENT',
  credits: 'CREDITS',
  purchase: 'PURCHASE',
  'end-services': 'END',
  'delete-account': 'DELETE',
};

const SUB_SECTION_LINKS = {
  DOCUMENTS: 'Documents',
  CONTENT: 'Content',
  CREDITS: 'Credits',
  PURCHASE: 'Purchase services',
  END: 'End services',
  DELETE: 'Delete accoount',
};

function ExampleSettings(props) {
  const { showModal } = useModal();

  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [active, setActive] = React.useState<string>(props.active);

  return (
    <Page
      title={`api.internet.dev: ${props.title}`}
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url={`https://wireframes.internet.dev/examples/settings/${props.route}`}
    >
      <KeyHeader onInputChange={setKey} value={key} />
      <TwoColumnLayout sidebar={<DemoSettingsSidebar active={active} onSetKey={setKey} viewer={props.viewer} />}>
        <DemoSettings active={active} data={props.data} onSetModal={showModal} sessionKey={key} viewer={props.viewer} />
      </TwoColumnLayout>
      <GlobalModalManager viewer={props.viewer} />
    </Page>
  );
}

// NOTE(jimmylee)
// This page is a little messy because of all the cases that will be covered.
// In the future it might be better to scope each case to its own static route.
export async function getServerSideProps(context) {
  let active = SUB_SECTION_ROUTES[context.params.section] || 'PERSONAL';
  let title = SUB_SECTION_LINKS[active];

  const { sessionKey, viewer } = await Server.setup(context);

  if (Utilities.isEmpty(sessionKey)) {
    return {
      props: { active, title, route: context.params.section, sessionKey: '', viewer: null },
    };
  }

  let data = null;
  if (active === 'DOCUMENTS') {
    try {
      const response = await fetch('https://api.internet.dev/api/documents', {
        method: 'POST',
        headers: { 'X-API-KEY': sessionKey, 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'ALL' }),
      });
      const result = await response.json();
      if (result && result.data) {
        data = result.data;
      }
    } catch (e) {}
  }

  if (active === 'CONTENT' && viewer) {
    try {
      const response = await fetch('https://api.internet.dev/api/posts', {
        method: 'POST',
        headers: { 'X-API-KEY': sessionKey, 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'MOOD', user_id: viewer?.id }),
      });
      const result = await response.json();
      if (result && result.data) {
        data = result.data;
      }
    } catch (e) {}
  }

  return {
    props: { active, data, title, route: context.params.section, sessionKey, viewer },
  };
}

export default ExampleSettings;
