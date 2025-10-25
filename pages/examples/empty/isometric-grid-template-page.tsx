import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import Cookies from '@modules/cookies';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import IsometricGridLayout from '@system/layouts/IsometricGridLayout';
import IsometricRect from '@system/IsometricRect';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';

function ExampleEmptyIsometricGridTemplate(props) {
  const [key, setKey] = React.useState<string>(props.sessionKey);

  return (
    <Page
      title="wireframes.internet.dev ➝ empty ➝ isometric grid template page"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/empty/isometric-grid-template-page"
    >
      <KeyHeader onInputChange={setKey} value={key} viewer={props.viewer} />
      <IsometricGridLayout style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <IsometricRect x={572} y={-102} size={800} src="https://wireframes.internet.dev/examples/components/post" />
        <IsometricRect x={-124} y={-102} size={800} src="https://wireframes.internet.dev/examples/components/table" />
      </IsometricGridLayout>
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

export default ExampleEmptyIsometricGridTemplate;
