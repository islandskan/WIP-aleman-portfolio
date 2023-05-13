import { MetaData } from '../../../components/MetaData.js';
import { createClient } from 'contentful';
import { getProjectTxt } from '../../../utils/getProjectContent.js';
import { ImageCollection } from '../../../components/ImageCollection.js';
import { INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('16SO0u21e4KaO8zBBv8xp3');
    if (!res) {
        return { notFound: true };
    }
    return {
        props: {
            res,
        },
    };
}
function Korrespondanser2({ res }) {
    console.log(res);
    const { title, content, slug } = res.fields;
    console.log(content);
    const korrespondanser2Images = content.slice(1);

    const text = content[0].fields.formattedText;
    console.log(text);

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
            <MetaData page='Project Correpsondences 2' />
            <div id={slug} className='container'>
                <div className='projectContainer'>
                    <div className='page-title-wrapper'>
                        <h2 className='projektTitle'>{title}</h2>
                    </div>
                    <div className='page-text-wrapper'>
                        {documentToReactComponents(text, options)}
                    </div>
                    <div className='imageContainer'>
                        <ImageCollection images={korrespondanser2Images} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Korrespondanser2;
