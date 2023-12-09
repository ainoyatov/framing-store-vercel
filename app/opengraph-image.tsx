import OpengraphImage from '@/components/shopify/utilities/opengraph-image';

export const runtime = 'edge';

export default async function Image() {
  return await OpengraphImage();
}