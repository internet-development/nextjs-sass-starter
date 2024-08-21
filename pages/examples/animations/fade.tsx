import * as React from 'react';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import FadeManager, { FadeManagerConfig } from '@root/system/animations/FadeManager';
import BlockFade from '@root/system/animations/BlockFade';
import { H1, H2, H3, H4, P, SubTitle } from '@root/system/typography';
import AppLayout from '@root/system/layouts/AppLayout';
import Button from '@root/system/Button';
import Input from '@root/system/Input';

function ExampleFade(props) {
  const [nonce, setNonce] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);

  const replay = () => {
    setDisabled(false);
    setNonce((prev) => prev + 1);
  };

  const cancel = () => {
    setDisabled(true);
    setNonce((prev) => prev + 1);
  };

  let fadeConfig: FadeManagerConfig = {};
  if (!disabled)
    fadeConfig = {
      delay: { initial: 0.25, interval: 0.2 },
      duration: 1.0,
      angle: Math.PI * 0.5,
      distance: 100,
    };

  return (
    <Page
      title="wireframes.internet.dev ➝ animations ➝ fade"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/animations/fade"
    >
      <Navigation />
      <div style={{ width: 648, margin: '64px auto' }}>
        <FadeManager key={nonce} {...fadeConfig}>
          <BlockFade>
            <H1>Placeholder Title</H1>
          </BlockFade>
          <BlockFade>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
              venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
            </P>
          </BlockFade>
          <P>
            <br />
          </P>
          <BlockFade>
            <H2>Subheading Example</H2>
          </BlockFade>
          <BlockFade>
            <P>
              Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis faucibus. Phasellus consectetur, orci sit amet ullamcorper imperdiet, turpis ligula facilisis urna,
              vel fringilla libero mauris in urna.
            </P>
          </BlockFade>
          <P>
            <br />
          </P>
          <BlockFade>
            <H3>Another Subheading</H3>
          </BlockFade>
          <BlockFade>
            <P>
              Integer in volutpat libero. Vivamus vehicula aliquet ligula, non aliquet justo maximus non. Phasellus nec mi id eros suscipit auctor. In ut purus et lectus faucibus
              ultricies sit amet non ex.
            </P>
          </BlockFade>
          <P>
            <br />
          </P>
          <BlockFade>
            <H4>Minor Heading</H4>
          </BlockFade>
          <BlockFade>
            <P>Quisque at sapien ut justo facilisis pharetra. Integer euismod nunc vel orci fermentum, id tincidunt neque condimentum. Suspendisse potenti.</P>
          </BlockFade>
          <P>
            <br />
          </P>
          <Button onClick={replay} style={{ marginRight: 8 }}>
            Replay Animation
          </Button>
          <Button onClick={cancel}>Cancel Animation</Button>
        </FadeManager>
      </div>
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
