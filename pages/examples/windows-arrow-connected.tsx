import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import ArrowLine from '@system/diagrams/ArrowLine';
import Cookies from 'js-cookie';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import ResizableMonospaceWindow from '@system/ResizableMonospaceWindow';

import { P } from '@system/typography';

function ExampleWindowsArrowConnected(props) {
  const startRef = React.useRef(null);
  const secondRef = React.useRef(null);
  const thirdRef = React.useRef(null);
  const fourthRef = React.useRef(null);
  const fifthRef = React.useRef(null);
  const sixthRef = React.useRef(null);
  const seventhRef = React.useRef(null);
  const endRef = React.useRef(null);

  const customParagraphStyle = { fontFamily: 'var(--font-family-serif)', fontSize: '16px', lineHeight: '1.5', margin: 24 };

  return (
    <Page
      title="api.internet.dev: Windows Arrow Connected"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/windows-arrow-connected"
    >
      <Navigation />
      <GridLayout style={{ overflow: 'hidden' }}>
        <ArrowLine start={startRef} end={secondRef} />
        <ArrowLine start={secondRef} end={thirdRef} />
        <ArrowLine start={thirdRef} end={fourthRef} />
        <ArrowLine start={fourthRef} end={fifthRef} />
        <ArrowLine start={fifthRef} end={sixthRef} />
        <ArrowLine start={sixthRef} end={seventhRef} />
        <ArrowLine start={seventhRef} end={endRef} />

        <ResizableMonospaceWindow ref={startRef} disableResize x={1248} y={24} width={248} height={212} title="I: Caesar's growing power">
          <div style={customParagraphStyle}>
            After his successful military campaigns, especially the conquest of Gaul, Julius Caesar became extremely powerful and popular in Rome.
          </div>
        </ResizableMonospaceWindow>

        <ResizableMonospaceWindow ref={secondRef} disableResize x={800} y={24} width={248} height={248} title="II: Political rivalries">
          <div style={customParagraphStyle}>
            Caesar's increasing power led to political rivalries and tensions with other prominent Roman figures, including Pompey the Great and members of the Roman Senate.
          </div>
        </ResizableMonospaceWindow>

        <ResizableMonospaceWindow ref={thirdRef} disableResize x={466} y={24} width={248} height={248} title="III: Crossing the Rubicon">
          <div style={customParagraphStyle}>
            (49 BC): Caesar defied the Senate's order to disband his army, crossing the Rubicon River with his troops, which was considered an act of war against Rome.
          </div>
        </ResizableMonospaceWindow>

        <ResizableMonospaceWindow ref={fourthRef} disableResize x={124} y={64} width={248} height={212} title="IV: Civil War">
          <div style={customParagraphStyle}>
            (49-45 BC): This led to a civil war between Caesar and Pompey, which Caesar eventually won, effectively making him the most powerful man in Rome.
          </div>
        </ResizableMonospaceWindow>

        <ResizableMonospaceWindow ref={fifthRef} disableResize x={104} y={346} width={248} height={212} title="V: Caesar's appointment as Dictator">
          <div style={customParagraphStyle}>
            (46-44 BC): Caesar was appointed as Dictator of Rome, initially for a period of ten years and later for life, concentrating power in his hands.
          </div>
        </ResizableMonospaceWindow>

        <ResizableMonospaceWindow ref={sixthRef} disableResize x={166} y={666} width={248} height={280} title="VI: Discontent among the senators">
          <div style={customParagraphStyle}>
            Many senators feared that Caesar aimed to become a king, which was unacceptable in the Roman Republic. They believed his power threatened their own authority and the
            republican traditions of Rome.
          </div>
        </ResizableMonospaceWindow>

        <ResizableMonospaceWindow ref={seventhRef} disableResize x={508} y={808} width={248} height={212} title="VII: Formation of a conspiracy">
          <div style={customParagraphStyle}>
            A group of senators, including Marcus Brutus and Gaius Cassius, formed a conspiracy to assassinate Caesar and restore the Republic.
          </div>
        </ResizableMonospaceWindow>

        <ResizableMonospaceWindow ref={endRef} disableResize x={908} y={468} width={368} height={544} title="Data: Ides of March">
          <img
            alt=""
            src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/ff51d8e3-68fc-4bfd-8bab-b35d939eaed3.jpg"
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

export default ExampleWindowsArrowConnected;
