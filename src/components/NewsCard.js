import styles from '../styles/News.module.css';
import Link from 'next/link';

export const NewsCard = ({ card }) => {
    const { title, location, link, startDate, endDate } = card.fields;

    const hasDates = (type) => {
        if (startDate || endDate) {
            const hasStartDate = startDate && <p>{startDate}</p>;
            const hasEndDate = endDate && <p>{endDate}</p>;
            return [hasStartDate, hasEndDate];
        } else {
            const typeStr = type.charAt(0).toUpperCase() + type.slice(1);
            return <p>{typeStr}</p>;
        }
    };

    return (
        <div className={`${styles.newsCard}`}>
            <div className={`${styles.newsCard__txtWrapper}`}>
                {
                    <div className={styles.newsCard__dates}>
                        {hasDates('ongoing')}
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
