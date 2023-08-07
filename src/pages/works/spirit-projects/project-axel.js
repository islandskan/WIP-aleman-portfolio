import { MetaData } from '../../../components/MetaData.js';
import { createClient } from 'contentful';
import { getProjectTxt } from '../../../utils/getProjectContent.js';
import { setContent } from '../../../utils/setContentIndex.js';
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

    const axelText = setContent(content, 'textParagraph');
    const axelImages = setContent(content, 'imageInfoText');
    const axelVideo = setContent(content, 'videoId');

    return (
        <>
            <MetaData page={title} />

            <div className='pageTitleWrapper'>
                <h2 className='projectTitle'>{title}</h2>
                <p>{axelText[0].fields.textParagraph}</p>
            </div>

            <Video video={axelVideo} />

            <div className='imageContainer'>
                <ImageCollection images={axelImages} />
            </div>

            <GoBackLink slug={slug} />
        </>
    );
}

export default Axel;
