import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/PDFElement.module.css';

export const ThumbnailLink = ({ item }) => {
    const linkImg = `https:${item.thumbnail.fields.file.url}`;

    const linkUrl =
        'linkAsset' in item
            ? `https:${item.linkAsset.fields.file.url}`
            : item.thumbnailLink;

    const { height: HEIGHT, width: WIDTH } =
        item.thumbnail.fields.file.details.image;

    return (
        <figure className={styles.PDFthumbnail}>
            <Link href={linkUrl} className={styles.PDFLink} target='_blank'>
                <Image
                    src={linkImg}
                    alt={item.thumbnail.fields.title}
                    width={WIDTH / 1.5}
                    height={HEIGHT / 1.5}
                    loading='lazy'
                    className={styles.PDFthumbnailImg}
                />
            </Link>
            {item.linkAssetText && (
                <figcaption className={styles.PDFthumbnailTxt}>
                    {item.linkAssetText}
                </figcaption>
            )}
        </figure>
    );
};
