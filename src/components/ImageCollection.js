import { ProjectImage } from './ProjectImage.js';

export const ImageCollection = ({ images }) => {
    return (
        <>
            {images.map((image) => (
                <ProjectImage key={image.sys.id} image={image.fields} />
            ))}
        </>
    );
};
