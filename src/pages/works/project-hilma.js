import { MetaData } from '../../components/MetaData.js';
import { ThumbnailLink } from '../../components/thumbnailLink.js';
import { ImageCollection } from '../../components/ImageCollection.js';
import { Video } from '../../components/Video';
import { createClient } from 'contentful';
import styles from '../../styles/Project.module.css';
import { getProjectTxt } from '../../utils/getProjectContent.js';
import { setImageCollection } from '../../utils/setImageCollection.js';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('JCmCHk3RexEzFahtV48MJ');
    if (!res) {
        return { notFound: true };
    }
    return {
        props: {
            res,
        },
    };
}

function Hilma({ res }) {
    const { title, year, content, slug } = res.fields;
    console.log(content);
    const hilmaImages = content.slice(2, 16);
    const blogLink = content[17].fields;
    const hilmaPDF = content[1].fields;
    const hilmaVideo = content[16].fields;

    return (
        <>
            <MetaData page='Project Hilma' />
            <div id={slug} className='container'>
                <div className='projectContainer'>
                    <div className='page-title-wrapper'>
                        <h2 className='projektTitle'>{title}</h2>
                        <h3 className='projektYear'>{year}</h3>
                    </div>
                    <p>{getProjectTxt(content)}</p>
                    <div className={styles.videoContainer}>
                        <Video video={hilmaVideo} />
                    </div>
                    <div className='imageContainer'>
                        <ImageCollection images={hilmaImages} />
                    </div>
                    <ThumbnailLink item={hilmaPDF} />
                    <ThumbnailLink item={blogLink} />
                    {/* <Video video={hilmaVideo} /> */}
                </div>
            </div>
        </>
    );
}

export default Hilma;
