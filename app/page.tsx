import '@root/global.scss';
import '@root/animations.scss';

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
        <ListItem href="https://marble.place">marble.place</ListItem>
        <ListItem href="https://txt.dev">txt.dev</ListItem>
        <ListItem href="https://internet.dev/team">internet.dev</ListItem>
        <ListItem href="https://github.com/internet-development/nextjs-sass-starter">nextjs-sass-starter source code</ListItem>
      </div>

      <div style={{ marginTop: 88, lineHeight: '1.6', maxWidth: 768 }}>
        Explore — We have many many examples, components, and{' '}
        <a href="https://github.com/internet-development/nextjs-sass-starter" target="_blank">
          source code
        </a>{' '}
        for everything listed.
      </div>
      <div>
        <ListItem href="/examples/animations/scroll-carousel-horizontal" isWIP>
          Animations ➝ CSS based scroll carousel horizontal
        </ListItem>
        <ListItem href="/examples/animations/card-hand" isWIP>
          Animations ➝ CSS deck spread and flip
        </ListItem>
        <ListItem href="/examples/animations/card" isWIP>
          Animations ➝ CSS flippable card with tilt
        </ListItem>
        <ListItem href="/examples/animations/text-swapping">Animations ➝ text swapping</ListItem>

        <ListItem href="/examples">Components ➝ navigation, hero section</ListItem>
        <ListItem href="/examples/components/application-site">Components ➝ application overview, footer</ListItem>
        <ListItem href="/examples/components/post">Components ➝ navigation, blog post, footer</ListItem>
        <ListItem href="/examples/components/forms">Components ➝ navigation, form elements</ListItem>
        <ListItem href="/examples/components/full-section">Components ➝ navigation, full dvh sections</ListItem>
        <ListItem href="/examples/components/modals">Components ➝ navigation, index modal trigger</ListItem>
        <ListItem href="/examples/components/modals-website-prompt">Components ➝ navigation, modal website prompt trigger</ListItem>

        <ListItem href="/examples/components/no-sections">Components ➝ navigation, naked components</ListItem>
        <ListItem href="/examples/components/product-marketing">Components ➝ navigation, product marketing</ListItem>
        <ListItem href="/examples/components/half-section">Components ➝ navigation, ½ dvh sections</ListItem>
        <ListItem href="/examples/components/table">Components ➝ navigation, table</ListItem>
        <ListItem href="/examples/components/windows">Components ➝ windows</ListItem>
        <ListItem href="/examples/components/windows-connected" isWIP>
          Components ➝ windows connected, diagram
        </ListItem>
        <ListItem href="/examples/components/windows-arrow-connected" isWIP>
          Components ➝ windows arrow connected, diagram
        </ListItem>
        <ListItem href="/examples/components/windows-level-selector" isWIP>
          Components ➝ windows level selector
        </ListItem>

        <ListItem href="/examples/empty/application-template-page">Empty ➝ application template page</ListItem>
        <ListItem href="/examples/empty/grid-template-page">Empty ➝ grid template page</ListItem>
        <ListItem href="/examples/empty/isometric-grid-template-page">Empty ➝ isometric grid template page</ListItem>

        <ListItem href="/examples/features/authentication">Features ➝ authentication ➝ to API key and optional session</ListItem>
        <ListItem href="/examples/features/authentication/bluesky" isWIP>
          <Bluesky height="20px" style={{ marginRight: 16 }} />
          Features ➝ authentication ➝ Bluesky to API key and optional session
        </ListItem>

        <ListItem href="/examples/features/authentication/modal">Features ➝ authentication ➝ modal to session</ListItem>
        <ListItem href="/examples/features/authentication/google">Features ➝ authentication ➝ Google to API key and optional session</ListItem>
        <ListItem href="/examples/features/earnings-requirement-calculator">Features ➝ earnings requirement calculator</ListItem>
        <ListItem href="/examples/features/files" isAuth>
          Features ➝ file management (with AWS S3 presigned URL)
        </ListItem>
        <ListItem href="/examples/features/stocks/fixed-watchlist" isAuth>
          Features ➝ fixed stock watchlist
        </ListItem>
        <ListItem href="/examples/features/invoices" isAuth>
          Features ➝ invoice management
        </ListItem>
        <ListItem href="/examples/features/job-posting">Features ➝ job posting</ListItem>
        <ListItem href="/examples/features/services" isAuth>
          Features ➝ purchase services
        </ListItem>
        <ListItem href="/examples/features/settings" isAuth isWIP>
          Features ➝ settings
        </ListItem>
        <ListItem href="/examples/features/statement-of-work" isAuth>
          Features ➝ statement of work management
        </ListItem>
        <ListItem href="/examples/features/threads">Features ➝ threads</ListItem>

        <ListItem href="/examples/system/colors">System ➝ colors</ListItem>
        <ListItem href="/examples/system/typography">System ➝ typography</ListItem>
        <ListItem href="/examples/system/data-visualization" isWIP>
          System ➝ data visualization
        </ListItem>
      </div>
      <div style={{ marginTop: 88, lineHeight: '1.6', maxWidth: 768 }}>
        Learn — Are you new and want to work alongside the <a href="https://internet.dev">Internet Development Studio</a> team?
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
