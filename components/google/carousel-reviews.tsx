

export async function Reviews () {

    // const reviews = await pullReviews();

    // if(!reviews?.length) return null;

    const reviews = ['one', 'two', 'three', 'four', 'five', 'six']
    
    // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
    const carouselReviews = [...reviews, ...reviews, ...reviews];

    return (
        <div className="w-auto overflow-x-auto pb-6 pt-1">
            <ul className="flex animate-carousel gap-4">
                {reviews.map((review, i) => (
                    <li key={i} className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3 border-2 border-blue-600">
                        {review}
                    </li>
                ))}

                {googleReviews.map((review, i) => (
                    <li key={i} className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3 border-2 border-blue-600 ">
                        {review.title}
                    </li>
                ))}
            </ul>
        </div>
    );

}


const googleReviews = [    
    {
        "id": "434",
        "handle": "first-review-handle",
        "availableForSale": true,
        "title": "The First Review Title",
        "description": "Description of the first review",
        "descriptionHtml": "",
        "options": [
            {
            "id": "402",
            "name": "Title",
            "values": [ "Default Title" ]
            }
        ],
        "priceRange": {
            "maxVariantPrice": { "amount": "249.95", "currencyCode": "USD" },
            "minVariantPrice": { "amount": "149.95", "currencyCode": "USD" }
        },
        "featuredImage": {
            "url": "https://cdn.shopify.com/s/files/1/0635/4567/1858/products/Main_b13ad453-477c-4ed1-9b43-81f3345adfd6.jpg?v=1700148100",
            "altText": "Alt text of image 1",
            "width": 1600,
            "height": 1600
        }
    },

    {
        "id": "435",
        "handle": "the-second-review-handle",
        "availableForSale": true,
        "title": "The Second Review Titlet",
        "description": "Description of the second review",
        "descriptionHtml": "",
        "options": [
            {
            "id": "403",
            "name": "Title",
            "values": [ "Default Title 2" ]
            }
        ],
        "priceRange": {
            "maxVariantPrice": { "amount": "149.95", "currencyCode": "USD" },
            "minVariantPrice": { "amount": "49.95", "currencyCode": "USD" }
        },
        "featuredImage": {
            "url": "https://cdn.shopify.com/s/files/1/0635/4567/1858/products/Main_b13ad453-477c-4ed1-9b43-81f3345adfd6.jpg?v=1700148100",
            "altText": "Alt text of image 2",
            "height": 1600
        }
    }
]