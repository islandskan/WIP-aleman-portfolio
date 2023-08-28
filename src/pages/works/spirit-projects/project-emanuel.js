import { MetaData } from '../../../components/MetaData.js';
import { createClient } from 'contentful';
import { ImageCollection } from '../../../components/ImageCollection.js';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Video } from '../../../components/Video.js';
import { GoBackLink } from '../../../components/GoBackLink.js';
import { LinkList } from '../../../components/ThumbNailLinkList.js';
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
    const emanuelText = setContent(content, 'formattedText');
    const emanuelPDF = setContent(content, 'thumbnail');
    const emanuelImages = setContent(content, 'imageInfoText');
    const emanuelVideo = setContent(content, 'videoId');

    return (
        <>
            <MetaData page={title} />

            <div className='pageTitleWrapper'>
                {documentToReactComponents(emanuelText[0].fields.formattedText)}
            </div>

            <Video video={emanuelVideo} />

            <div className='imageContainer'>
                <ImageCollection images={emanuelImages} />
            </div>
            <LinkList links={emanuelPDF} />

            <GoBackLink slug={slug} />
        </>
    );
}

export default Emanuel;
