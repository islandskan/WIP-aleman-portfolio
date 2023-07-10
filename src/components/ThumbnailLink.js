import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/PDFElement.module.css';

export const ThumbnailLink = ({ item }) => {
    const linkImg = 'thumbnail' in item ? item.thumbnail.fields : '';
    console.log(linkImg);

    const linkUrl =
        'linkAsset' in item
            ? `https:${item.linkAsset.fields.file.url}`
            : item.thumbnailLink;

    const linkImgOrTxt = linkImg ? (
        <Image
            src={`https://${linkImg.file.url}`}
            alt={linkImg.description}
            width={300}
            height={500}
            loading='lazy'
            className={styles.PDFthumbnailImg}
        />
    ) : (
        item.linkText
    );

    return (
        <div className={styles.PDFthumbnail}>
            <Link
                href={linkUrl}
                className={`${styles.PDFLink} skipLink`}
                target='_blank'
            >
                {linkImgOrTxt}
            </Link>
            {item.linkAssetText && (
                <figcaption className={styles.PDFthumbnailTxt}>
                    {item.linkAssetText}
                </figcaption>
            )}
        </div>
    );
};
