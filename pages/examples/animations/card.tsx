import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import FlippableTiltCard from '@system/FlippableTiltCard';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import Page from '@components/Page';

function ExampleFlippableTiltCard(props) {
  return (
    <Page
      title="wireframes.internet.dev ➝ animations ➝ flippable tilt card"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/animations/card"
    >
      <Navigation />
      <GridLayout style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <FlippableTiltCard
          backElement={
            <img
              alt="Apple and USA flag"
              style={{ borderRadius: 8 }}
              src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/d120209d-85f9-4276-a61b-bb24c495759b.png"
            />
          }
        >
          <img
            alt="Orange and USA flag"
            style={{ borderRadius: 8 }}
            src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/ffc51466-1ffa-4114-a31e-b12d741dfdcf.png"
          />
        </FlippableTiltCard>
      </GridLayout>
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

export default ExampleFlippableTiltCard;
