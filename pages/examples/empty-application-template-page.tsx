import * as React from 'react';
import * as Utilities from '@common/utilities';

import Cookies from 'js-cookie';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import ThinAppLayout from '@system/layouts/ThinAppLayout';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';

import { P } from '@system/typography';

function ExampleEmptyApplicationTemplate(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);
  const [key, setKey] = React.useState<string>('');

  React.useEffect(() => {
    const key = Cookies.get('sitekey', { domain: props.host, secure: true });
    if (!Utilities.isEmpty(key)) {
      setKey(key);
    }
  }, [props.host]);

  return (
    <Page
      title="api.internet.dev: Empty Application Template"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/authentication"
    >
      <KeyHeader host={props.host} onInputChange={setKey} onHandleThemeChange={Utilities.onHandleThemeChange} value={key} />
      <ThinAppLayout>
        <ThinAppLayoutHeader
          token={key}
          onSignOut={() => {
            setKey('');
            Cookies.remove('sitekey');
          }}
        />
      </ThinAppLayout>
      <GlobalModalManager currentModal={currentModal} setModal={setModal} onHandleThemeChange={Utilities.onHandleThemeChange} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { host: context.req.headers.host.replace(':10000', '') },
  };
}

export default ExampleEmptyApplicationTemplate;
