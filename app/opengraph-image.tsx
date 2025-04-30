import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://www.artandcustomframes.com/main-logo-light.png"
          alt="Art & Custom Frames"
          width={400}
        />
      </div> 
    ),
    size
  );
}


// import OpengraphImage from '@/components/shopify/utilities/opengraph-image';

// export const runtime = 'edge';

// export default async function Image() {
//   return await OpengraphImage();
// }