import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import ScrollCarouselHorizontal from '@system/scroll/ScrollCarouselHorizontal';
import Page from '@components/Page';

function ExampleScrollCarouselHorizontal(props) {
  const [key, setKey] = React.useState<string>(props.sessionKey);

  const images = [
    'https://images.beta.cosmos.so/feac7fa7-1787-4d3b-a2ac-824ef3d95557?format=jpeg',
    'https://images.beta.cosmos.so/9095c30b-c140-4b29-89fa-b860c157e5dc?format=jpeg',
    'https://images.beta.cosmos.so/b85f80d6-9633-4629-ba3a-c8ef551d3129?format=jpeg',
    'https://images.beta.cosmos.so/0bf13b93-c49c-4e6d-9d1d-7e52c1609374?format=jpeg',
    'https://images.beta.cosmos.so/0ac16c00-0478-409a-88ea-2b46ec5e9791?format=jpeg',
    'https://images.beta.cosmos.so/b85f80d6-9633-4629-ba3a-c8ef551d3129?format=jpeg',
    'https://images.beta.cosmos.so/2320d609-477d-4025-bfde-4ec45de46ae9?format=jpeg',
    'https://images.beta.cosmos.so/5a1bdea3-5026-4e13-8a91-595a294b1b08?format=jpeg',
    'https://images.beta.cosmos.so/456ee0c7-4d1e-487d-be7a-d21a12486b82?format=jpeg',
    'https://images.beta.cosmos.so/3c6a6703-09c0-4d42-afcf-9dd20c38f4eb?format=jpeg',
  ];

  return (
    <Page
      title="wireframes.internet.dev ➝ animations ➝ scroll carousel horizontal"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/animations/scroll-carousel-horizontal"
    >
      <Navigation />
      <GridLayout style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ScrollCarouselHorizontal images={images} />
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

export default ExampleScrollCarouselHorizontal;
