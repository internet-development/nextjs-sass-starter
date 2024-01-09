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
import SectionHalfHeight from '@system/sections/SectionHalfHeight';

import { H1, H1Sub } from '@system/typography';

function ExampleHalfLanding(props) {
  const [currentModal, setModal] = React.useState<string | null>(null);

  return (
    <Page
      title="nextjs-sass-starter: Half section"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/half-section"
    >
      <Navigation
        isModalVisible={!!currentModal}
        onHandleThemeChange={Utilities.onHandleThemeChange}
        onHandleHideSubNavigation={() => setModal(null)}
        onHandleShowSubNavigation={() => setModal('MODAL_NAVIGATION')}
      />
      <SectionHalfHeight>
        <Content>
          <H1>nextjs-sass-starter</H1>
          <H1Sub>
            A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites. <br />
            <br />
            This example tests a navigation, theming, mobile responsiveness, a SEO pixel, and half browser height sections so more content is above the fold.
          </H1Sub>
        </Content>
      </SectionHalfHeight>
      <SectionHalfHeight>
        <DemoBentoLayout />
      </SectionHalfHeight>
      <SectionHalfHeight>
        <DemoSimpleGrid />
      </SectionHalfHeight>
      <SectionHalfHeight>
        <DemoPricing />
      </SectionHalfHeight>
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

export default ExampleHalfLanding;
