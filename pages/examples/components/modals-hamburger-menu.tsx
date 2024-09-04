import * as React from 'react';

import Button from '@system/Button';
import Content from '@system/layouts/Content';
import Footer from '@system/Footer';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import SectionFullHeight from '@system/sections/SectionFullHeight';

import { useModal } from '@system/providers/ModalContextProvider';

function ExampleModalsWebsitePrompt(props) {
  const { showModal } = useModal();

  return (
    <Page
      title="wireframes.internet.dev ➝ components ➝ modals hamburger menu"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/modals-hamburger-menu"
    >
      <Navigation />
      <SectionFullHeight>
        <Content>
          <Button
            onClick={() => {
              showModal({
                name: 'HAMBURGER_MENU',
                data: [],
              });
            }}
          >
            Show hamburger
          </Button>
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
