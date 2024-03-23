"use client";
import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import videos from './videos';
import Video from "yet-another-react-lightbox/plugins/video";
import PhotoAlbum from 'react-photo-album';

const VideoGallery = () => {
    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(-1);

    const photos = videos.map((video:any, index:any) => ({
        src: video.poster,
        width: 1080, 
        height: 800
    }))


    return (
        <>
        <PhotoAlbum
            layout="rows"
            photos={photos}
            targetRowHeight={150}
            onClick={({ index: current }) => setIndex(current)}
        />
        <Lightbox
            index={index}
            plugins={[Video]}
            slides={videos}
            open={index >= 0}
            close={() => setIndex(-1)}
        />
        </>
    )
}

export default VideoGallery