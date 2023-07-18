import { MetaData } from '../../../components/MetaData.js';
import { createClient } from 'contentful';
import { getProjectTxt } from '../../../utils/getProjectContent.js';
import { ImageCollection } from '../../../components/ImageCollection.js';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Video } from '../../../components/Video.js';
import styles from '../../../styles/Project.module.css';
import { GoBackLink } from '../../../components/GoBackLink.js';
import { ThumbnailLink } from '../../../components/ThumbnailLink.js';
import { setContent } from '../../../utils/setContentIndex.js';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('5FKFjkn56KPZ5nZsPpV4HN');
    if (!res) {
        return { notFound: true };
    }
    return {
        props: {
            res,
        },
    };
}
function Emanuel({ res }) {
    const { title, content, slug } = res.fields;
    console.log(content);
    const emanuelPDF = content[5].fields;
    const emanuelText = setContent(content, 'textParagraph');
    const emanuelImages = setContent(content, 'imageInfoText');
    const emanuelVideo = setContent(content, 'videoId');

    return (
        <>
            <MetaData page={title} />
            <div className='wrapper'>
                <div className='pageTitleWrapper'>
                    <h2 className='projectTitle'>{title}</h2>
                </div>
                <p>{emanuelText[0].fields.textParagraph}</p>

                <Video video={emanuelVideo} />

                <div className='imageContainer'>
                    <ImageCollection images={emanuelImages} />
                </div>
                <div className={`${styles.linkContainer} linkContainer`}>
                    <ThumbnailLink item={emanuelPDF} />
                </div>
            </div>
            <GoBackLink slug={slug} />
        </>
    );
}

export default Emanuel;
