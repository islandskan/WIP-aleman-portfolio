import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/PDFElement.module.css';
import ReactMarkdown from 'react-markdown';

export const ThumbnailLink = ({ item }) => {
    /*
    Make a "Read more text"
    */
    const linkImg =
        'thumbnail' in item.fields ? item.fields.thumbnail.fields : '';

    const { height: HEIGHT, width: WIDTH } =
        item.fields.thumbnail.fields.file.details.image;

    const linkUrl =
        'linkAsset' in item.fields
            ? `https:${item.fields.linkAsset.fields.file.url}`
            : item.fields.thumbnailLink;

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
        item.fields.linkAssetText
    );

    return (
        <div className={styles.thumbnail}>
            {linkImgOrTxt}

            <div className={styles.thumbnailInfo}>
                {item.fields.linkAssetText && (
                    <figcaption
                        className={`${styles.PDFthumbnailTxt} imageInfoText`}
                        style={{ maxWidth: WIDTH }}
                    >
                        <ReactMarkdown>
                            {item.fields.linkAssetText}
                        </ReactMarkdown>
                    </figcaption>
                )}

                <Link
                    href={linkUrl}
                    className={`${styles.PDFLink} readmoreLink`}
                    target='_blank'
                >
                    <h6>Read more</h6>
                </Link>
            </div>
        </div>
    );
};
