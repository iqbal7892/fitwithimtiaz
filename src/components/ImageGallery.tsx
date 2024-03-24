"use client";
import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from 'react-photo-album';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ImageGallery = () => {
    const [index, setIndex] = React.useState(-1);
    const photos = []

    for (let i = 1; i <= 9; i++) {
      photos.push({
        src: `assets/images/gallery/${i}.jpg`,
        width: 1080,
        height: 800
      });
    }

    return (
      <>
        <PhotoAlbum
          layout="rows"
          photos={photos.slice(0, 8)}
          targetRowHeight={250}
          onClick={({ index: current }) => setIndex(current)}
          renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
            <div style={wrapperStyle} className='relative group'>
              <div className="flex items-center justify-center absolute inset-5 bg-primary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <FontAwesomeIcon icon={faPlus} className="fas fa-check text-white mr-2 mt-1 text-3xl"/>
              </div>
              {renderDefaultPhoto({ wrapped: true })}
            </div>
          )}
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