import {
    ThirdwebProvider,
    ConnectWallet,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
    safeWallet,
    trustWallet,
    zerionWallet,
    bloctoWallet,
    frameWallet,
    rainbowWallet,
    phantomWallet,
    en,
  } from '@thirdweb-dev/react';
  
  export default function SignInWithWeb3() {
    return (
      <ThirdwebProvider
        activeChain="ethereum"
        clientId="YOUR_CLIENT_ID"
        locale={en()}
        supportedWallets={[
          metamaskWallet(),
          coinbaseWallet(),
          walletConnect(),
          safeWallet({
            personalWallets: [metamaskWallet(), coinbaseWallet(), walletConnect(), trustWallet(), zerionWallet(), bloctoWallet(), frameWallet(), rainbowWallet(), phantomWallet()],
          }),
          trustWallet(),
          zerionWallet(),
          bloctoWallet(),
          frameWallet(),
          rainbowWallet(),
          phantomWallet(),
        ]}
      >
        <ConnectWallet theme={'dark'} modalSize={'wide'} />
      </ThirdwebProvider>
    );
  }
  