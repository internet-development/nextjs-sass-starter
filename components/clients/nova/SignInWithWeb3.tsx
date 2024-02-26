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
  useAddress,
  en,
} from '@thirdweb-dev/react';

import { ethers } from 'ethers';

import Button from '@system/Button';
import { FormParagraph } from '@system/typography/forms';

interface Window {
  ethereum: any;
}

export default function SignInWithWeb3() {
  let signer;
  if (typeof window !== 'undefined') {
    signer = new ethers.providers.Web3Provider((window as unknown as Window).ethereum).getSigner();
  }
  const address = useAddress();

  const signLoginMessage = async () => {
    const message = 'Please sign this message to log in using web3 to novaenergy.ai.';
    const signature = await signer.signMessage(message);
    return signature;
  };

  return (
    <ThirdwebProvider
      activeChain="ethereum"
      clientId="your-client-id"
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
      <FormParagraph />
      {!address && <ConnectWallet theme={'dark'} modalSize={'wide'} style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }} showThirdwebBranding={false} />}
      {address && <Button onClick={signLoginMessage}>Authenticate via. Web3</Button>}
    </ThirdwebProvider>
  );
}
