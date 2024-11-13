'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

const FetchProducts = () => {

    const [productData, setProductData] = useState([]);

    const DisplayProducts = async () => {
        try {
            const res = await fetch('/api/shop/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
        
                },
                body: JSON.stringify({})
            })
        
            if (!res.ok) throw new Error("Failed to fetch product data");
        
            const data = await res.json();
            setProductData(data.products ?? []);

        } catch (error) {
            console.log("Error fetching product data:", error)
        }
    }

    useEffect(() => {
        DisplayProducts();
    }, [])

    return (

        <div className="p-4">
            {productData.map((product:any) => (
                <div key={product.id} className="py-4">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <Image 
                    src={product.featuredImage.url}
                    alt="product images"
                    width={350}
                    height={350}
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
}

export default FetchProducts