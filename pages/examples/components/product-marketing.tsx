import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import Cookies from '@modules/cookies';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import IsometricGridLayout from '@system/layouts/IsometricGridLayout';
import IsometricProductBox from '@system/IsometricProductBox';
import Navigation from '@system/Navigation';
import Page from '@components/Page';

function ExampleComponentsProductMarketing(props) {
  return (
    <Page
      title="wireframes.internet.dev ➝ components ➝ product marketing"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/product-marketing"
    >
      <Navigation />
      <IsometricGridLayout style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <IsometricProductBox x={-124} y={222} />
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

export default ExampleComponentsProductMarketing;
