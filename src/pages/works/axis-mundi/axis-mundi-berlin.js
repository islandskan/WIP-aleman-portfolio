import { MetaData } from '../../../components/MetaData.js';
import { getProjectTxt } from '../../../utils/getProjectContent.js';
import { setImageCollection } from '../../../utils/setImageCollection.js';
import { ImageCollection } from '../../../components/ImageCollection.js';
import { createClient } from 'contentful';
import { GoBackLink } from '../../../components/GoBackLink.js';
import { AudioElement } from '../../../components/AudioElement.js';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('48jH0hTsCSEZM9StIUxsJl');
    if (!res) {
        return { notFound: true };
    }
    return {
        props: {
            res,
        },
    };
}

function AxisMundiBerlin({ res }) {
    const { title, content, slug } = res.fields;

    const axisMundiAudio = content[1].fields;
    const axisMundiBerlinImages = content.slice(2);

    return (
        <>
            <MetaData page={title} />
            <div className='wrapper'>
                <div className='page-title-wrapper'>
                    <div className='page-title-wrapper'>
                        <h2 className='projektTitle'>{title}</h2>
                    </div>
                </div>
                <p>{getProjectTxt(content)}</p>
                <div className='imageContainer'>
                    <ImageCollection images={axisMundiBerlinImages} />
                </div>
                <AudioElement audioObj={axisMundiAudio} />
                <GoBackLink slug={slug} />
            </div>
        </>
    );
}

export default AxisMundiBerlin;
