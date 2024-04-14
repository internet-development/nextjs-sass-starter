import styles from '@components/DefaultLayout.module.scss';

import * as React from 'react';

import Head from 'next/head';

import { ModalContext } from '@system/providers/ModalContextProvider';

export default function Page(props) {
  const [modalContent, setContent] = React.useState(null);

  const showModal = (nextContent) => {
    if (nextContent && modalContent && nextContent.name === modalContent.name) {
      setContent(null);
      return;
    }

    setContent(nextContent);
  };

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta httpEquiv="content-language" content="en-us" />
        <meta name="title" content={props.title} />
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content="https://intdev-global.s3.us-west-2.amazonaws.com/template-twitter-summary-large.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={props.url} />
        <meta property="twitter:title" content={props.title} />
        <meta property="twitter:description" content={props.description} />
        <meta property="twitter:image" content="https://intdev-global.s3.us-west-2.amazonaws.com/template-twitter-summary-large.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <img className={styles.pixel} src="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png" alt="" />
      <ModalContext.Provider value={{ modalContent, showModal }}>{props.children}</ModalContext.Provider>
    </>
  );
}
