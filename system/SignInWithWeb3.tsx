// @ts-nocheck

import Button from '@system/Button';

import React, { useEffect, useState } from 'react';
import {
  bloctoWallet,
  coinbaseWallet,
  ConnectWallet,
  en,
  frameWallet,
  metamaskWallet,
  phantomWallet,
  rainbowWallet,
  safeWallet,
  ThirdwebProvider,
  trustWallet,
  walletConnect,
  zerionWallet,
} from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { generateNonce } from '@common/utilities';

let signer: ethers.Signer;
let provider: ethers.providers.Web3Provider;

export async function attemptFetch(url, method, headers, body) {
  try {
    const response = await fetch(url, { method, headers, body });
    const result = await response.json();
    return !result.error ? result : null;
  } catch (e) {
    return null;
  }
}

export async function web3Authenticate({ address, message, signature, email, password }) {
  const apiUrl = 'https://api.internet.dev/api/users/authenticate';
  const headers = { 'Content-Type': 'application/json' };

  // NOTE(xBalbinus): Web3 Quick-auth
  if (message && signature && address) {
    const authBody = JSON.stringify({ wallet_address: address, message, wallet_signature: signature });
    const authResult = await attemptFetch(apiUrl, 'POST', headers, authBody);
    if (authResult) return authResult;
  }

  // NOTE(xBalbinus): Web3 Register
  if (email && password && address) {
    const domain = 'YOUR_DOMAIN_HERE';
    const registerBody = JSON.stringify({ email, domain, password, wallet_address: address });
    const registerResult = await attemptFetch(apiUrl, 'POST', headers, registerBody);
    if (registerResult && registerResult.user) return registerResult;
  }

  return null;
}

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
        // NOTE(xBalbinus) REFERENCE: eips.ethereum.org/EIPS/eip-4361#message-format
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
        bloctoWallet(),
        coinbaseWallet(),
        frameWallet(),
        metamaskWallet(),
        phantomWallet(),
        rainbowWallet(),
        safeWallet({
          personalWallets: [bloctoWallet(), coinbaseWallet(), frameWallet(), metamaskWallet(), phantomWallet(), rainbowWallet(), trustWallet(), walletConnect(), zerionWallet()],
        }),
        trustWallet(),
        walletConnect(),
        zerionWallet(),
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
          style={{ width: '100%', marginTop: '24px', padding: '24px' }}
          showThirdwebBranding={false}
          onConnect={() => window.location.reload()}
        />
      )}
    </ThirdwebProvider>
  );
}
