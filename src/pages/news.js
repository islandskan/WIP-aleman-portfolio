import { MetaData } from '../components/MetaData';
import styles from '../styles/News.module.css';
import { NewsCard } from '../components/NewsCard';
import { createClient } from 'contentful';
import { sortNewsCards } from '../utils/sortNews';
// import { fetchEntries } from '../api/fetchEntries';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntries({ content_type: 'newsCards' });
    if (!res) {
        return { notFound: true };
    }

    return {
        props: {
            newsCards: res.items,
        },
    };
}

const News = ({ newsCards }) => {
    const sortedNewsCards = sortNewsCards(newsCards);

    const newsElements = sortedNewsCards.map((card) => (
        <NewsCard key={card.sys.id} card={card} />
    ));

    return (
        <>
            <MetaData page='News' />
            <div id='news' className={`container ${styles.news}`}>
                <div className={styles.newsList}>{newsElements}</div>
            </div>
        </>
    );
};

export default News;
