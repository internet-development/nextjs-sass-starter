import * as React from 'react';

import Button from '@system/Button';
import Content from '@system/layouts/Content';
import Footer from '@system/Footer';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import SectionFullHeight from '@system/sections/SectionFullHeight';

import { H1, Lead } from '@system/typography';
import { useModal } from '@system/providers/ModalContextProvider';

function ExampleModals(props) {
  const { showModal } = useModal();

  return (
    <Page
      title="nextjs-sass-starter: Modals"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components-modals"
    >
      <Navigation />
      <SectionFullHeight>
        <Content>
          <Button
            onClick={() => {
              showModal({
                name: 'INDEX',
                data: [
                  { page: 1, name: 'Energy', data: [] },
                  {
                    page: 12,
                    name: 'Food supply',
                    data: [
                      { page: 14, name: 'Agriculture' },
                      { page: 24, name: 'Aquaculture' },
                    ],
                  },
                  { page: 42, name: 'Population', data: [] },
                  { page: 50, name: 'Fresh water supply', data: [] },
                  { page: 70, name: 'Forests and wood supply', data: [] },
                  { page: 82, name: 'Global engineering', data: [] },
                  { page: 140, name: 'Pollution', data: [] },
                  { page: 162, name: 'Biodiversity and extinction rates', data: [] },
                  {
                    page: 220,
                    name: 'Various menaces to human survival',
                    data: [
                      { page: 223, name: 'Very large asteroid collision' },
                      { page: 227, name: 'The Next Ice Age' },
                      { page: 232, name: 'Technological terrorism' },
                      { page: 237, name: 'Plate tectonics' },
                      { page: 245, name: 'Global warming' },
                      { page: 260, name: 'A super infectious disease' },
                    ],
                  },
                  {
                    page: 268,
                    name: 'The role of ideology',
                    data: [
                      { page: 275, name: 'Ideological Tribes in America' },
                      { page: 280, name: 'Ideological Vested Interests' },
                      { page: 285, name: 'Pessimism as an ideology' },
                      { page: 290, name: 'Egalitarianism' },
                      { page: 298, name: 'Environmentalist Ideology' },
                      { page: 305, name: 'Moralism' },
                    ],
                  },
                ],
              });
            }}
          >
            Show an index
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

export default ExampleModals;
