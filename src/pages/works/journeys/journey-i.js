import { MetaData } from '../../../components/MetaData.js';
import { createClient } from 'contentful';
import { getProjectTxt } from '../../../utils/getProjectContent.js';
import { ImageCollection } from '../../../components/ImageCollection.js';
import { GoBackLink } from '../../../components/GoBackLink.js';
import { setContent } from '../../../utils/setContentIndex.js';

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

    const journey1Text = setContent(content, 'textParagraph');
    const journey1Images = setContent(content, 'imageInfoText');

    return (
        <>
            <MetaData page={title} />

            <div className='pageTitleWrapper'>
                <h2 className='projectTitle'>{title}</h2>
                <p>{journey1Text[0].fields.textParagraph}</p>
            </div>
            <div className='imageContainer'>
                <ImageCollection images={journey1Images} />
            </div>

            <GoBackLink slug={slug} />
        </>
    );
}

export default Journey1;
