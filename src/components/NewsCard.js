import styles from '../styles/News.module.css';
import Link from 'next/link';
import { setNewsDates } from '../utils/setNewsDates';

export const NewsCard = ({ card }) => {
    const { title, location, link, startDate, endDate } = card.fields;
    return (
        <div className={`${styles.newsCard}`}>
            <div className={styles.newsCard__txtWrapper}>
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

                {(startDate || endDate) && (
                    <div className={styles.newsCard__dates}>
                        {startDate && <p>{startDate}</p>}
                        {endDate && <p>{endDate}</p>}
                    </div>
                )}
                {location && (
                    <p className={styles.newsCard__location}>{location}</p>
                )}
            </div>
        </div>
    );
};
