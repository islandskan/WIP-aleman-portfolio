// https://www.w3schools.com/tags/ref_av_dom.asp
// https://www.w3schools.com/tags/tag_audio.asp
// https://www.youtube.com/watch?v=sqpg1qzJCGQ
import styles from '../styles/components/AudioElement.module.css';

export const AudioElement = ({ audio }) => {
    const { url, contentType } = audio.fields.file;

    return (
        <audio className={styles.audioPlayer} controls>
            <source src={`https:${url}`} type={contentType} />
            Your browser does not support the audio tag.
        </audio>
    );
};
