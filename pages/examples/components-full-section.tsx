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
import SectionFullHeight from '@system/sections/SectionFullHeight';

import { H1, H1Sub } from '@system/typography';

function ExampleFullLanding(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);

  return (
    <Page
      title="nextjs-sass-starter: Components: Full section"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components-full-section"
    >
      <Navigation
        isModalVisible={!!currentModal}
        onHandleThemeChange={Utilities.onHandleThemeChange}
        onHandleHideSubNavigation={() => setModal(null)}
        onHandleShowSubNavigation={() => setModal({ name: 'NAVIGATION', parentId: 'site-navigation-button' })}
      />
      <SectionFullHeight>
        <Content>
          <H1>nextjs-sass-starter</H1>
          <H1Sub>
            A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites. <br />
            <br />
            This example tests a navigation, theming, mobile responsiveness, a SEO pixel, and full browser height sections.
          </H1Sub>
        </Content>
      </SectionFullHeight>
      <SectionFullHeight>
        <DemoBentoLayout />
      </SectionFullHeight>
      <SectionFullHeight>
        <DemoSimpleGrid />
      </SectionFullHeight>
      <SectionFullHeight>
        <DemoPricing />
      </SectionFullHeight>
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

export default ExampleFullLanding;
