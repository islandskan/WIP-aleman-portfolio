import { MetaData } from '../components/MetaData';
import styles from '../styles/News.module.css';
import { NewsCard } from '../components/NewsCard';
// import { useEffect, useState } from 'react';
// import { fetchContent } from '../api/contentful';

// export async function getStaticProps() {
//     // the point of getStaticProps is to get data from the headless CMS at build time
//     const { newsCardCollection } = await fetchContent(`
//     query {
//         newsCardCollection {
//           items {
//                 startDate
//                 endDate
//                 calenderUrl
//                 calenderUrlName
//             }
//           }
//         }
//       }
//     `);

//     return {
//         props: {
//             newsCard: newsCardCollection.items,
//         },
//     };
// }
const News = () => {
    // console.log(newsCard);
    // const newsElements = newsCards.map((card) => (
    //     <NewsCard key={card.sys.id} card={card} />
    // ));

    return (
        <>
            <MetaData page='Contact' />
            <div className={`container ${styles.news}`}>
                <div className={styles.newsList}></div>
            </div>
        </>
    );
};

export default News;
