import { MetaData } from '../../../components/MetaData.js';
import { createClient } from 'contentful';
import { ImageCollection } from '../../../components/ImageCollection.js';
import { INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GoBackLink } from '../../../components/GoBackLink.js';
import { setContent } from '../../../utils/setContentIndex.js';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('6zvha5FZCb8vdLKXI3d34O');
    if (!res) {
        return { notFound: true };
    }
    return {
        props: {
            res,
        },
    };
}
function Korrespondanser3({ res }) {
    const { title, content, slug } = res.fields;
    const korrespondanser3Images = setContent(content, 'imageInfoText');
    console.log(korrespondanser3Images);
    const corr3Text = setContent(content, 'formattedText');
    const textContent = corr3Text[0].fields.formattedText;

    // console.log(textContent);

    // console.log(res);

    const options = {
        renderNode: {
            [INLINES.HYPERLINK]: ({ data }, children) => (
                <a href={data.uri} target='_blank' rel='noopener noreferrer'>
                    {children}
                </a>
            ),
        },
    };

    return (
        <>
            <MetaData page={title} />

            <div className='pageTitleWrapper'>
                {documentToReactComponents(textContent, options)}
            </div>

            <div className='imageContainer'>
                {/* <ImageCollection images={korrespondanser3Images} /> */}
            </div>

            <GoBackLink slug={slug} />
        </>
    );
}

export default Korrespondanser3;
