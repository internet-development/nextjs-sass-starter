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

function ExampleWindowsConnected(props) {
  const customParagraphStyle = { fontFamily: 'var(--font-family-serif)', fontSize: '16px', lineHeight: '1.5', margin: 24 };

  return (
    <Page
      title="api.internet.dev: Windows Connected"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/windows-connected"
    >
      <Navigation />
      <GridLayout style={{ overflow: 'hidden' }}>
        <ResizableMonospaceWindow disableResize x={88} y={88} width={488} height={280} title="Data: The Ruins Lesson: Meaning and Material">
          <img
            alt=""
            src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/1d531d4d-bdf1-4c80-bcc6-bce9f2f73dfa.jpg"
            style={{ display: 'block', width: '100%' }}
          />
        </ResizableMonospaceWindow>
        <ResizableMonospaceWindow disableResize x={442} y={208} width={368} height={544} title="Data: Ides of March">
          <img
            alt=""
            src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/ff51d8e3-68fc-4bfd-8bab-b35d939eaed3.jpg"
            style={{ display: 'block', width: '100%' }}
          />
        </ResizableMonospaceWindow>
        <ResizableMonospaceWindow disableResize x={247} y={313} width={248} height={304} title="Agents: Autodidact: d8390573-5b5a">
          <img
            alt=""
            src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/68d3fff3-c7b2-4463-83fd-1c51883dbe2d.jpg"
            style={{ display: 'block', width: '100%' }}
          />
        </ResizableMonospaceWindow>
        <ResizableMonospaceWindow disableResize x={126} y={588} width={388} height={224} title="Data: Sardaukar Training">
          <img
            alt=""
            src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/99fdf5c4-53ae-4432-bfe4-54504b8f249b.gif"
            style={{ display: 'block', width: '100%' }}
          />
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

export default ExampleWindowsConnected;
