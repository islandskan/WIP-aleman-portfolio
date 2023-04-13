import { MetaData } from '../../components/MetaData.js';
import { createClient } from 'contentful';
import { getProjectTxt } from '../../utils/getProjectContent.js';
import { setImageCollection } from '../../utils/setImageCollection.js';
import { ImageCollection } from '../../components/ImageCollection.js';

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
    console.log(res);
    const { title, year, content, slug } = res.fields;
    console.log(content);
    const axisMundiBerlinImages = content.slice(1);

    return (
        <>
            <MetaData page='Axis Mundi Berlin' />
            <div id={slug} className='container'>
                <div className='projectContainer'>
                    <div className='page-title-wrapper'>
                        <div className='page-title-wrapper'>
                            <h2 className='projektTitle'>{title}</h2>
                            <h3 className='projektYear'>{year}</h3>
                        </div>
                    </div>
                    <p>{getProjectTxt(content)}</p>
                    <div className='imageContainer'>
                        <ImageCollection images={axisMundiBerlinImages} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AxisMundiBerlin;
