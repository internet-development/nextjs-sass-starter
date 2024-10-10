import * as React from 'react';

import Button from '@system/Button';
import Content from '@system/layouts/Content';
import Footer from '@system/Footer';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import SectionFullHeight from '@system/sections/SectionFullHeight';
import ModalWebsitePrompt from '@demos/modals/ModalWebsitePrompt';

import { useModals } from '@root/system/modals/ModalContext';

function ExampleModalsWebsitePrompt(props) {
  const modals = useModals();

  return (
    <Page
      title="wireframes.internet.dev ➝ components ➝ modals website prompt"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/modals-website-prompt"
    >
      <Navigation />
      <SectionFullHeight>
        <Content>
          <Button onClick={() => modals.open(ModalWebsitePrompt)}>Show the website prompt modal</Button>
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

export default ExampleModalsWebsitePrompt;
