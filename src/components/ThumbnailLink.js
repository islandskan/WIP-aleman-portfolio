import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/PDFElement.module.css';

export const ThumbnailLink = ({ item }) => {
    console.log(item);
    const linkImg = `https:${item.thumbnail.fields.file.url}`;

    const linkUrl =
        'linkAsset' in item
            ? `https:${item.linkAsset.fields.file.url}`
            : item.thumbnailLink;

    const { height: HEIGHT, width: WIDTH } =
        item.thumbnail.fields.file.details.image;

    return (
        <figure className={styles.PDFthumbnail}>
            <Link href={linkUrl} className={styles.PDF__link} target='_blank'>
                <Image
                    src={linkImg}
                    alt={item.thumbnail.fields.title}
                    width={WIDTH / 1.5}
                    height={HEIGHT / 1.5}
                    loading='lazy'
                    className={styles.PDFthumbnail__img}
                />
            </Link>
            {item.linkAssetText && (
                <figcaption className={styles.PDFthumbnail__txt}>
                    {item.linkAssetText}
                </figcaption>
            )}
        </figure>
    );
};
