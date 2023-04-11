import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/PDFElement.module.css';

export const ThumbnailLink = ({ item }) => {
    const linkImg = `https:${item.thumbnail.fields.file.url}`;

    const linkUrl =
        'pdfAsset' in item
            ? `https:${item.pdfAsset.fields.file.url}`
            : item.thumbnailLink;

    const { height: HEIGHT, width: WIDTH } =
        item.thumbnail.fields.file.details.image;

    return (
        <figure className={styles.PDFthumbnail}>
            <Link href={linkUrl} className={styles.PDF__link}>
                <Image
                    src={linkImg}
                    alt={item.thumbnail.fields.title}
                    width={WIDTH / 1.5}
                    height={HEIGHT / 1.5}
                    loading='lazy'
                    className={styles.PDFthumbnail__img}
                />
            </Link>
            {item.pdfText && (
                <figcaption className={styles.PDFthumbnail__txt}>
                    {item.pdfText}
                </figcaption>
            )}
        </figure>
    );
};
