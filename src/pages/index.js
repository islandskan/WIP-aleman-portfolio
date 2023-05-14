import styles from '../styles/Home.module.css';
import { MetaData } from '../components/MetaData';
import { createClient } from 'contentful';
import Image from 'next/image';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getAsset('2BmOl6mEncdulCFaB3qCcl');
    if (!res) {
        return { notFound: true };
    }

    return {
        props: {
            res,
        },
    };
}

function Home({ res }) {
    const { details, url } = res.fields.file;
    const HEIGHT = details.image.height;
    const WIDTH = details.image.width;

    console.log(HEIGHT, WIDTH);
    return (
        <>
            <MetaData page='Start' />
            <div className='container'>
                <figure className={styles.homeImg}>
                    <Image
                        alt={res.fields.title}
                        src={`https:${url}`}
                        height={HEIGHT}
                        width={WIDTH}
                    />
                </figure>
            </div>
        </>
    );
}

export default Home;
