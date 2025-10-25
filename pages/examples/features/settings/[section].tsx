import * as Queries from '@common/queries';
import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import Cookies from '@modules/cookies';
import DemoSettings from '@demos/DemoSettings';
import DemoSettingsSidebar from '@demos/DemoSettingsSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import KeyHeader from '@system/KeyHeader';
import ModalError from '@demos/modals/ModalError';
import Page from '@components/Page';
import TwoColumnLayout from '@system/layouts/TwoColumnLayout';

import { P } from '@system/typography';
import { useModals } from '@root/system/modals/ModalContext';

const SUB_SECTION_ROUTES = {
  'change-password': 'CHANGE_PASSWORD',
  documents: 'DOCUMENTS',
  content: 'CONTENT',
  credits: 'CREDITS',
  purchase: 'PURCHASE',
  'end-services': 'END',
  'delete-account': 'DELETE',
};

const SUB_SECTION_LINKS = {
  CHANGE_PASSWORD: 'Change password',
  DOCUMENTS: 'Documents',
  CONTENT: 'Content',
  CREDITS: 'Credits',
  PURCHASE: 'Purchase services',
  END: 'End services',
  DELETE: 'Delete accoount',
};

function ExampleSettings(props) {
  const modals = useModals();

  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [active, setActive] = React.useState<string>(props.active);

  const onError = (message: string) => {
    modals.open(ModalError, { message: message });
  };

  return (
    <Page
      title={`wireframes.internet.dev ➝ features ➝ settings ➝ ${props.title.toLowerCase()}`}
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url={`https://wireframes.internet.dev/examples/features/settings/${props.route}`}
    >
      <KeyHeader onInputChange={setKey} value={key} viewer={props.viewer} />
      <TwoColumnLayout sidebar={<DemoSettingsSidebar active={active} onSetKey={setKey} viewer={props.viewer} />}>
        <DemoSettings active={active} data={props.data} onError={onError} sessionKey={key} viewer={props.viewer} />
      </TwoColumnLayout>
      <GlobalModalManager />
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
      const domain = Utilities.getDomainFromEmailWithoutAnySubdomain(viewer?.email);
      const result = await Queries.onRefreshDocuments({ key: sessionKey, type: 'ALL', domain });
      if (result && result.data) {
        data = result.data;
      }
    } catch (e) {}
  }

  if (active === 'CONTENT' && viewer) {
    try {
      const result = await Queries.onRefreshPosts({ key: sessionKey, type: 'MOOD', user_id: viewer?.id });
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
