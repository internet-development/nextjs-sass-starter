import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import Cookies from 'js-cookie';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import IsometricGridLayout from '@system/layouts/IsometricGridLayout';
import IsometricProductBox from '@system/IsometricProductBox';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';

function ExampleComponentsProductMarketing(props) {
  const [key, setKey] = React.useState<string>(props.sessionKey);

  return (
    <Page
      title="Wireframes: Components: Product marketing"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components-product-marketing"
    >
      <KeyHeader onInputChange={setKey} value={key} isHidden />
      <IsometricGridLayout style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <IsometricProductBox x={-124} y={222} />
      </IsometricGridLayout>
      <GlobalModalManager viewer={props.viewer} />
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
