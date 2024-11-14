'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

interface ProductProps {
  id: string;
  title: string;
  description: string;
  featuredImage: {
    url: string;
    width: number;
    height: number;
  };
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
}

const FetchProducts = () => {
  const [productData, setProductData] = useState<ProductProps[]>([]);

  const DisplayProducts = async () => {
    try {
      const res = await fetch('/api/shop/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (!res.ok) throw new Error("Failed to fetch product data");

      const data = await res.json();
      setProductData(data.products ?? []);
    } catch (error) {
      console.log("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    DisplayProducts();
  }, []);

  return (
    <div className="p-4">
      {productData.map((product: ProductProps) => (
        <div key={product.id} className="py-4">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <Image 
            src={product.featuredImage.url}
            alt="product images"
            width={350}
            height={350}
            // Uncomment the lines below if you want to use the original image dimensions
            // width={product.featuredImage.width}
            // height={product.featuredImage.height}
          />
          <div className="flex">
            {product.priceRange.maxVariantPrice.currencyCode}
            {` `}
            {product.priceRange.maxVariantPrice.amount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchProducts;