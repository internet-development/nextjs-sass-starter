import Link from 'next/link';

import { H1, P } from '@system/typography';

export default function NotFoundContent() {
  return (
    <div style={{ padding: '48px 24px', maxWidth: 768, margin: '0 auto' }}>
      <H1>404</H1>
      <P style={{ marginTop: '1rem' }}>Page not found. The page you are looking for does not exist.</P>
      <P style={{ marginTop: '1rem' }}>
        <Link href="/">Return to homepage</Link>
      </P>
    </div>
  );
}

