import Image from 'next/image';
import styles from '../styles/Project.module.css';
export const ProjectImage = ({ image }) => {
    console.log(image);
    const imageUrl = `https:${image.image.fields.file.url}`;
    const imageInfo = [image.imageTitle, image.materialOrMethod, image.size];

    console.log(imageUrl);
    console.log(imageInfo);
    return (
        <figure className={styles.projectImageFigure}>
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
