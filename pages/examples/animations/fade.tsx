import * as React from 'react';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import FadeManager from '@root/system/animations/FadeManager';
import Fade from '@root/system/animations/Fade';
import { H1, H2, H3, H4, P } from '@root/system/typography';
import AppLayout from '@root/system/layouts/AppLayout';

function ExampleFade(props) {
  return (
    <Page
      title="wireframes.internet.dev ➝ animations ➝ fade"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/animations/fade"
    >
      <Navigation />
      <AppLayout>
        <FadeManager delay={{ initial: 0.25, interval: 0.2 }} duration={1.0} angle={Math.PI * 0.5} distance={100}>
          <Fade>
            <H1>Placeholder Title</H1>
          </Fade>
          <Fade>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
              venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
            </P>
          </Fade>
          <P>
            <br />
          </P>
          <Fade>
            <H2>Subheading Example</H2>
          </Fade>
          <Fade>
            <P>
              Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis faucibus. Phasellus consectetur, orci sit amet ullamcorper imperdiet, turpis ligula facilisis urna,
              vel fringilla libero mauris in urna.
            </P>
          </Fade>
          <P>
            <br />
          </P>
          <Fade>
            <H3>Another Subheading</H3>
          </Fade>
          <Fade>
            <P>
              Integer in volutpat libero. Vivamus vehicula aliquet ligula, non aliquet justo maximus non. Phasellus nec mi id eros suscipit auctor. In ut purus et lectus faucibus
              ultricies sit amet non ex.
            </P>
          </Fade>
          <P>
            <br />
          </P>
          <Fade>
            <H4>Minor Heading</H4>
          </Fade>
          <Fade>
            <P>Quisque at sapien ut justo facilisis pharetra. Integer euismod nunc vel orci fermentum, id tincidunt neque condimentum. Suspendisse potenti.</P>
          </Fade>
        </FadeManager>
      </AppLayout>
      <GlobalModalManager viewer={props.viewer} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleFade;
