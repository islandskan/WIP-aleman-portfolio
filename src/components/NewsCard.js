import styles from '../styles/News.module.css';
import Link from 'next/link';
import { hasDates } from '../utils/hasDates';

export const NewsCard = ({ card }) => {
    const { title, location, link, startDate, endDate } = card.fields;

    return (
        <div className={`${styles.newsCard}`}>
            <div className={`${styles.newsCard__txtWrapper}`}>
                {
                    <div className={styles.newsCard__dates}>
                        {hasDates('ongoing', startDate, endDate)}
                    </div>
                }
                {link ? (
                    <Link
                        className={styles.newsCard__link}
                        href={link}
                        target='_blank'
                    >
                        <h4 className={styles.newsCard__title}>{title}</h4>
                    </Link>
                ) : (
                    <h4 className={styles.newsCard__title}>{title}</h4>
                )}

                {location && (
                    <p className={styles.newsCard__location}>{location}</p>
                )}
            </div>
        </div>
    );
};
