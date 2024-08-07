import '@root/global.scss';
import '@root/animations.scss';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

import Bluesky from '@system/svg/social/Bluesky';
import DefaultLayout from '@components/DefaultLayout';
import ListItem from '@components/ListItem';
import Package from '@root/package.json';
import Script from 'next/script';

export async function generateMetadata({ params, searchParams }) {
  const title = Package.name;
  const description = Package.description;
  const url = 'https://wireframes.internet.dev';
  const handle = '@internetxstudio';

  return {
    metadataBase: new URL('https://wireframes.internet.dev'),
    title,
    description,
    url,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: 'https://intdev-global.s3.us-west-2.amazonaws.com/template-twitter-summary-large.png',
          width: 1200,
          height: 628,
        },
      ],
    },
    twitter: {
      title,
      description,
      url,
      handle,
      card: 'summary_large_image',
      images: ['https://intdev-global.s3.us-west-2.amazonaws.com/template-twitter-summary-large.png'],
    },
    icons: {
      icon: '/favicon-32x32.png',
      shortcut: '/favicon-16x16.png',
      apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png',
        },
      ],
    },
  };
}

export default async function Page(props) {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      {/* <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" /> */}
      {/* <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script> */}
      <div style={{ lineHeight: '1.6', maxWidth: 768 }}>Showcase — Take a look at what we have done with this template.</div>
      <div>
        <ListItem href="https://marble.place" index={Utilities.leftPad(`1`, 4)} isWIP>
          marble.place
        </ListItem>
        <ListItem href="https://txt.dev" index={Utilities.leftPad(`2`, 4)}>
          txt.dev
        </ListItem>
        <ListItem href="https://internet.dev/team" index={Utilities.leftPad(`3`, 4)}>
          internet.dev
        </ListItem>
        <ListItem href="https://github.com/internet-development/nextjs-sass-starter" index={Utilities.leftPad(`4`, 4)} isWIP>
          nextjs-sass-starter source code
        </ListItem>
        <ListItem href="https://users.garden" index={Utilities.leftPad(`5`, 4)} isWIP>
          users.garden
        </ListItem>
        <ListItem href="https://beautifulthings.xyz" index={Utilities.leftPad(`6`, 4)} isWIP>
          beautifulthings.xyz
        </ListItem>
      </div>

      <div style={{ marginTop: 88, lineHeight: '1.6', maxWidth: 768 }}>
        Explore — We have many many examples, components, and{' '}
        <a href="https://github.com/internet-development/nextjs-sass-starter" target="_blank">
          source code
        </a>{' '}
        for everything listed.
      </div>
      <div>
        {Constants.TEMPLATE_EXAMPLES.map((each: Record<string, any>, index) => {
          return (
            <ListItem key={each.href} href={each.href} index={Utilities.leftPad(`${index}`, 4)} isWIP={each.isWIP}>
              {each.isBluesky ? <Bluesky height="20px" style={{ marginRight: 16 }} /> : null}
              {each.name}
            </ListItem>
          );
        })}
      </div>
      <div style={{ marginTop: 88, lineHeight: '1.6', maxWidth: 768 }}>
        Learn — Are you new and want to work alongside the <a href="https://internet.dev">Internet Development Studio</a> team?
      </div>
      <div style={{ paddingBottom: 128 }}>
        <ListItem index={Utilities.leftPad(`1`, 4)} href="https://github.com/internet-development/nextjs-sass-starter/issues/2">
          Setting up SSH keys locally (MacOS)
        </ListItem>
        <ListItem index={Utilities.leftPad(`2`, 4)} href="https://github.com/internet-development/nextjs-sass-starter/issues/3">
          The software we recommend for web development (MacOS)
        </ListItem>
        <ListItem index={Utilities.leftPad(`3`, 4)} href="https://github.com/internet-development/nextjs-sass-starter/issues/4">
          The anatomy of nextjs-sass-starter
        </ListItem>
        <ListItem index={Utilities.leftPad(`4`, 4)} href="https://github.com/internet-development/nextjs-sass-starter/issues/5">
          Accounts, organizations, and data upload
        </ListItem>
      </div>
    </DefaultLayout>
  );
}
