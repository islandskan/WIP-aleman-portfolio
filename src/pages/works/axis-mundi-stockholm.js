import { MetaData } from '../../components/MetaData';
import { createClient } from 'contentful';
import { ImageCollection } from '../../components/ImageCollection.js';
import { AudioElement } from '../../components/AudioElement.js';
import NextAndPrevProjects from '../../components/NextAndPrevProjects.js';

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
    console.log(res);
    const { title, year, content, slug } = res.fields;
    console.log(content);
    const axisMundiSthlmImages = content.slice(1, 8);
    const axisMundiSthmlAudio = content[8].fields.audio;

    return (
        <>
            <MetaData page='Axis Mundi Stockholm' />
            <div id={slug} className='container'>
                <div className='projectContainer'>
                    <div className='page-title-wrapper'>
                        <h2 className='projektTitle'>{title}</h2>
                        <h3 className='projektYear'>{year}</h3>
                    </div>
                    <p>{content[0].fields.textParagraph}</p>
                    <div className='imageContainer'>
                        <ImageCollection images={axisMundiSthlmImages} />
                    </div>
                    <AudioElement audio={axisMundiSthmlAudio} />
                    <NextAndPrevProjects />
                </div>
            </div>
        </>
    );
}

export default AxisMundiSTHML;
