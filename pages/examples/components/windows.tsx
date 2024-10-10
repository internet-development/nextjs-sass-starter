import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import Cookies from 'js-cookie';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import ResizableMonospaceWindow, { ResizableMonospaceWindowProps } from '@system/ResizableMonospaceWindow';
import Button from '@root/system/Button';

interface WindowProps extends ResizableMonospaceWindowProps{
  key: number
}

const customParagraphStyle: React.CSSProperties = { fontFamily: 'var(--font-family-serif)', fontSize: '16px', lineHeight: '1.5', margin: 24 };
const customButtonStyle: React.CSSProperties = { margin: '16px 8px 16px 8px' };
const customContainerStyle: React.CSSProperties = { position: 'fixed' };

const initialWindows: WindowProps[] = [
  {
    x: 76, y: 76, width: 248, height: 280, title: 'Window I',
    children: (
      <div style={customParagraphStyle}>
        The process of growth and development almost never seems to manage to create this subtle balance between the importance of the individual parts, and the coherence of
        the environment as a whole
      </div>
    ),
    key: 0
  },
  {
    x: 356, y: 76, width: 248, height: 280, title: 'Window II',
    children: (
      <div style={customParagraphStyle}>
        In an organic environment, every place is unique, and the different places also cooperate, with no parts left over, to create a global whole - a whole which can be
        identified by everyone who is part of it.
      </div>
    ),
    key: 1
  },
  {
    x: 634, y: 76, width: 248, height: 280, title: 'Window III',
    children: (
      <div style={customParagraphStyle}>
        Making simulations of what you're going to build is tremendously useful if you can get feedback from them that will tell you where you've gone wrong and what you can do
        about it.
      </div>
    ),
    key: 2
  },
  {
    x: 76, y: 394, width: 248, height: 280, title: 'Window IV',
    children: (
      <div style={customParagraphStyle}>
        To work our way towards a shared language once again, we must first learn how to discover patterns which are deep, and capable of generating life.
      </div>
    ),
    key: 3
  },
  {
    x: 356, y: 394, width: 248, height: 280, title: 'Window V',
    children: (
      <div style={customParagraphStyle}>
        From a sequence of these individual patterns, whole buildings with the character of nature will form themselves within your thoughts, as easily as sentences.
      </div>
    ),
    key: 4
  },
  {
    x: 634, y: 394, width: 248, height: 280, title: 'Window VI',
    children: (
      <div style={customParagraphStyle}>
        When living patterns there are in a place - a room, a building, or a town - the more it comes to life as an entirety, the more it glows, the more it has that
        self-maintaining fire which is the quality without a name.
      </div>
    ),
    key: 5
  }
];

function ExampleWindows(props) {
  const [windows, setWindows] = React.useState<WindowProps[]>(initialWindows.map(window => ({...window, onDelete: () => closeWindow(window.key)})));
  const [id, setId] = React.useState<number>(windows.length);

  const closeWindow = (key: number) => {
    setWindows(prevWindows => 
      prevWindows
        .filter(window => window.key !== key)
    );
  }

  function newWindowId(existingWindows: WindowProps[]): number {
    let newId;
    do {
      newId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    } while (existingWindows.some(window => window.key === newId));
    return newId;
  }  

  function createWindow(x: number, y: number, width: number, height: number, title: string, children: React.ReactNode) {
    const newId = newWindowId(windows);
    setId(newId);

    let newWindow: WindowProps = ({ x: x, y: y, width: width, height: height, title: title, children: children, key: newId, onDelete: () => closeWindow(newId) });

    while (windows.find(window => window.x === newWindow.x && window.y === newWindow.y)) {
      newWindow.y += 16;
    }

    setWindows([...windows, newWindow]);
  }

  function createWindows(windowProps: WindowProps[]) {
    // let newWindows = windows.concat(windowProps.map(window => ({...window, onDelete: () => closeWindow(window.key)})));
    const newWindows = windowProps.map(window => {
      const newId = newWindowId(windows);
      return ({...window, key: newId, onDelete: () => closeWindow(newId)});
    })

    setWindows([...windows, ...newWindows]);
    setId(windows.length + windowProps.length);
  }

  function clearWindows() {
    setWindows([]);
    setId(0);
  }

  return (
    <Page
      title="wireframes.internet.dev ➝ components ➝ windows"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/windows"
    >
      <Navigation />
      <GridLayout>
        {windows.map(window => (<ResizableMonospaceWindow {...window} key={window.key}></ResizableMonospaceWindow>))}
        <div style={customContainerStyle}>
          <Button style={customButtonStyle} onClick={() => createWindow(window.innerWidth / 2 + scrollX, window.innerHeight / 4 + scrollY, 248, 280, "New Window", <div style={customParagraphStyle}>Hey I'm your new window</div>)}>Create Window</Button>
          <Button style={customButtonStyle} onClick={() => clearWindows()}>Clear Windows</Button>
        </div>
      </GridLayout>
      <GlobalModalManager />
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
