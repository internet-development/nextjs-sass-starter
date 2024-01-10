import React, { useState } from 'react';

import * as Utilities from '@common/utilities';

import Content from '@system/layouts/Content';
import Footer from '@system/Footer';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import SectionFullHeight from '@system/sections/SectionFullHeight';

import { H1, H1Sub } from '@system/typography';

function ExampleBase(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);

  return (
    <Page
      title="nextjs-sass-starter: Example"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples"
    >
      <Navigation
        isModalVisible={!!currentModal}
        onHandleThemeChange={Utilities.onHandleThemeChange}
        onHandleHideSubNavigation={() => setModal(null)}
        onHandleShowSubNavigation={() => setModal({ name: 'NAVIGATION' })}
      />
      <SectionFullHeight>
        <Content>
          <H1>nextjs-sass-starter</H1>
          <H1Sub>
            A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites. <br />
            <br />
            This example tests a navigation, theming, SEO pixel, and if scrollbars accidently render since we don't use overflow hacks.
          </H1Sub>
        </Content>
      </SectionFullHeight>
      <GlobalModalManager currentModal={currentModal} setModal={setModal} onHandleThemeChange={Utilities.onHandleThemeChange} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleBase;
