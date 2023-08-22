import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { RiPlayFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import styles from '../styles/components/Video.module.css';
import ReactMarkdown from 'react-markdown';

export const Video = ({ video }) => {
    const [hasWindow, setHasWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHasWindow(true);
        }
    }, []);

    const { videoThumbnail, videoUrl, internalName, videoText } =
        video[0].fields;
    const videoThumbnailURL = `https:${videoThumbnail.fields.file.url}`;
    const { height: HEIGHT, width: WIDTH } =
        videoThumbnail.fields.file.details.image;

    return (
        // <div className={`video ${styles.videoContainer}`}>
        <div className='videoContainer'>
            {hasWindow && (
                <ReactPlayer
                    url={videoUrl}
                    className={styles.reactPlayer}
                    controls
                    width='100%'
                    height='100%'
                    playIcon={
                        <IconContext.Provider
                            value={{
                                color: 'white',
                                size: '20%',
                                className: 'videoBtn',
                            }}
                        >
                            <RiPlayFill />
                        </IconContext.Provider>
                    }
                    light={
                        <Image
                            src={videoThumbnailURL}
                            alt={internalName}
                            height={HEIGHT}
                            width={WIDTH}
                        />
                    }
                />
            )}
            <figcaption
                className={`${styles.videoText} imageInfoText`}
                style={{ maxWidth: WIDTH }}
            >
                <ReactMarkdown>{videoText}</ReactMarkdown>
            </figcaption>
        </div>
    );
};
