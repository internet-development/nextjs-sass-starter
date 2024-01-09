import React, { useState } from 'react';

import * as Utilities from '@common/utilities';

import Content from '@system/layouts/Content';
import DemoBentoLayout from 'system/layouts/demos/DemoBentoLayout';
import DemoPricing from 'system/layouts/demos/DemoPricing';
import DemoSimpleGrid from 'system/layouts/demos/DemoSimpleGrid';
import Footer from '@system/Footer';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';

import { H1, H1Sub } from '@system/typography';

function ExampleNoSections(props) {
  const [currentModal, setModal] = React.useState<string | null>(null);

  return (
    <Page
      title="nextjs-sass-starter: No sections"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/no-sections"
    >
      <Navigation
        isModalVisible={!!currentModal}
        onHandleThemeChange={Utilities.onHandleThemeChange}
        onHandleHideSubNavigation={() => setModal(null)}
        onHandleShowSubNavigation={() => setModal('MODAL_NAVIGATION')}
      />
      <Content>
        <H1>nextjs-sass-starter</H1>
        <H1Sub>
          A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites. <br />
          <br />
          This example tests a navigation, theming, mobile responsiveness, a SEO pixel, and half browser height sections so more content is above the fold.
        </H1Sub>
      </Content>
      <DemoBentoLayout />
      <DemoSimpleGrid />
      <DemoPricing />
      <Footer />
      <GlobalModalManager currentModal={currentModal} setModal={setModal} onHandleThemeChange={Utilities.onHandleThemeChange} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleNoSections;
