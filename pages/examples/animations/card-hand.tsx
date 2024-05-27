import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import CardHandLayout from '@system/layouts/CardHandLayout';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import Page from '@components/Page';

function ExampleCardHand(props) {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const cards = [
    'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/6e27f28f-09a1-495c-a780-615afd3384ba.png',
    'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/8f06e0ca-61e6-4bde-a8fa-a1567bfa08f8.png',
    'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/7d9f2c9d-a564-46e3-b7b2-1c06333f606e.png',
    'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/b3b18644-0d98-48e1-994b-c225eaa75079.png',
    'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/1fb16012-f3ef-4696-8bf8-1959cf99e50b.png',
    'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/4eb385bf-7162-4ed7-9f5c-8eaec2727a4f.png',
    'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/eb260297-559c-4054-a797-ef5120b466cf.png',
    'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/3f1c1cf5-adad-4195-b739-b03377bae92b.png',
    'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/3377f385-aaaf-407f-866b-5dc7661dc3cb.png',
    'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/bf40f95b-4c41-4319-8c7c-373a93f50f87.png',
    'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/c52afc7b-9e30-4271-9bc5-b9f32d6253bc.png',
    'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/e86d1dd2-2ee5-4c2a-b0a9-ad975d22c56e.png',
    'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/91050c31-2113-4a2d-a97b-bca546bdbdf1.png',
  ];

  return (
    <Page
      title="wireframes.internet.dev ➝ animations ➝ CSS deck spread and flip"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/animations/card-hand"
    >
      <Navigation />
      <GridLayout
        onClick={() => {
          console.log('setState not firing?');
          setExpanded(expanded ? false : true);
        }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
      >
        <CardHandLayout cards={cards} expanded={expanded} onExpand={() => setExpanded(true)} />
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

export default ExampleCardHand;
