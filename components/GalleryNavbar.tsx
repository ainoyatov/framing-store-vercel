
import GallerySearch from "./GallerySearch";

export default function GalleryNavbar() {
  return (
    <header className="sticky md:my-6">
        <nav className="gap-4 p-4 mx-auto text-black sm:text-left">
            <GallerySearch />
        </nav>
    </header>
  )
}
