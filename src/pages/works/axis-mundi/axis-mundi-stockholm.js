import { MetaData } from '../../../components/MetaData';
import { getProjectTxt } from '../../../utils/getProjectContent';
import { ImageCollection } from '../../../components/ImageCollection.js';
import { AudioElement } from '../../../components/AudioElement.js';
import { createClient } from 'contentful';
import { GoBackLink } from '../../../components/GoBackLink';

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

function AxisMundiSTHML({ res }) {
    const { title, content, slug } = res.fields;
    console.log(content);
    // const axisMundiSthlmImages = content.slice(1, 8);
    // const axisMundiSthmlAudio = content[8].fields.audio;

    return (
        <>
            <MetaData page='Axis Mundi Stockholm' />
            <div className='container'>
                <div className='projectContainer'>
                    <div className='page-title-wrapper'>
                        <h2 className='projektTitle'>{title}</h2>
                    </div>
                    <p>{getProjectTxt(content)}</p>
                    {/* <div className='imageContainer'>
                        <ImageCollection images={axisMundiSthlmImages} />
                    </div>
                    <AudioElement audio={axisMundiSthmlAudio} />  */}
                </div>
                <GoBackLink slug={slug} />
            </div>
        </>
    );
}

export default AxisMundiSTHML;
