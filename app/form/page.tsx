import ManualCatalog from '../../components/navigation/catalog/manualCatalog'
import fs from 'fs';
import path from 'path';


interface ImgData {
    filename: string,
    filepath: string,
}

export default function SearchFrames () {

    // Get the path to the image directory
    const imgDirectory = path.join(process.cwd(), 'public/larson-juhl');

    // Read the image filenames from the directory
    const imgFilesnames = fs.readdirSync(imgDirectory);

    // Map through the filenames to create the file paths
    const img: ImgData[] = imgFilesnames.map((filename) => ({
        filename,
        filepath: `public/larson-juhl/${filename}`,
    }))

    // Pass the images to the client-side Carousel component

    return (
        <div>
            <ManualCatalog img={img}/>
        </div>
    );
}