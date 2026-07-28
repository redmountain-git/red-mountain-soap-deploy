export const siteConfig = {
  brandName: 'Red Mountain Soap',
  legalName: 'Red Mountain Soap LC',
  location: 'Ivins, Utah',
  email: 'sales@redmountainsoap.com',
  siteUrl: 'https://redmountainsoap.com',
  description:
    'Small-batch cold-process soap rooted in the sandstone country of Southern Utah.',
  navigation: [
    { href: '/shop/', label: 'Shop' },
    { href: '/about/', label: 'Our story' },
    { href: '/where-to-buy/', label: 'Find us' },
    { href: '/wholesale/', label: 'Wholesale' },
    { href: '/calculator/', label: 'Tools' },
  ],
} as const;

export function isPublicHttpsUrl(value: string | undefined): value is string {
  if (!value) {
    return false;
  }

  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.hostname.endsWith('.example.com');
  } catch {
    return false;
  }
}
