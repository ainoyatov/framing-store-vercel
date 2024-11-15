import { getCollectionProducts } from '@/lib/shopify';
import Link from 'next/link';
import { GridTileImage } from '@/components/shopify/grid/tile';;
import { getProducts } from "@/lib/shopify/shop/utils";
import ShopifyFetch from '@/lib/shopify/new-store';

export async function CarouselProducts() {

  const products = await ShopifyFetch({query: getProducts})

  const shopifyProducts = products.data.products.edges.map((edge) => edge.node)

  const carouselProducts = [...shopifyProducts, ...shopifyProducts, ...shopifyProducts]

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <div key={`${product.handle}${i}`} className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
            <Link href={`/product/${product.handle}`} className='relative h-full w-full bg-red-400'>
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                 }}
                 src={product.featuredImage?.url}
                 fill
                 sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
               />
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

// export async function CarouselProducts() {
//   // Collections that start with `hidden-*` are hidden from the search page.
//   const products = await getCollectionProducts({ collection: 'Winter' });
  
  

//   if (!products?.length) return null;

//   // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
//   const carouselProducts = [...products, ...products, ...products];

//   return (
//     <div className="w-full overflow-x-auto pb-6 pt-1">
//       <ul className="flex animate-carousel gap-4">
//         {carouselProducts.map((product, i) => (
//           <li
//             key={`${product.handle}${i}`}
//             className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
//           >
//             <Link href={`/product/${product.handle}`} className="relative h-full w-full">
//               <GridTileImage
//                 alt={product.title}
//                 label={{
//                   title: product.title,
//                   amount: product.priceRange.maxVariantPrice.amount,
//                   currencyCode: product.priceRange.maxVariantPrice.currencyCode
//                 }}
//                 src={product.featuredImage?.url}
//                 fill
//                 sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
//               />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
