import { MetaData } from '../components/MetaData';
import styles from '../styles/News.module.css';
import { NewsCard } from '../components/NewsCard';
import { createClient } from 'contentful';
import { sortCards } from '../utils/sortNews';

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
    const sortedNewsCards = sortCards(newsCards);

    const newsElements = sortedNewsCards.map((card) => (
        <NewsCard key={card.sys.id} card={card} />
    ));

    return (
        <>
            <MetaData page='News' />

            <div className={styles.newsList}>{newsElements}</div>
        </>
    );
};

export default News;
