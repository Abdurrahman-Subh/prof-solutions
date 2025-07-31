export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/', '/private/'],
    },
    sitemap: 'https://www.prof-solutions.nl/sitemap.xml',
  };
}
