import { MetaData } from '../../components/MetaData.js';
import { createClient } from 'contentful';
import { ImageElement } from '../../components/ImageElements';
import styles from '../../styles/Project.module.css';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('1WWyIGGnTjJ00GoQLnL5pl');
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
    console.log(res);
    const { title, year, projectImages, slug } = res.fields;

    const archiveImagesImageCollection = projectImages.map((image) => (
        <ImageElement key={image.sys.id} image={image} />
    ));
    return (
        <>
            <MetaData page='Archive' />
            <div id={slug} className='container'>
                <div
                    className={`projectContainer ${styles.archive__container}`}
                >
                    <div
                        className={`page-title-wrapper ${styles.title__wrapper}`}
                    >
                        <h2 className='projektTitle'>{title}</h2>
                        <h3 className='projektYear'>{year}</h3>
                    </div>
                    {/* <p>{content[0].fields.textParagraph}</p> */}
                    <div className={styles.archiveContainer}>
                        {archiveImagesImageCollection}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Archive;
