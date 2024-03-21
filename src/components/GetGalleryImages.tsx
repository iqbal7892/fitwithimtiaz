import path from 'path';
import fs from 'fs';

const GetGalleryImages = () => {
    
    const imagesDirectory = path.join(process.cwd(), 'public/assets/images/gallery');
  const filenames = fs.readdirSync(imagesDirectory);

  const images = filenames.map((filename) => {
    return {
      src: `/assets/images/gallery/${filename}`
    };
  });
  console.log('images', images)

    return images
}

export default GetGalleryImages