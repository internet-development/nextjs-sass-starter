import React, { useState } from 'react';

import * as Utilities from '@common/utilities';

import Content from '@system/layouts/Content';
import Footer from '@system/Footer';
import GlobalModalManager, { ModalActions } from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import SectionFullHeight from '@system/sections/SectionFullHeight';

import { H1, Lead } from '@system/typography';

function ExampleModals(props) {
  return (
    <Page
      title="nextjs-sass-starter: Modals"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components-modals"
    >
      <Navigation />
      <SectionFullHeight>
        <Content>
          <H1>[WIP]</H1>
        </Content>
      </SectionFullHeight>
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleModals;
