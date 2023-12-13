import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://int-dev-testing.onrender.com',
      lastModified: new Date(),
    },
  ];
}
