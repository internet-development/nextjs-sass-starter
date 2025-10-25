import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import ActionItem from '@system/documents/ActionItem';
import Cookies from '@modules/cookies';
import DemoSettings from '@demos/DemoSettings';
import DemoSettingsSidebar from '@demos/DemoSettingsSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import TwoColumnLayout from '@system/layouts/TwoColumnLayout';

import { P } from '@system/typography';

function ExampleSettings(props) {
  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [active, setActive] = React.useState<string>(props.active);

  return (
    <Page
      title="wireframes.internet.dev ➝ features ➝ settings"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/features/settings"
    >
      <KeyHeader onInputChange={setKey} value={key} viewer={props.viewer} />
      <TwoColumnLayout sidebar={<DemoSettingsSidebar active={active} onSetKey={setKey} viewer={props.viewer} />}>
        <DemoSettings active={active} sessionKey={key} viewer={props.viewer} />
      </TwoColumnLayout>
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  if (!Utilities.isEmpty(context.query.key)) {
    const decryptedKey = Server.decrypt(String(context.query.key));
    const { sessionKey, viewer } = await Server.tryKeyWithoutCookie(decryptedKey);
    return {
      props: { sessionKey, viewer, active: 'CHANGE_PASSWORD' },
    };
  }

  const { sessionKey, viewer } = await Server.setup(context);
  return {
    props: { sessionKey, viewer, active: 'PERSONAL' },
  };
}

export default ExampleSettings;
