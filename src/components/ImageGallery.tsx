"use client";
import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import photos from './photo';
import PhotoAlbum from 'react-photo-album';

const ImageGallery = () => {
    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(-1);

    const images = [{src: "assets/images/gallery/1.JPG"}, {src: "assets/images/gallery/1.JPG"},
    {src: "assets/images/gallery/2.JPG"}, {src: "assets/images/gallery/3.PNG"},
    {src: "assets/images/gallery/4.PNG"}, {src: "assets/images/gallery/5.JPG"}]

    return (
      <>
        <PhotoAlbum
            layout="rows"
            photos={photos.slice(0, 8)}
            targetRowHeight={250}
            onClick={({ index: current }) => setIndex(current)}
        />
        <Lightbox
            index={index}
            slides={photos.slice(0, 8)}
            open={index >= 0}
            close={() => setIndex(-1)}
        />
      </>
    )
}

export default ImageGallery