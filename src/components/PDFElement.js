import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/PDFElement.module.css';

export const PDFElement = ({ item }) => {
    const PDFimg = `https:${item.thumbnail.fields.file.url}`;
    const PDFurl = `https:${item.pdfAsset.fields.file.url}`;

    const { height: HEIGHT, width: WIDTH } =
        item.thumbnail.fields.file.details.image;

    return (
        <figure className={styles.PDFthumbnail}>
            <Link href={PDFurl} className={styles.PDF__link}>
                <Image
                    src={PDFimg}
                    alt={item.thumbnail.fields.title}
                    width={WIDTH / 1.5}
                    height={HEIGHT / 1.5}
                    loading='lazy'
                    className={styles.PDFthumbnail__img}
                />
            </Link>
            <figcaption className={styles.PDFthumbnail__txt}>
                {item.pdfText}
            </figcaption>
        </figure>
    );
};

export const BlogImg = ({ item }) => {
    console.log(item);

    return (
        <figure className={styles.PDFthumbnail}>
            <Link
                href={item.thumbnailLink}
                className={styles.PDF__link}
                target='_blank'
            >
                <Image
                    src={`https:${item.thumbnail.fields.file.url}`}
                    alt={item.thumbnail.fields.title}
                    width={item.thumbnail.fields.file.details.image.width}
                    height={item.thumbnail.fields.file.details.image.height}
                    className={styles.PDFthumbnail__img}
                />
            </Link>
            <figcaption className={styles.PDFthumbnail__txt}></figcaption>
        </figure>
    );
};
