import type { APIRoute } from 'astro';
import { products } from '../data/products';
import { siteConfig } from '../data/site';

export const prerender = true;

const staticPaths = [
  '/',
  '/shop/',
  '/about/',
  '/where-to-buy/',
  '/wholesale/',
  '/contact/',
  '/policies/',
  '/calculator/',
];

export const GET: APIRoute = () => {
  const paths = [
    ...staticPaths,
    ...products.map((product) => `/soap/${product.slug}/`),
  ];
  const urls = paths
    .map(
      (path) =>
        `<url><loc>${new URL(path, siteConfig.siteUrl).href}</loc></url>`,
    )
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    },
  );
};
