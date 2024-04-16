import '@root/global.scss';

import Bluesky from '@system/svg/social/Bluesky';
import DefaultLayout from '@components/DefaultLayout';
import ListItem from '@components/ListItem';
import Showcase from '@components/Showcase';
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
      <div style={{ lineHeight: '1.6', maxWidth: 768 }}>Showcase — Take a look at what we have done with this template</div>
      <div>
        <ListItem href="https://txt.dev">txt.dev</ListItem>
        <ListItem href="https://internet.dev/team">internet.dev</ListItem>
        <ListItem href="https://github.com/internet-development/nextjs-sass-starter">nextjs-sass-starter source code</ListItem>
      </div>

      <div style={{ marginTop: 88, lineHeight: '1.6', maxWidth: 768 }}>
        Explore — We have many many examples, components, and templates for{' '}
        <a href="https://github.com/internet-development/nextjs-sass-starter" target="_blank">
          nextjs-sass-starter
        </a>
        , they are for kick-starting your upcoming projects. These serve as an ideal foundation, and feature real production APIs that you can integrate if they meet your project's
        needs.
      </div>
      <div>
        <ListItem href="/examples/authentication">Authentication to API key</ListItem>
        <ListItem href="/examples/authentication-bluesky" isWIP>
          <Bluesky height="20px" style={{ marginRight: 16 }} />
          Authentication with Bluesky to API key
        </ListItem>
        <ListItem href="/examples/authentication-google">Authentication with Google to API key</ListItem>
        <ListItem href="/examples/components-application-site">Components ➝ application overview, footer</ListItem>
        <ListItem href="/examples">Components ➝ navigation, hero section</ListItem>
        <ListItem href="/examples/components-post">Components ➝ navigation, blog post, footer</ListItem>
        <ListItem href="/examples/components-forms">Components ➝ navigation, form elements</ListItem>
        <ListItem href="/examples/components-full-section">Components ➝ navigation, full dvh sections</ListItem>
        <ListItem href="/examples/components-modals">Components ➝ navigation, index modal trigger</ListItem>
        <ListItem href="/examples/components-no-sections">Components ➝ navigation, naked components</ListItem>
        <ListItem href="/examples/components-product-marketing">Components ➝ navigation, product marketing</ListItem>
        <ListItem href="/examples/components-half-section">Components ➝ navigation, ½ dvh sections</ListItem>
        <ListItem href="/examples/components-table">Components ➝ navigation, table</ListItem>
        <ListItem href="/examples/earnings-requirement-calculator">Earnings requirement calculator</ListItem>
        <ListItem href="/examples/empty-application-template-page">Empty application template page</ListItem>
        <ListItem href="/examples/empty-grid-template-page">Empty grid template page</ListItem>
        <ListItem href="/examples/empty-isometric-grid-template-page">Empty isometric grid template page</ListItem>
        <ListItem href="/examples/files" isAuth>
          File management (with AWS S3 presigned URL)
        </ListItem>
        <ListItem href="/examples/stocks/fixed-watchlist" isAuth>
          Fixed Stock Watchlist
        </ListItem>
        <ListItem href="/examples/invoices" isAuth>
          Invoice management
        </ListItem>
        <ListItem href="/examples/job-posting">Job posting</ListItem>
        <ListItem href="/examples/services" isAuth>
          Purchase services
        </ListItem>
        <ListItem href="/examples/settings" isAuth isWIP>
          Settings
        </ListItem>
        <ListItem href="/examples/statement-of-work" isAuth>
          Statement of Work management
        </ListItem>
        <ListItem href="/examples/system/data-visualization" isWIP>
          System ➝ data visualization
        </ListItem>
        <ListItem href="/examples/system/typography">System ➝ typography</ListItem>
        <ListItem href="/examples/threads">Threads</ListItem>
        <ListItem href="/examples/windows">Window management</ListItem>
        <ListItem href="/examples/windows-connected" isWIP>
          Windows connected, diagram
        </ListItem>
        <ListItem href="/examples/windows-arrow-connected" isWIP>
          Windows arrow connected, diagram
        </ListItem>
      </div>
      <div style={{ marginTop: 88, lineHeight: '1.6', maxWidth: 768 }}>
        Are you new to web development and want to work alongside the <a href="https://internet.dev">Internet Development Studio</a> team?
      </div>
      <div style={{ paddingBottom: 128 }}>
        <ListItem href="https://github.com/internet-development/nextjs-sass-starter/issues/2">Part I ➝ Setting up SSH keys locally (MacOS)</ListItem>
        <ListItem href="https://github.com/internet-development/nextjs-sass-starter/issues/3">Part II ➝ The software we recommend for web development (MacOS)</ListItem>
        <ListItem href="https://github.com/internet-development/nextjs-sass-starter/issues/4" isWIP>
          Part III ➝ The anatomy of nextjs-sass-starter
        </ListItem>
        <ListItem href="https://github.com/internet-development/nextjs-sass-starter/issues/5">Part IV ➝ Accounts, grants, organizations, and data upload</ListItem>
        <ListItem href="https://github.com/internet-development/nextjs-sass-starter/issues/6" isWIP>
          Part V ➝ Additional endpoints
        </ListItem>
        <ListItem href="https://github.com/internet-development/nextjs-sass-starter/issues/13" isWIP>
          Part VI ➝ Integrating custom API endpoints, command line scripts, and using a Postgres database
        </ListItem>
      </div>
    </DefaultLayout>
  );
}
