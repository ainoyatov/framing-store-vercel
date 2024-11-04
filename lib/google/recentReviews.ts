
export default async function RecentReviews () {

    const placeID = process.env.PLACE_ID
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=reviews&reviews_sort=newest&key=${apiKey}`

    // Get the most recent 5 reviews
    const getReviews = async () => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })

        return response.json()
    }

    const data = await getReviews();
    
    const reviews = data.result.reviews.map((review:any) => review)

    return reviews;

    //Field = user_ratings_total
    // const rsp = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=user_ratings_total&key=${apiKey}`)
    // const dt = await rsp.json()
    // const totalUserReviews = dt.result.user_ratings_total
}