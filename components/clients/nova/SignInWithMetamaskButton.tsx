'use client';

import Link from 'next/link';
import styles from '@components/SignInWithMetamaskButton.module.scss';

// import WalletIcon from "../public/icons/WalletIcon";

import { useSDK, MetaMaskProvider } from '@metamask/sdk-react';
import Button from '@components/clients/nova/Button';
import { formatAddress } from '@components/clients/nova/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@components/clients/nova/popovers/Popover';
import { useEffect, useState } from 'react';
import { useSignature } from '@components/clients/nova/SignatureContext';

export const ConnectWalletButton = () => {
  const { sdk, connected, connecting, account } = useSDK();
  // const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  // const [siweResult, setSiweResult] = useState('');
  const [initiateSignIn, setInitiateSignIn] = useState(false);
  const { setSignature } = useSignature();

  useEffect(() => {
    const performSignIn = async () => {
      if (account && initiateSignIn) {
        const domain = window.location.host;
        const siweMessage = `${domain} wants you to sign in with your Ethereum account:\n${account}\n\nI accept the MetaMask Terms of Service: https://community.metamask.io/tos\n\nURI: https://${domain}\nVersion: 1\nChain ID: 1\nNonce: 32891757`;
        await siweSign(siweMessage);
        setInitiateSignIn(false);
      }
    };

    if (initiateSignIn) {
      performSignIn();
    }
  }, [account, initiateSignIn]);

  const siweSign = async (siweMessage: string) => {
    try {
      if (!window.ethereum) throw new Error("MetaMask is not installed");
      if (!account) throw new Error("Account not found");

      const from = account as string;
      const msg = `0x${Buffer.from(siweMessage, 'utf8').toString('hex')}`;
      const sign = await window.ethereum.request({
        method: 'personal_sign',
        params: [msg, from],
      });

      if (typeof sign === 'string') {
        // setSiweResult(sign);
        setSignature(sign);
      } else {
        throw new Error("Invalid signature");
      }
    } catch (err) {
      console.error(err);
      // setSiweResult(`Error: ${err.message}`);
    }
  };

  {/* 
  const handleTogglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };
  */}

  const connect = async () => {
    try {
      await sdk?.connect();
      setInitiateSignIn(true); // Set the flag to initiate sign-in
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };

  return (
    <div>
      {connected ? (
        <Popover>
          {/* 
          <PopoverTrigger onToggle={handleTogglePopover}>
            <Button>{formatAddress(account)}</Button>
          </PopoverTrigger>
          */}
          <PopoverContent /* onClose={handleTogglePopover} */>
            <Button onClick={disconnect}>Disconnect</Button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button className={styles.disconnected} disabled={connecting} onClick={connect}>
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export const SignInWithMetamaskButton = () => {
  const host = typeof window !== 'undefined' ? window.location.host : 'defaultHost';

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: 'Next-Metamask-Boilerplate',
      url: host, // using the host constant defined above
    },
  };

  return (
    <>
      <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
        <ConnectWalletButton />
      </MetaMaskProvider>
    </>
  );
};

export default SignInWithMetamaskButton;
