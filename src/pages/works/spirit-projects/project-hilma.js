import { MetaData } from '../../../components/MetaData.js';
import { ThumbnailLink } from '../../../components/ThumbnailLink.js';
import { ImageCollection } from '../../../components/ImageCollection.js';
import { Video } from '../../../components/Video.js';
import { createClient } from 'contentful';
import styles from '../../../styles/Project.module.css';
import { getProjectTxt } from '../../../utils/getProjectContent.js';
import { setImageCollection } from '../../../utils/setImageCollection.js';
import { GoBackLink } from '../../../components/GoBackLink.js';

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
    const { title, content, slug } = res.fields;
    console.log(content);
    // const hilmaImages = content.slice(2, 16);
    const blogLink = content[2].fields;
    const hilmaPDF = content[3].fields;
    const hilmaVideo = content[1].fields;

    // console.log(blogLink);
    console.log(hilmaPDF);

    return (
        <>
            <MetaData page='Project Hilma' />
            <div className='container'>
                <div className='projectContainer'>
                    <div className='page-title-wrapper'>
                        <h2 className='projektTitle'>{title}</h2>
                    </div>
                    <p>{getProjectTxt(content)}</p>
                    <div className={styles.videoContainer}>
                        <Video video={hilmaVideo} />
                    </div>
                    {/* <div className='imageContainer'>
                        <ImageCollection images={hilmaImages} />
                    </div> */}
                    <div className={styles.linkContainer}>
                        <ThumbnailLink item={hilmaPDF} />
                        <ThumbnailLink item={blogLink} />
                    </div>
                </div>
                <GoBackLink slug={slug} />
            </div>
        </>
    );
}

export default Hilma;
