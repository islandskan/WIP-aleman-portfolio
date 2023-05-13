import { MetaData } from '../../../components/MetaData.js';
import { createClient } from 'contentful';
import { getProjectTxt } from '../../../utils/getProjectContent.js';
import { ImageCollection } from '../../../components/ImageCollection.js';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
    console.log(res);
    const { title, content, slug } = res.fields;
    console.log(content);
    // const journey2Images = content.slice(2);

    return (
        <>
            <MetaData page='Journey 2' />
            <div id={slug} className='container'>
                <div className='projectContainer'>
                    <div className='page-title-wrapper'>
                        <h2 className='projektTitle'>{title}</h2>
                    </div>
                    <p>{getProjectTxt(content)}</p>
                    <div className='imageContainer'>
                        {/* <ImageCollection images={journey2Images} /> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Journey2;
