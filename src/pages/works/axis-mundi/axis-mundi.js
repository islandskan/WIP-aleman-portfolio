import { MetaData } from '../../../components/MetaData.js';
import { getProjectTxt } from '../../../utils/getProjectContent.js';
import { ImageCollection } from '../../../components/ImageCollection.js';
import { createClient } from 'contentful';
import { GoBackLink } from '../../../components/GoBackLink.js';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('11s38AdSGgzndSmwhiwARb');
    if (!res) {
        return { notFound: true };
    }
    return {
        props: {
            res,
        },
    };
}

function AxisMundi({ res }) {
    const { title, content, slug } = res.fields;
    const axisMundiImages = content.slice(1);
    return (
        <>
            <MetaData page={title} />
            <div className='wrapper'>
                <div className='pageTitleWrapper'>
                    <h2 className='projectTitle'>{title}</h2>
                </div>
                <p>{getProjectTxt(content)}</p>
                <div className='imageContainer'>
                    <ImageCollection images={axisMundiImages} />
                </div>
            </div>
            <GoBackLink slug={slug} />
        </>
    );
}

export default AxisMundi;
