import Image from 'next/image';
import styles from '../styles/Project.module.css';
export const ProjectImage = ({ image, ariaSetSize, index }) => {
    const imageUrl = `https:${image.image.fields.file.url}`;
    const imageInfo = [image.imageTitle, image.materialOrMethod, image.size];
    return (
        <figure
            className={styles.projectImageFigure}
            aria-setsize={ariaSetSize}
            aria-posinset={index}
        >
            <Image
                className={styles.projectImage}
                src={imageUrl}
                alt={image.imageAltText}
                height={900}
                width={800}
                loading='lazy'
            />
            <figcaption>{imageInfo.join(' - ')}</figcaption>
        </figure>
    );
};
