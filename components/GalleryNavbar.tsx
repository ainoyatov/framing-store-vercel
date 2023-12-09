
import Link from "next/link";
import GallerySearch from "./GallerySearch";

export default function GalleryNavbar() {
  return (
    <header className="sticky md:my-6">
        <nav className="gap-4 p-4 mx-auto text-black sm:text-left">
            {/* <h1 className="text-2xl sm:text-3xl border-2 rounded-xl shadow-xl text-center whitespace-nowrap px-8">
                <Link href='/gallery'>
                    Image Gallery
                </Link>
            </h1> */}
            <GallerySearch />
        </nav>
    </header>
  )
}
