import styles from '../styles/components/AudioElement.module.css';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const AudioElement = ({ audioObj }) => {
    const { audio, audioImage, audioImageText, audioText } = audioObj;
    const { url, contentType } = audio.fields.file;

    return (
        <div className={styles.audioContainer}>
            <div className={styles.audioImageContainer}>
                <h4>{audioImageText}</h4>
                <Image
                    src={`https:${audioImage.fields.file.url}`}
                    alt={audioImageText}
                    height={audioImage.fields.file.details.image.height}
                    width={audioImage.fields.file.details.image.width}
                />
                <div className={audioText}>
                    {documentToReactComponents(audioText)}
                </div>
            </div>
            <audio className={styles.audioPlayer} controls>
                <source src={`https:${url}`} type={contentType} />
                Your browser does not support the audio tag.
            </audio>
        </div>
    );
};
