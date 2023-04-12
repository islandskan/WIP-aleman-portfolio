import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

export const Video = ({ video }) => {
    const [hasWindow, setHasWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHasWindow(true);
        }
    }, []);

    const { videoThumbnail, videoUrl, internalName } = video;
    const videoThumbnailURL = `https:${videoThumbnail.fields.file.url}`;
    const { height: HEIGHT, width: WIDTH } =
        videoThumbnail.fields.file.details.image;

    return (
        <div>
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
                            height={HEIGHT}
                            width={WIDTH}
                        />
                    }
                />
            )}
        </div>
    );
};
