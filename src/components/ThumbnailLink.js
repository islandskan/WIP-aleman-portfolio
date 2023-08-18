import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/PDFElement.module.css';
import ReactMarkdown from 'react-markdown';

export const ThumbnailLink = ({ item }) => {
    const linkImg = 'thumbnail' in item ? item.thumbnail.fields : '';

    const { height: HEIGHT, width: WIDTH } =
        item.thumbnail.fields.file.details.image;

    console.log(HEIGHT, WIDTH);
    const linkUrl =
        'linkAsset' in item
            ? `https:${item.linkAsset.fields.file.url}`
            : item.thumbnailLink;

    const linkImgOrTxt = linkImg ? (
        <Image
            src={`https:${linkImg.file.url}`}
            alt={linkImg.description}
            width={WIDTH}
            height={HEIGHT}
            loading='lazy'
            className={styles.PDFthumbnailImg}
        />
    ) : (
        item.linkText
    );

    // fix the height and width
    return (
        <div className={styles.thumbnail}>
            <Link
                href={linkUrl}
                className={`${styles.PDFLink} skipLink`}
                target='_blank'
            >
                {linkImgOrTxt}
            </Link>
            {item.linkAssetText && (
                <figcaption
                    className={`${styles.PDFthumbnailTxt} imageInfoText`}
                >
                    <ReactMarkdown>{item.linkAssetText}</ReactMarkdown>
                </figcaption>
            )}
        </div>
    );
};
