import Image from 'next/image';
import { isVerticalImg } from '../utils/isVerticalImg';
import ReactMarkdown from 'react-markdown';

export const ProjectImage = ({ image }) => {
    // (image);
    const imageUrl = `https:${image.image.fields.file.url}`;
    const { imageAltText: imageInfo, imageInfoText } = image;
    const { height, width } = image.image.fields.file.details.image;
    const newMeasurements = isVerticalImg(height, width, imageInfo);
    return (
        <figure>
            <Image
                className={newMeasurements.className}
                src={imageUrl}
                alt={imageInfo}
                height={height}
                width={width}
                priority
                // loading='lazy'
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                }}
            />
            <figcaption
                className='imageInfoText'
                style={{ maxWidthidth: width }}
            >
                <ReactMarkdown>{imageInfoText}</ReactMarkdown>
            </figcaption>
        </figure>
    );
};
