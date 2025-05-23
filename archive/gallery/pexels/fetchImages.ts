import type { ImagesResults } from "../models/Images";
import { ImagesSchemaWithPhotos } from "../models/Images";

export default async function fetchImages(url:string): Promise<ImagesResults | undefined> {
    try{
        const res = await fetch(url, {
            headers: {
                Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY!
            }
            
        })
        
        
        if(!res.ok) throw new Error("Fetch Images error!\n")

        const imagesResults: ImagesResults = await res.json()

        // Parse data with Zod schema

        const parsedData = ImagesSchemaWithPhotos.parse(imagesResults)

        if(parsedData.total_results === 0) return undefined 
        
        return parsedData

    } catch(e) {
        // Will show in terminal console
        if(e instanceof Error) console.log(e.stack)
    }
}