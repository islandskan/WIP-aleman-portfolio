import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/PDFElement.module.css';

export const PDFElement = ({ hilmaPDF }) => {
    const PDFimg = `https:${hilmaPDF.thumbnail.fields.file.url}`;
    const PDFurl = `https:${hilmaPDF.pdfAsset.fields.file.url}`;
    const { height: HEIGHT, width: WIDTH } =
        hilmaPDF.thumbnail.fields.file.details.image;

    return (
        <figure className={styles.PDFthumbnail}>
            <Link href={PDFurl} className={styles.PDF__link}>
                <Image
                    src={PDFimg}
                    alt={hilmaPDF.thumbnail.fields.title}
                    width={WIDTH / 1.5}
                    height={HEIGHT / 1.5}
                    loading='lazy'
                    className={styles.PDFthumbnail__img}
                />
            </Link>
            <figcaption className={styles.PDFthumbnail__txt}>
                {hilmaPDF.pdfText}
            </figcaption>
        </figure>
    );
};
