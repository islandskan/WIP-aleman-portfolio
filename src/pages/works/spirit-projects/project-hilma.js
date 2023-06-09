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
    console.log(content);
    const hilmaImages = content.slice(2, 13);
    const blogLink = content[13].fields;
    const hilmaPDF = content[14].fields;
    const hilmaVideo = content[1].fields;
    return (
        <>
            <MetaData page={title} />
            <div className='wrapper'>
                <div className='pageTitleWrapper'>
                    <h2 className='projectTitle'>{title}</h2>
                </div>
                <p>{getProjectTxt(content)}</p>

                <Video video={hilmaVideo} />

                <div className='imageContainer'>
                    <ImageCollection images={hilmaImages} />
                </div>
                <div className={`${styles.linkContainer} linkContainer`}>
                    <ThumbnailLink item={hilmaPDF} />
                    <ThumbnailLink item={blogLink} />
                </div>
            </div>
            <GoBackLink slug={slug} />
        </>
    );
}

export default Hilma;
