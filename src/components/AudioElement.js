import styles from '../styles/components/AudioElement.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
export const AudioElement = ({ audioObj }) => {
    audioObj;
    const {
        audio,
        audioText,
        audioImage,
        audioImgAlt,
        audioImgInfo,
        audioTitle,
    } = audioObj[0].fields;
    audioTitle;
    const { url, contentType } = audio.fields.file;
    const { height, width } = audioImage.fields.file.details.image;
    height, width;

    return (
        <div className={`${styles.audioContainer} audioContainer`}>
            <figure>
                <Image
                    className={styles.audioImg}
                    src={`https:${audioImage.fields.file.url}`}
                    alt={audioImgAlt}
                    height={height}
                    width={width}
                    loading='lazy'
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                />
                <figcaption className='imageInfoText'>
                    <ReactMarkdown>{audioImgInfo}</ReactMarkdown>
                </figcaption>
            </figure>
            <audio className={styles.audioPlayer} controls>
                <source src={`https:${url}`} type={contentType} />
                Your browser does not support the audio tag.
            </audio>
            <div
                className={`${styles.audioText} mediaInfo`}
                style={{ maxWidth: width }}
            >
                <p className={styles.audioTitle}>{audioTitle}</p>
                {documentToReactComponents(audioText)}
            </div>
        </div>
    );
};
