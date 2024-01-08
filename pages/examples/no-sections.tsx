import React, { useState } from 'react';

import Content from '@system/layouts/Content';
import DemoBentoLayout from 'system/layouts/demos/DemoBentoLayout';
import DemoPricing from 'system/layouts/demos/DemoPricing';
import DemoSimpleGrid from 'system/layouts/demos/DemoSimpleGrid';
import Footer from '@system/Footer';
import Modals from '@system/modals/Modals';
import ModalNavigation from '@system/modals/ModalNavigation';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import SectionHalfHeight from '@system/sections/SectionHalfHeight';

import { H1, H1Sub } from '@system/typography';

const onHandleThemeChange = () => {
  const body = document.body;

  if (body.classList.contains('theme-light')) {
    body.classList.replace('theme-light', 'theme-dark');
  } else {
    body.classList.replace('theme-dark', 'theme-light');
  }
};

function ExampleNoSections(props) {
  const [showModal, setModal] = React.useState(null);

  return (
    <Page
      title="nextjs-sass-starter: No section"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev"
    >
      <Navigation
        isModalVisible={!!showModal}
        onHandleThemeChange={() => onHandleThemeChange()}
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
      {showModal ? (
        <Modals>
          {showModal === 'MODAL_NAVIGATION' && (
            <ModalNavigation
              onHandleThemeChange={() => onHandleThemeChange()}
              onOutsideEvent={() => {
                setModal(null);
              }}
            />
          )}
        </Modals>
      ) : null}
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleNoSections;
