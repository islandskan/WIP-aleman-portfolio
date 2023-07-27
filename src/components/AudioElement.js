import styles from '../styles/components/AudioElement.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ProjectImage } from './ProjectImage';

export const AudioElement = ({ audioObj }) => {
    console.log(audioObj);
    const { audio, audioText, image, imageAltText, AudioImageInfo } =
        audioObj[0].fields;
    const { url, contentType } = audio.fields.file;
    const imageObj = { image, imageAltText, AudioImageInfo };
    console.log(imageObj);

    return (
        <div className={styles.audioContainer}>
            <div className={styles.audioInfo}>
                <ProjectImage image={imageObj} />
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
