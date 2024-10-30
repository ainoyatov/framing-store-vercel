
export default async function RecentReviews () {

    const placeID = process.env.PLACE_ID
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    //Field = reviews
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=reviews&reviews_sort=newest&key=${apiKey}`)
    const data = await response.json()
    const reviews = data.result.reviews.map((review:any) => review)

    //Field = user_ratings_total
    const rsp = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=user_ratings_total&key=${apiKey}`)
    const dt = await rsp.json()
    const totalUserReviews = dt.result.user_ratings_total
}