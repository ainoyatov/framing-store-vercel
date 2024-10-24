import fs from 'fs';
import path from 'path';
import DigitalCarousel from '@/components/navigation/catalog/digitalCatalog';


interface ImageData {
  filename: string;
  filepath: string;
}

export default function IntDigitalCatalog() {
  // Get the path to the image directory
  const imagesDirectory = path.join(process.cwd(), 'public/larson-juhl');
  
  // Read the image filenames from the directory
  const filenames = fs.readdirSync(imagesDirectory);

  // Map through the filenames to create the file paths
  const images: ImageData[] = filenames.map((filename) => ({
    filename,
    filepath: `/larson-juhl/${filename}`,
  }));

  // Pass the images to the client-side Carousel component
  return (
    <div>
      <DigitalCarousel images={images} />
    </div>
  );
}