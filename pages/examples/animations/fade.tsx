import * as React from 'react';

import BlockFade from '@root/system/animations/BlockFade';
import Button from '@root/system/Button';
import FadeManager, { FadeManagerConfig } from '@root/system/animations/FadeManager';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';

import { H1, H2, H3, H4, P } from '@root/system/typography';

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
      <div style={{ padding: '0px 24px 0px 24px', width: '100%', maxWidth: '576px', margin: '64px auto' }}>
        <FadeManager key={nonce} {...fadeConfig}>
          <BlockFade>
            <H1>Heading 1</H1>
          </BlockFade>
          <BlockFade>
            <br />
            <P>
              The solar system is situated in a region of the universe, every point of which has a common and constant temperature, determined by the rays of light and heat which
              proceed from the surrounding stars. This low temperature is a little below that of the polar regions of the earth.
            </P>
          </BlockFade>
          <P>
            <br />
          </P>
          <BlockFade>
            <H2>Heading 2</H2>
          </BlockFade>
          <BlockFade>
            <br />
            <P>
              The earth would have only the same temperature as the heavens, were it not for two causes... One is the internal heat... possessed at its formation... only dissipated
              through the surface; the other is the continued action of the solar rays... which produce at the surface, the diversities of climate.
            </P>
          </BlockFade>
          <P>
            <br />
          </P>
          <BlockFade>
            <H3>Heading 3</H3>
          </BlockFade>
          <BlockFade>
            <br />
            <P>
              Liquids are very poor conductors of heat; but they have, like aeriform media, the property of carrying it rapidly in certain directions. This is the same property
              which, combining with, combining with the centrifugal force, displaces and mingles all parts of the atmosphere... [and] ocean, and maintains in them, regular and
              immense currents.
            </P>
          </BlockFade>
          <P>
            <br />
          </P>
          <BlockFade>
            <H4>Heading 4</H4>
          </BlockFade>
          <BlockFade>
            <br />
            <P>
              The interposition of the air very much modifies the effects of the heat upon the surface of the globe. The solar rays traversing the atmospheric strata, which are
              condensed by their own weight [at decreasing altitudes], heat them very unequally; those which are rarest are likewise coldest, because they... absorb a smaller part
              of the rays. The heat of the sun... in the form of light, possesses the property of penetrating transparent solids or liquids, and loses this property... when by...
              terrestrial bodies, it is turned into heat radiating without light.
            </P>
          </BlockFade>
          <P>
            <br />
            <br />
          </P>
          <Button onClick={replay} style={{ marginRight: 8 }}>
            Replay Animation
          </Button>
          <Button onClick={cancel}>Cancel Animation</Button>
        </FadeManager>
      </div>
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleFade;
