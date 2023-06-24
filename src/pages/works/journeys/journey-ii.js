import { MetaData } from '../../../components/MetaData.js';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';

import { GoBackLink } from '../../../components/GoBackLink.js';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('XEoJ3qEqr4YTfXFGvlhQp');
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

    const text = content[0].fields.formattedText;
    // const journey2Images = content.slice(2);

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
            <div className='wrapper'>
                <div className='pageTitleWrapper'>
                    <h2 className='projektTitle'>{title}</h2>
                </div>
                <div className='pageTxtWrapper'>
                    {documentToReactComponents(text, options)}
                </div>
                <div className='imageContainer'>
                    {/* <ImageCollection images={journey2Images} /> */}
                </div>
                <GoBackLink slug={slug} />
            </div>
        </>
    );
}

export default Journey2;
