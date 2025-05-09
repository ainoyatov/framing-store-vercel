import GalleryImages from "../../GalleryImages";

type Props = {
    params: {
        myParams: (string | undefined)[]
    }
}

export function generateMetadata({params: {myParams}}: Props) {

    const topic = myParams?.[0] ?? "curated"
    const page = myParams?.[1] ?? "1"

    return{
        title: `Results for ${topic} - Page ${page}`
    }
} 

export default function SearchResults({params: {myParams} }: Props) {

    const topic = myParams?.[0] ?? "curated"
    const page = myParams?.[1] ?? "1"

    return (
        <GalleryImages topic={topic} page={page} />
    )
}