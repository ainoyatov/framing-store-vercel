import Cart from '@/components/shopify/cart';
import OpenCart from '@/components/shopify/cart/open-cart';
import { getMenu } from '@/lib/shopify';
import { Suspense } from 'react';

const { SITE_NAME } = process.env;

export default async function ShopifyNavbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="flex items-center">
      <div className="flex w-full items-center mr-8">
        <div className="flex justify-start md:w-1/3 ">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
  