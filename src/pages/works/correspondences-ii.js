import { MetaData } from '../../components/MetaData.js';
import { createClient } from 'contentful';
import { ImageCollection } from '../../components/ImageCollection.js';
import NextAndPrevProjects from '../../components/NextAndPrevProjects.js';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('16SO0u21e4KaO8zBBv8xp3');
    return {
        props: {
            res,
        },
    };
}
function Korrespondanser2({ res }) {
    console.log(res);
    const { title, year, content, slug } = res.fields;
    console.log(content);
    const korrespondanser2Images = content.slice(1);

    return (
        <>
            <MetaData page='Project Correpsondences 2' />
            <div id={slug} className='container'>
                <div className='projectContainer'>
                    <div className='page-title-wrapper'>
                        <h2 className='projektTitle'>{title}</h2>
                        <h3 className='projektYear'>{year}</h3>
                    </div>
                    <p>{content[0].fields.textParagraph}</p>
                    <div className='imageContainer'>
                        <ImageCollection images={korrespondanser2Images} />
                    </div>
                    <NextAndPrevProjects />
                </div>
            </div>
        </>
    );
}

export default Korrespondanser2;