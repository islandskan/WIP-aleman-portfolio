import styles from '../styles/News.module.css';
import Link from 'next/link';
import { hasDates } from '../utils/hasDates';

export const NewsCard = ({ card }) => {
    const { title, location, link, startDate, endDate } = card.fields;

    return (
        <div className={`${styles.newsCard}`}>
            <div className={`${styles.newsCardTxtWrapper}`}>
                {link ? (
                    <Link
                        className={styles.newsCardLink}
                        href={link}
                        target='_blank'
                    >
                        <h4 className={styles.newsCardTitle}>{title}</h4>
                    </Link>
                ) : (
                    <h4 className={styles.newsCardTitle}>{title}</h4>
                )}

                {location && (
                    <p className={styles.newsCardLocation}>{location}</p>
                )}
            </div>
        </div>
    );
};
