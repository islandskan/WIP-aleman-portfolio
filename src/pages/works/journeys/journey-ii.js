import { MetaData } from '../../../components/MetaData.js';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';
import { ImageCollection } from '../../../components/ImageCollection.js';
import { setContent } from '../../../utils/setContentIndex.js';
import { GoBackLink } from '../../../components/GoBackLink.js';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('75DgrpHZeYH2MXOQvUfdzM');
    if (!res) {
        return { notFound: true };
    }
    return {
        props: {
            res,
        },
    };
}
function Journey2({ res }) {
    const { title, content, slug } = res.fields;
    const journey2Text = setContent(content, 'formattedText');
    const journey2Images = setContent(content, 'imageInfoText');

    const options = {
        renderNode: {
            [INLINES.ASSET_HYPERLINK]: (node, children) => {
                return (
                    <a
                        href={
                            node.data && node.data.target.fields.file.url
                                ? node.data.target.fields.file.url
                                : null
                        }
                    >
                        {children}
                    </a>
                );
            },
        },
    };

    return (
        <>
            <MetaData page={title} />

            <div className='pageTitleWrapper'>
                <h2 className='projectTitle'>{title}</h2>
                {documentToReactComponents(
                    journey2Text[0].fields.formattedText,
                    options
                )}
            </div>
            <div className='imageContainer'>
                <ImageCollection images={journey2Images} />
            </div>

            <GoBackLink slug={slug} />
        </>
    );
}

export default Journey2;
