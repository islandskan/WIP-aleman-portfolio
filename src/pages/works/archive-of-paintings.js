import { MetaData } from '../../components/MetaData.js';
import { createClient } from 'contentful';
import { ImageElement } from '../../components/ImageElements.js';
import styles from '../../styles/Project.module.css';
import { GoBackLink } from '../../components/GoBackLink.js';

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
    const { title, projectImages, slug } = res.fields;

    console.log(res);

    // const archiveImagesImageCollection = projectImages.map((image) => (
    //     <ImageElement key={image.sys.id} image={image} />
    // ));
    return (
        <>
            <MetaData page='Archive' />
            <div id={slug} className='container'>
                {/* <div className={styles.archiveContainer}>
                    <div
                        className={`page-title-wrapper ${styles.title__wrapper}`}
                    >
                        <h2 className='projektTitle'>{title}</h2>
                        <h3 className='projektYear'>{year}</h3>
                    </div>

                    <div className={styles.archiveWrapper}>
                        {archiveImagesImageCollection}
                    </div>
                </div> */}
                <GoBackLink slug={slug} />
            </div>
        </>
    );
}

export default Archive;
