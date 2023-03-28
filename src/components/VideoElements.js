import Image from 'next/image';
import styles from '../styles/components/Video.module.css';
import React, { useState, useEffect } from 'react';
import { GrPlayFill } from 'react-icons/gr';
//harshsinghatz.hashnode.dev/lazy-load-embed-videos-by-using-facade-image-in-next-js

export const Video = ({ videoId, url }) => {
    const [imageClicked, setImageClicked] = useState(false);
    const videoThumbnailURL = `https:${url}`;

    const onThumbnailClick = () => {
        setImageClicked((prev) => !prev);
    };

    useEffect(() => {
        const playImg = document.querySelector('.play-button');

        playImg.addEventListener('click', onThumbnailClick, { once: true });
    }, []);

    // function isYoutubeOrVimeo(url) {
    //     if (url.match(/youtube/gi)) {
    //
    //     } else if (url.match(/vimeo/gi)) {
    //
    //     }
    // }
    return (
        <div>
            {!imageClicked ? (
                <div className={styles.thumbnailContainer}>
                    <Image
                        src={videoThumbnailURL}
                        alt='yt thumbnail'
                        priority
                        width='560'
                        height='315'
                        className={`play-button ${styles.videoImg}`}
                    />
                    <button className={styles.playBtn}>
                        <GrPlayFill className={styles.playIcon} />
                    </button>
                </div>
            ) : (
                <iframe
                    className={styles.video}
                    allowFullScreen
                    src={
                        imageClicked
                            ? `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1`
                            : ''
                    }
                    title='youtube video'
                />
            )}
        </div>
    );
};
