import React, { useState } from 'react';

import * as Utilities from '@common/utilities';

import DemoPost from '@system/layouts/demos/DemoPost';
import Footer from '@system/Footer';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';

import { H1, H2, H3, P } from '@system/typography';

function ExamplePost(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);

  return (
    <Page
      title="nextjs-sass-starter: Post"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/post"
    >
      <Navigation
        isModalVisible={!!currentModal}
        onHandleThemeChange={Utilities.onHandleThemeChange}
        onHandleHideSubNavigation={() => setModal(null)}
        onHandleShowSubNavigation={() => setModal({ name: 'NAVIGATION', parentId: 'site-navigation-button' })}
      />
      <DemoPost />
      <Footer />
      <GlobalModalManager currentModal={currentModal} onHandleThemeChange={Utilities.onHandleThemeChange} onSetModal={setModal} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExamplePost;
