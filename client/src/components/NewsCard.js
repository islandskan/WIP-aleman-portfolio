// import styles from '../styles/News.module.css';
// import Link from 'next/link';
// import { formatDate } from '../utils/formatDate.js';

export const NewsCard = () => {
    return (
        <div className={styles.newsCard}>
            <h4 className={styles.newsCard__title}></h4>
            <p className={styles.newsCard__location}></p>
            <div className={styles.newsCard__dates}></div>
        </div>
    );
};
