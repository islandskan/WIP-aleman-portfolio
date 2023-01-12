import { MetaData } from '../components/MetaData';
import styles from '../styles/News.module.css';
// import { NewsCard } from '../components/NewsCard';
// import { useEffect, useState } from 'react';

// refactor to getStaticProps
const News = () => {
    // const newsElements = newsCards.map((card) => (
    //     <NewsCard key={card.sys.id} card={card} />
    // ));

    return (
        <>
            <MetaData page='Calender' />
            <div className={`container ${styles.news}`}>
                <div className={styles.newsList}></div>
            </div>
        </>
    );
};

export default News;
