import Image from 'next/image';
import { isVerticalImg } from '../utils/isVerticalImg';

export const ProjectImage = ({ image }) => {
    const imageUrl = `https:${image.image.fields.file.url}`;
    const { imageAltText: imageInfo, imageInfoText } = image;

    console.log(image);
    const { height, width } = image.image.fields.file.details.image;

    const newMeasurements = isVerticalImg(height, width);
    return (
        <figure>
            <Image
                className={newMeasurements.className}
                src={imageUrl}
                alt={imageInfo}
                height={newMeasurements.newHeight}
                width={newMeasurements.newWidth}
                loading='lazy'
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                }}
            />
            <figcaption className={newMeasurements.className}>
                {imageInfoText}
            </figcaption>
        </figure>
    );
};
