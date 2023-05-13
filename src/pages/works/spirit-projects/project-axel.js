import { MetaData } from '../../../components/MetaData.js';
import { createClient } from 'contentful';
import styles from '../../../styles/Project.module.css';
import { getProjectTxt } from '../../../utils/getProjectContent.js';
import { ImageCollection } from '../../../components/ImageCollection.js';
import { Video } from '../../../components/Video.js';
import { GoBackLink } from '../../../components/GoBackLink.js';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('4eILv8i9D1rPwYnrXvJLoq');
    if (!res) {
        return { notFound: true };
    }
    return {
        props: {
            res,
        },
    };
}

function Axel({ res }) {
    const { title, content, slug } = res.fields;
    const axelImages = content.slice(2);
    const axelVideo = content[1].fields;

    return (
        <>
            <MetaData page='Project Axel' />
            <div className='container'>
                <div className='projectContainer'>
                    <div className='page-title-wrapper'>
                        <h2 className='projektTitle'>{title}</h2>
                    </div>
                    <p>{getProjectTxt(content)}</p>
                    <div className={styles.videoContainer}>
                        <Video video={axelVideo} />
                    </div>
                    <div className='imageContainer'>
                        <ImageCollection images={axelImages} />
                    </div>
                </div>
                <GoBackLink slug={slug} />
            </div>
        </>
    );
}

export default Axel;
