import styles from '../styles/News.module.css';
// import SeeMoreLink from './SeeMoreLink';
import Link from 'next/link';
import { setNewsDates } from '../utils/setNewsDates';

export const NewsCard = ({ card }) => {
    const { title, location, link, startDate, endDate } = card.fields;
    console.log(link);

    return (
        <div className={`${styles.newsCard}`}>
            <div className={styles.newsCard__txtWrapper}>
                <h4 className={styles.newsCard__title}>{title}</h4>
                {/* <span className={styles.newsInfo}>
                    {setNewsDates(startDate, endDate)}
                </span> */}
                {(startDate || endDate) && (
                    <div className={styles.newsCard__dates}>
                        {startDate && <p>{startDate}</p>}
                        {endDate && <p>{endDate}</p>}
                    </div>
                )}
                {location && (
                    <p className={styles.newsCard__location}>{location}</p>
                )}
                {link && (
                    <Link
                        className={styles.newsCard__link}
                        href={link}
                        target='_blank'
                    >
                        Read more
                    </Link>
                )}
            </div>
        </div>
    );
};
