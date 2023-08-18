import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import styles from '../styles/Project.module.css';
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
        <div className={`video ${styles.videoContainer}`}>
            {hasWindow && (
                <ReactPlayer
                    url={videoUrl}
                    controls
                    width='100%'
                    height='100%'
                    light={
                        <Image
                            src={videoThumbnailURL}
                            alt={internalName}
                            height={350}
                            width={560}
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
