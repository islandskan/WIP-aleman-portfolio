import styles from '../styles/components/AudioElement.module.css';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const AudioElement = ({ audioObj }) => {
    const { audio, audioImage, audioImageText, audioText } = audioObj;
    const { url, contentType } = audio.fields.file;

    return (
        <div className={styles.audioContainer}>
            <div className={styles.audioInfo}>
                <audio className={styles.audioPlayer} controls>
                    <source src={`https:${url}`} type={contentType} />
                    Your browser does not support the audio tag.
                </audio>
                <div className={styles.audioText}>
                    {documentToReactComponents(audioText)}
                </div>
            </div>
        </div>
    );
};
