import Image from 'next/image';
import styles from '../styles/Project.module.css';
export const ImageElement = ({ image }) => {
    const imageUrl = `https:${image.fields.file.url}`;
    const imageAlt = image.fields.description;
    return (
        <figure className={styles.archiveImgFigure}>
            <Image
                className={styles.archiveImg}
                src={imageUrl}
                alt={imageAlt}
                height={350}
                width={300}
                loading='lazy'
            />
        </figure>
    );
};
