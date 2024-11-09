import { MetaData } from '../../../components/MetaData.js';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';
import { ImageCollection } from '../../../components/ImageCollection.js';
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
    const res = await client.getEntry('3YKdw5dulyats3vR219gpe');
    if (!res) {
        return { notFound: true };
    }
    return {
        props: {
            res,
        },
    };
}
function RandomJourneys({ res }) {
    const { title, content, slug } = res.fields;

    const filteredItems = filterEmptyItems(content);
    const randomJourneysImages = setContent(filteredItems, 'image');
    // const randomJourneysText = setContent(filteredItems, 'formattedText');
    // const textContent = randomJourneysText[0].fields.formattedText;

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

            {/* <div className='pageTitleWrapper'>
                {documentToReactComponents(textContent, options)}
            </div> */}
            <div className='imageContainer'>
                <ImageCollection images={randomJourneysImages} />
            </div>

            <GoBackLink slug={slug} />
        </>
    );
}

export default RandomJourneys;
