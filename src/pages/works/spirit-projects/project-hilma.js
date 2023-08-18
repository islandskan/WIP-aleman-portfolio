import { MetaData } from '../../../components/MetaData.js';
import { ThumbnailLink } from '../../../components/ThumbnailLink.js';
// import { LinkList } from '../../../components/ThumbNailLinkList.js';
import { ImageCollection } from '../../../components/ImageCollection.js';
import { Video } from '../../../components/Video.js';
import { createClient } from 'contentful';
import styles from '../../../styles/Project.module.css';

import { setContent } from '../../../utils/setContentIndex.js';
import { GoBackLink } from '../../../components/GoBackLink.js';
// import Link from 'next/link.js';

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
    const hilmaText = setContent(content, 'textParagraph');
    const hilmaImages = setContent(content, 'imageInfoText');

    // const hilmaLinks = setContent(content, 'linkText');
    const blogLink = content[13].fields;
    const hilmaPDF = content[14].fields;
    const hilmaVideo = setContent(content, 'videoId');
    return (
        <>
            <MetaData page={title} />

            <div className='pageTitleWrapper'>
                <h2 className='projectTitle'>{title}</h2>
                <p>{hilmaText[0].fields.textParagraph}</p>
            </div>

            <Video video={hilmaVideo} />

            <div className='imageContainer'>
                <ImageCollection images={hilmaImages} />
            </div>
            <div className='linkContainer'>
                <ThumbnailLink item={hilmaPDF} />
                <ThumbnailLink item={blogLink} />
            </div>

            <GoBackLink slug={slug} />
        </>
    );
}

export default Hilma;
