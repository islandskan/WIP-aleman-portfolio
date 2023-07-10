import styles from '../styles/components/AudioElement.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const AudioElement = ({ audioObj }) => {
    const { audio, audioText } = audioObj;
    const { url, contentType } = audio.fields.file;

    return (
        <div className={styles.audioContainer}>
            <div className={styles.audioInfo}>
                <audio className={styles.audioPlayer} controls>
                    <source src={`https:${url}`} type={contentType} />
                    Your browser does not support the audio tag.
                </audio>
                <div className={`${styles.audioText} mediaInfo`}>
                    {documentToReactComponents(audioText)}
                </div>
            </div>
        </div>
    );
};
