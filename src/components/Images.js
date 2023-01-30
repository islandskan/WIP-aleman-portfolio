import Image from 'next/image';

export const ProjectThumbnail = ({ url, alt, height, width, className }) => {
    return (
        <Image
            src={url}
            alt={alt}
            height={height}
            width={width}
            className={className}
        />
    );
};
