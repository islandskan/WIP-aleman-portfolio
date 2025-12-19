import styles from '../styles/News.module.css';
import Link from 'next/link';
import { hasDates } from '../utils/hasDates';

export const NewsCard = ({ card }) => {
    const { title, location, link, startDate, endDate, newsInfo } = card.fields;

    return (
        <div className={`${styles.newsCard}`}>
            <div className={`${styles.newsCardTxtWrapper}`}>
                <h4 className={styles.newsCardTitle}>{title}</h4>
                {(newsInfo || location) && (
                    <div className={styles.newsInfo}>
                        {newsInfo && <p>{newsInfo}</p>}

                        {location && (
                            <p className={styles.newsCardLocation}>
                                {location}
                            </p>
                        )}
                        {link && (
                            <Link
                                className='readmoreLink'
                                href={link}
                                target='_blank'
                            >
                                <h6>Read more</h6>
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
