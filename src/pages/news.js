import { MetaData } from '../components/MetaData';
import styles from '../styles/News.module.css';
import { NewsCard } from '../components/NewsCard';
import { createClient } from 'contentful';
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

// export async function getStaticProps() {
//     const res = await fetchEntries('newsCards');
//     const newsCards = res.map((item) => {
//         return item.fields;
//     });
//     return {
//         props: {
//             newsCards,
//         },
//     };
// }
const News = ({ newsCards }) => {
    // const[cardOpen, setCardOpen] = useState(false)
    // const handleToggle = (index) => {
    //     if (clicked === index) {
    //      return setClicked("0");
    //     }
    //     setClicked(index);
    // }

    const newsElements = newsCards.map((card, index) => (
        <>
            <NewsCard key={card.sys.id} card={card} btnId={index} />
        </>
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
