import fetchImages from "@/app/lib/fetchImages";
import type { ImagesResults } from "@/app/models/Images";
import ImgContainer from "./ImgContainer";
import addBlurredDataUrls from "@/app/lib/getBase64";
import GalleryNavbar from "./GalleryNavbar";
import getPrevNextPages from "@/app/lib/getPrevNextPages";
import GalleryFooter from "./GalleryFooter";
import GallerySearch from "./GallerySearch";

type Props = {
  topic?: string | undefined,
  page?: string | undefined,
}

export default async function Gallery({topic = 'curated', page}: Props) {
    
    let url
    if (topic === 'curated' && page) { // browsing beyond home page
      url = `https://api.pexels.com/v1/curated?page=${page}`
    } else if (topic === 'curated') { // home page
      url = 'https://api.pexels.com/v1/curated'
    } else if (!page) { // 1st page of search results
      url = `https://api.pexels.com/v1/search?query=${topic}`
    } else { // search results beyond 1st page
      url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`
      
    }

    const images: ImagesResults | undefined = await fetchImages(url)

    if (!images || images.per_page === 0) return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>

    const photosWithBlur = await addBlurredDataUrls(images)

    const {prevPage, nextPage} = getPrevNextPages(images)

    const footerProps = {topic, page, nextPage, prevPage}


  return (
    <div>
      <div>
        <GalleryNavbar />
      </div>
      <div className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
          {photosWithBlur.map(photo => (
              <ImgContainer key={photo.id} photo={photo}/>
          ))}
      </div>
       <GalleryFooter {...footerProps} />
    </div>
  )
}


