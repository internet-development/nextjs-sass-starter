import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import Cookies from 'js-cookie';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import ResizableMonospaceWindow from '@system/ResizableMonospaceWindow';

import { P } from '@system/typography';

function ExampleWindows(props) {
  const customParagraphStyle = { fontFamily: 'var(--font-family-serif)', fontSize: '16px', lineHeight: '1.5', margin: 24 };

  return (
    <Page
      title="api.internet.dev: Windows"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/windows"
    >
      <Navigation />
      <GridLayout style={{ overflow: 'hidden' }}>
        <ResizableMonospaceWindow x={76} y={76} width={248} height={280} title="Window I">
          <div style={customParagraphStyle}>
            The process of growth and development almost never seems to manage to create this subtle balance between the importance of the individual parts, and the coherence of
            the environment as a whole.
          </div>
        </ResizableMonospaceWindow>
        <ResizableMonospaceWindow x={356} y={76} width={248} height={280} title="Window II">
          <div style={customParagraphStyle}>
            In an organic environment, every place is unique, and the different places also cooperate, with no parts left over, to create a global whole - a whole which can be
            identified by everyone who is part of it.
          </div>
        </ResizableMonospaceWindow>
        <ResizableMonospaceWindow x={634} y={76} width={248} height={280} title="Window III">
          <div style={customParagraphStyle}>
            Making simulations of what you're going to build is tremendously useful if you can get feedback from them that will tell you where you've gone wrong and what you can do
            about it.
          </div>
        </ResizableMonospaceWindow>
        <ResizableMonospaceWindow x={76} y={394} width={248} height={280} title="Window IV">
          <div style={customParagraphStyle}>
            To work our way towards a shared language once again, we must first learn how to discover patterns which are deep, and capable of generating life.
          </div>
        </ResizableMonospaceWindow>
        <ResizableMonospaceWindow x={356} y={394} width={248} height={280} title="Window V">
          <div style={customParagraphStyle}>
            From a sequence of these individual patterns, whole buildings with the character of nature will form themselves within your thoughts, as easily as sentences.
          </div>
        </ResizableMonospaceWindow>
        <ResizableMonospaceWindow x={634} y={394} width={248} height={280} title="Window VI">
          <div style={customParagraphStyle}>
            When living patterns there are in a place - a room, a building, or a town - the more it comes to life as an entirety, the more it glows, the more it has that
            self-maintaining fire which is the quality without a name.
          </div>
        </ResizableMonospaceWindow>
      </GridLayout>
      <GlobalModalManager viewer={props.viewer} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const { sessionKey, viewer } = await Server.setup(context);

  return {
    props: { sessionKey, viewer },
  };
}

export default ExampleWindows;
