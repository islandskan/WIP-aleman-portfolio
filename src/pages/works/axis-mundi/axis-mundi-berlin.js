import { MetaData } from '../../../components/MetaData.js';
import { getProjectTxt } from '../../../utils/getProjectContent.js';
import { setImageCollection } from '../../../utils/setImageCollection.js';
import { setContent } from '../../../utils/setContentIndex.js';
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
    const axisMundiAudio = setContent(content, 'audio');
    const axisMundiBerlinImages = setContent(content, 'imageInfoText');
    const axisMundiBerlinText = setContent(content, 'textParagraph');
    console.log(axisMundiAudio);

    return (
        <>
            <MetaData page={title} />
            <div className='wrapper'>
                <div className='pageTitleWrapper'>
                    <div className='pageTitleWrapper'>
                        <h2 className='projectTitle'>{title}</h2>
                    </div>
                </div>
                <p>{axisMundiBerlinText[0].fields.textParagraph}</p>
                <div className='imageContainer'>
                    <ImageCollection images={axisMundiBerlinImages} />
                </div>
                <AudioElement audioObj={axisMundiAudio} />
            </div>
            <GoBackLink slug={slug} />
        </>
    );
}

export default AxisMundiBerlin;
