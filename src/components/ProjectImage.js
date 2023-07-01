import Image from 'next/image';
import styles from '../styles/Project.module.css';
import { isVerticalImg } from '../utils/isVerticalImg';

export const ProjectImage = ({ image }) => {
    const imageUrl = `https:${image.image.fields.file.url}`;
    const { imageAltText: imageInfo } = image;

    const { height, width } = image.image.fields.file.details.image;

    // console.log(isVerticalImg(height, width, imageUrl));
    return (
        <figure className={styles.projectImageFigure}>
            <Image
                className={styles.projectImage}
                src={imageUrl}
                alt={imageInfo}
                height={height}
                width={width}
                loading='lazy'
                // onError={(e) => console.log(e.target)}
                // onLoadingComplete={(img) => console.log(img.height, img.width)}
                // placeholder='blur'
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                }}
            />
            <figcaption>{imageInfo}</figcaption>
        </figure>
    );
};
