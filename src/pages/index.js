import styles from '../styles/Home.module.css';
import { MetaData } from '../components/MetaData';
import { createClient } from 'contentful';
import Image from 'next/image';
import { setContent } from '../utils/setContentIndex';
import fetchContent from '../lib/contentful';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('1DMe9YZ8X3R59cOjMv6AYt');
    if (!res) {
        return { notFound: true };
    }

    return {
        props: {
            res,
        },
    };
}

// export async function getStaticProps() {
//     const entries = await fetchContent('projects');
//     const res = entries.map((item) => {
//         return item;
//     });

//     return {
//         props: {
//             res,
//         },
//     };
// }

function Home({ res }) {
    const { content } = res.fields;
    const landingContent = content[0];
    const { details, url } = landingContent.fields.image.fields.file;

    const HEIGHT = details.image.height;
    const WIDTH = details.image.width;

    return (
        <>
            <MetaData page='Start' />
            <div className='homePageWrapper'>
                <Image
                    className={styles.homeImg}
                    alt={landingContent.fields.imageAltText}
                    src={`https:${url}`}
                    height={HEIGHT}
                    width={WIDTH}
                    priority
                />
            </div>
        </>
    );
}

export default Home;
