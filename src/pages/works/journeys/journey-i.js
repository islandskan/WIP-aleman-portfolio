import { MetaData } from '../../../components/MetaData.js';
import { createClient } from 'contentful';
import { getProjectTxt } from '../../../utils/getProjectContent.js';
import { ImageCollection } from '../../../components/ImageCollection.js';
import { GoBackLink } from '../../../components/GoBackLink.js';
import {
    setContent,
    filterEmptyItems,
} from '../../../utils/setContentIndex.js';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('5SeHyl8wM3CeRLJaMzkfyO');
    if (!res) {
        return { notFound: true };
    }
    return {
        props: {
            res,
        },
    };
}
function Journey1({ res }) {
    const { title, content, slug } = res.fields;
    const filteredItems = filterEmptyItems(content);

    const journey1Text = setContent(filteredItems, 'formattedText');
    const journey1Images = setContent(filteredItems, 'image');

    const textContent = journey1Text[0].fields.formattedText;

    return (
        <>
            <MetaData page={title} />

            <div className='pageTitleWrapper'>
                {documentToReactComponents(textContent)}
            </div>
            <div className='imageContainer'>
                <ImageCollection images={journey1Images} />
            </div>

            <GoBackLink slug={slug} />
        </>
    );
}

export default Journey1;
