import { MetaData } from '../../components/MetaData.js';
import { createClient } from 'contentful';
import { ImageCollection } from '../../components/ImageCollection.js';
import styles from '../../styles/Project.module.css';
import { GoBackLink } from '../../components/GoBackLink.js';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    // const post = await client
    // .getEntries({
    //   content_type: "blogPost",
    //   limit: 1,
    //   include: 10,
    //   "fields.slug": "the-power-of-the-contentful-rich-text-field",
    // })
    // .then((entry) => entry)
    // .catch(console.error);

    const res = await client
        .getEntries({
            content_type: 'archiveGroup',
            include: 10,
        })
        .then((entry) => entry)
        .catch(console.error);
    if (!res) {
        return { notFound: true };
    }
    return {
        props: {
            res,
        },
    };
}
function Archive({ res }) {
    const title = 'Archive of Paintings';
    const slug = 'archive-of-paintings';
    const { items } = res;
    const archiveCollection = items.map((item) => (
        <div key={item.sys.id} className={styles.archiveGroup}>
            <h3>{`${item.fields.title} ${item.fields.year}`}</h3>
            <ImageCollection images={item.fields.images} />
        </div>
    ));
    return (
        <>
            <MetaData page={title} />
            <div className='container'>
                <div className={styles.archiveContainer}>
                    <div
                        className={`page-title-wrapper ${styles.title__wrapper}`}
                    >
                        <h2 className='projektTitle'>{title}</h2>
                    </div>

                    <div className={styles.archiveWrapper}>
                        {archiveCollection}
                    </div>
                </div>
                <GoBackLink slug={slug} />
            </div>
        </>
    );
}

export default Archive;
