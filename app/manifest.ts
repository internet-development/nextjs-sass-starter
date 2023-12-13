import Package from '@root/package.json';

import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: Package.name,
    short_name: Package.name,
    description: Package.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#0047FF',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
