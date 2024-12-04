
export default async function TotalReviewCount () {

    const placeID = process.env.PLACE_ID!
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=user_ratings_total&key=${apiKey}`

    // Get the total number of reviews
    const reviewTotal = async () => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })

        return response.json()
    }

    const data = await reviewTotal()
    
    const reviewTotalnum = data.result.user_ratings_total
    
    return reviewTotalnum;
}