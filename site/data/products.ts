export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  profile: string;
  role: string;
  story: string;
  shortStory: string;
  family: 'desert' | 'woodland' | 'milk' | 'floral' | 'alpine';
  featured?: boolean;
  fragranceFree?: boolean;
};

export const products: Product[] = [
  {
    slug: 'slot-canyon',
    name: 'Slot Canyon',
    subtitle: 'River Birch & Stone',
    profile: 'Fresh water, stone, and light citrus',
    role: 'Flagship scent',
    story:
      'Inspired by cool canyon water, shadowed walls, and stone warming again when the sun reaches the narrows.',
    shortStory: 'Cool canyon water and sun-warmed stone.',
    family: 'desert',
    featured: true,
  },
  {
    slug: 'cedar-mesa',
    name: 'Cedar Mesa',
    subtitle: 'Cedar & Amber',
    profile: 'Warm cedarwood, gentle spice, and amber',
    role: 'An easygoing, woodsy bar',
    story:
      'Dry cedar, warm amber, and the clean stillness of a high-desert evening after the heat has settled.',
    shortStory: 'Dry cedar and warm amber after the day cools.',
    family: 'woodland',
    featured: true,
  },
  {
    slug: 'granola-goat-milk',
    name: 'Granola',
    subtitle: 'Goat Milk & Raw Honeycomb',
    profile: 'Warm, softly sweet, and grassy',
    role: 'A gift-friendly goat-milk bar',
    story:
      'A warm, familiar bar with a gentle honeyed character and the grounded richness of a goat-milk base.',
    shortStory: 'A warm goat-milk bar with a honeyed character.',
    family: 'milk',
    featured: true,
  },
  {
    slug: 'unscented-goat-milk',
    name: 'Unscented Goat Milk',
    subtitle: 'Simple by design',
    profile: 'Fragrance-free',
    role: 'A quiet, uncomplicated option',
    story:
      'A straightforward goat-milk bar made without added fragrance. Nothing performative—just a well-made bar of soap.',
    shortStory: 'A straightforward bar with no added fragrance.',
    family: 'milk',
    fragranceFree: true,
  },
  {
    slug: 'valley-meadow',
    name: 'Valley Meadow',
    subtitle: 'Wildflower',
    profile: 'Floral, warm, and softly sweet',
    role: 'The floral side of the collection',
    story:
      'A restrained wildflower scent inspired by brief desert blooms, open sky, and sun-warmed trails.',
    shortStory: 'Brief desert blooms and sun-warmed trails.',
    family: 'floral',
  },
  {
    slug: 'alpine-summit',
    name: 'Alpine Summit',
    subtitle: 'Black Spruce & Anise',
    profile: 'Forest resin with a subtle sweet-spice edge',
    role: 'The adventurous bar',
    story:
      'High-elevation forest air, dark spruce, and a small anise note that keeps the bar interesting without turning it sugary.',
    shortStory: 'Dark spruce and high-elevation forest air.',
    family: 'alpine',
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
