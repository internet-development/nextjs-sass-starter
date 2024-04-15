import * as Queries from '@common/queries';
import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import ActionItem from '@system/documents/ActionItem';
import Button from '@system/Button';
import Cookies from 'js-cookie';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Input from '@system/Input';
import KeyHeader from '@system/KeyHeader';
import MonospacePreview from '@system/MonospacePreview';
import Page from '@components/Page';
import ThinAppLayout from '@system/layouts/ThinAppLayout';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';
// import SignInWithWeb3 from '@system/SignInWithWeb3';

// import { ThirdwebSDKProvider } from '@thirdweb-dev/react';
import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';
import { useModal } from '@system/providers/ModalContextProvider';

// TODO(jimmylee)
// When we can fix dependencies. We will delete these in the template.
function ThirdwebSDKProvider({ activeChain, clientId }: Record<string, any>) {
  return null;
}

function SignInWithWeb3({ setUser, setWallet, wallet }: Record<string, any>) {
  return null;
}

function ExampleWeb3Authentication(props) {
  const { showModal } = useModal();

  const [currentUser, setUser] = React.useState<Record<string, any> | null>(props.viewer);
  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const [wallet, setWallet] = React.useState<string>('');

  return (
    <Page
      title="api.internet.dev: Thirdweb Wallet Authentication"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/thirdweb-authentication"
    >
      <KeyHeader onInputChange={setKey} value={key} />
      <ThinAppLayout>
        <ThinAppLayoutHeader
          token={key}
          onSignOut={() => {
            setKey('');
            Cookies.remove('sitekey');
            window.location.reload();
          }}
        />
        <FormHeading style={{ marginTop: 64 }}>Sign in (WIP)</FormHeading>
        <FormParagraph>Allow your users to sign in if they have a Web3 wallet! Simply connect your user's wallet to get started.</FormParagraph>
        <FormParagraph>
          Using a Cookie to maintain your session is entirely optional. Once you've successfully signed in, you'll have the option to use one to persist your session.
        </FormParagraph>
        <FormParagraph>Remember to handle your API key with care for security purposes. This is just an example template.</FormParagraph>
        <InputLabel style={{ marginTop: 48 }}>E-mail</InputLabel>
        <Input onChange={(e) => setEmail(e.target.value)} name="email" style={{ marginTop: 8 }} type="text" placeholder="Your e-mail" value={email} />
        <InputLabel style={{ marginTop: 24 }}>Password</InputLabel>
        <Input onChange={(e) => setPassword(e.target.value)} placeholder="Your password" name="password" style={{ marginTop: 8 }} type="password" value={password} />
        {/* Sample clientID. Replce with your own! */}
        <ThirdwebSDKProvider activeChain={'ethereum'} clientId="6c008bdcd6760736ab3ffcd4deb713dd">
          <SignInWithWeb3 setUser={setUser} wallet={wallet} setWallet={setWallet} />
        </ThirdwebSDKProvider>
        <Button
          loading={loading}
          onClick={async () => {
            if (Utilities.isEmpty(email)) {
              showModal({
                name: 'ERROR',
                message: 'You must provide an e-mail.',
              });
              return;
            }

            if (Utilities.isEmpty(password)) {
              showModal({
                name: 'ERROR',
                message: 'You must provide a password.',
              });
              return;
            }

            if (password.length < 4) {
              showModal({
                name: 'ERROR',
                message: 'You must use at least 4 characters for your password.',
              });
              return;
            }

            setLoading(true);
            const response = await Queries.web3Authenticate({ address: wallet, message: null, signature: null, email, password });
            setLoading(false);
            if (!response) {
              showModal({
                name: 'ERROR',
                message: 'Something went wrong. This is also a lazy message. Ideally the error message would have told you that you forgot to put your email or password.',
              });
              return;
            }
            Cookies.remove('sitekey');
            setKey('');
            setUser(response.user);
          }}
          style={{ marginTop: 24, width: '100%' }}
        >
          Submit
        </Button>

        {currentUser ? (
          <>
            <FormHeading style={{ marginTop: 64 }}>Your user data</FormHeading>
            <FormParagraph>
              You can grab your API key from the API response below. If you're modifying this template, you will need to implement your own session management if you want to
              provide a better user experience.
            </FormParagraph>
            <FormParagraph>If you verify your e-mail, your user account level should update.</FormParagraph>
            <MonospacePreview style={{ marginTop: 24, opacity: 1 }} title="User Response - /api/users/authenticate">
              {JSON.stringify(currentUser, null, 2)}
            </MonospacePreview>
            <div style={{ marginTop: 16 }}>
              <ActionItem
                icon={`⊹`}
                onClick={async () => {
                  const response = await Queries.userAuthenticate({ email, password });
                  if (!response) {
                    showModal({
                      name: 'ERROR',
                      message: 'Something went wrong. This is also a lazy message. Ideally the error message would have told you that you forgot to put your email or password.',
                    });
                    return;
                  }
                  setUser(response.user);
                  alert('The user data was refreshed.');
                }}
              >
                Refresh
              </ActionItem>
              <ActionItem
                icon={`⊹`}
                onClick={async () => {
                  const response = await Queries.userRefreshKey({ email, password });
                  if (!response) {
                    showModal({
                      name: 'ERROR',
                      message: 'Something went wrong. This is also a lazy message. Ideally the error message would have told you that you forgot to put your email or password.',
                    });
                    return;
                  }
                  Cookies.remove('sitekey');
                  setUser(response.user);
                  alert('A new API key was issued. You will need to set the Cookie again.');
                }}
              >
                Generate new API key
              </ActionItem>
              <ActionItem
                icon={`⊹`}
                onClick={async () => {
                  setKey(currentUser.key);
                  Cookies.set('sitekey', currentUser.key, { secure: true });
                  alert('Your API key was attached to a cookie with domain and secure options.');
                }}
              >
                Set Cookie (persistent session / sign in)
              </ActionItem>
              <ActionItem
                icon={`⭡`}
                onClick={() => {
                  setUser(null);
                }}
              >
                Hide user information
              </ActionItem>
              <ActionItem icon={`⭢`} href="/examples/settings">
                View settings
              </ActionItem>
            </div>
          </>
        ) : null}
      </ThinAppLayout>
      <GlobalModalManager viewer={currentUser} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const { sessionKey, viewer } = await Server.setup(context);

  return {
    props: { sessionKey, viewer },
  };
}

export default ExampleWeb3Authentication;
