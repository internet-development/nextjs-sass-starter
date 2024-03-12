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

import React, { useState, useEffect } from 'react';
import Button from '@system/Button';
import { ethers } from 'ethers';
import { generateNonce } from '@common/utilities';
import { web3Authenticate } from '@common/queries';

let signer: ethers.Signer;
let provider: ethers.providers.Web3Provider;

export default function SignInWithWeb3({ setUser, wallet, setWallet }) {
  const [status, setStatus] = useState('Authenticate via web3');

  useEffect(() => {
    const getAddress = async () => {
      if (typeof window.ethereum !== 'undefined') {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        try {
          const address = await signer.getAddress();
          setWallet(address);
        } catch (error) {
          console.error('Error obtaining address, failed to autoconnect wallet.');
        }
      }
    };

    getAddress();
  }, [setWallet]);

  const onAuthenticate = async ({ address, message, signature }) => {
    const result = await web3Authenticate({ address, message, signature, email: null, password: null });

    if (result === null || !result) {
      setStatus('Something went wrong. You should register by putting your name and password.');
    } else {
      setStatus('Success!');
    }

    return result;
  };

  const onSignMessage = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // REFERENCE: eips.ethereum.org/EIPS/eip-4361#message-format for secure login message generation
        const domain = 'YOUR_DOMAIN_HERE';
        const address = await signer.getAddress();
        const nonce = await generateNonce();
        const issuedAt = new Date().toISOString();
        const network = await provider.getNetwork();
        const chainId = network.chainId;
        const message = `${domain} wants you to sign in with your Ethereum account:\n${address}\nURI: ${domain}\nVersion: 1\nChain ID: ${chainId}\nNonce: ${nonce}\nIssued At: ${issuedAt}`;
        const signature = await signer.signMessage(message);
        const result = await onAuthenticate({ address: address, message: message, signature: signature });
        setUser(result.user);
      } catch (error) {
        console.error('Error signing in with Web3', error);
      }
    }
  };

  return (
    <ThirdwebProvider
      activeChain="ethereum"
      // Sample clientID. Replce with your own!
      clientId="6c008bdcd6760736ab3ffcd4deb713dd"
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
      {wallet && (
        <Button style={{ marginTop: 24, width: '100%' }} onClick={onSignMessage}>
          {status}
        </Button>
      )}
      {!wallet && (
        <ConnectWallet
          theme={'dark'}
          modalSize={'wide'}
          style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: '1rem', marginBottom: '1rem' }}
          showThirdwebBranding={false}
          onConnect={() => window.location.reload()}
        />
      )}
    </ThirdwebProvider>
  );
}
