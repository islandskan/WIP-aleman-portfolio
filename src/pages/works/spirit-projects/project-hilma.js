import { MetaData } from '../../../components/MetaData.js';
import { LinkList } from '../../../components/ThumbNailLinkList.js';
import { ImageCollection } from '../../../components/ImageCollection.js';
import { Video } from '../../../components/Video.js';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
    setContent,
    filterEmptyItems,
} from '../../../utils/setContentIndex.js';
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
    const filteredItems = filterEmptyItems(content);
    const hilmaText = setContent(filteredItems, 'formattedText');
    const textContent = hilmaText[0].fields.formattedText;
    const hilmaImages = setContent(filteredItems, 'image');

    const hilmaThumbnails = setContent(filteredItems, 'thumbnail');
    const hilmaVideo = setContent(filteredItems, 'videoId');
    return (
        <>
            <MetaData page={title} />

            <div className='pageTitleWrapper'>
                {documentToReactComponents(textContent)}
            </div>

            <Video video={hilmaVideo} />

            <div className='imageContainer'>
                <ImageCollection images={hilmaImages} />
            </div>
            <LinkList links={hilmaThumbnails} />

            <GoBackLink slug={slug} />
        </>
    );
}

export default Hilma;
