import styles from '../styles/News.module.css';
import SeeMoreLink from './SeeMoreLink';
import { GrLinkNext } from 'react-icons/gr';
import { setNewsDates } from '../utils/setNewsDates';
import { useState } from 'react';

export const NewsCard = ({ card, btnId }) => {
    const { title, location, link, startDate, endDate } = card.fields;

    const [openNews, setOpenNews] = useState(false);

    const handleClick = () => {
        setOpenNews((prev) => !prev);
    };

    const isOpen = openNews ? `${styles.open}` : '';

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
                <button
                    className={styles.linkIcon__wrapper}
                    onClick={handleClick}
                >
                    <GrLinkNext
                        key={btnId}
                        className={`${styles.linkIcon} ${isOpen}`}
                    />
                </button>
                {/* {openNews && (
                        <div className={styles.newsCard__moreInfo}>
                            {link && (
                                <SeeMoreLink
                                    slug={link}
                                    linkClass={styles.newsLink}
                                    text='Read More'
                                    srLinkName={`about ${title}`}
                                />
                            )}
                        </div>
                    )} */}
            </div>
        </div>
    );
};
