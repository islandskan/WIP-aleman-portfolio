import Image from 'next/image';
import styles from '../styles/Project.module.css';
export const ProjectImage = ({ image }) => {
    console.log(image);
    const imageUrl = `https:${image.image.fields.file.url}`;
    const imageInfo = [image.imageTitle, image.materialOrMethod, image.size];

    const { height, width } = image.image.fields.file.details.image;

    const isVerticalImg = () => {};

    console.log(imageUrl);
    console.log(imageInfo);
    return (
        <figure className={styles.projectImageFigure}>
            <Image
                className={styles.projectImage}
                src={imageUrl}
                alt={image.imageAltText}
                height={500}
                width={400}
                loading='lazy'
                placeholder='blur'
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                }}
            />
            <figcaption>{imageInfo.join(' - ')}</figcaption>
        </figure>
    );
};
