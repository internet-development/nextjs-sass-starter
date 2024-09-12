import * as Hooks from '@common/hooks';
import * as React from 'react';

import Input from '@root/system/Input';
import Page from '@components/Page';
import SectionFullHeight from '@root/system/sections/SectionFullHeight';

function ExampleDebouncedCallback(props) {
  const [debounceMS, setDebounceMS] = React.useState(100);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const onMouseMove = Hooks.useDebouncedCallback(
    debounceMS,
    (e: MouseEvent) => {
      setX(e.pageX);
      setY(e.pageY);
    },
    []
  );

  React.useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  });

  return (
    <Page
      title="wireframes.internet.dev ➝ features ➝ debounced callback"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/features/hooks/debounced-callback"
    >
      <div
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: 32,
          height: 32,
          transform: 'translate(-50%, -50%)',
          background: 'red',
          pointerEvents: 'none',
          transition: debounceMS + 'ms',
        }}
      ></div>
      <SectionFullHeight>
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <span style={{ marginRight: 16 }}>Cooldown:</span>
          <Input style={{ width: 100 }} type="number" step="50" value={debounceMS} onChange={(e) => setDebounceMS(Number(e.target.value))} />
          <span style={{ marginLeft: 16 }}></span>ms
        </div>
      </SectionFullHeight>
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleDebouncedCallback;
