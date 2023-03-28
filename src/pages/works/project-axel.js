import { MetaData } from '../../components/MetaData.js';
import { createClient } from 'contentful';
import { ImageCollection } from '../../components/ImageCollection.js';
import { LinkElement } from '../../components/LinkElements.js';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { Video } from '../components/VideoElements.js';
import NextAndPrevProjects from '../../components/NextAndPrevProjects.js';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('4eILv8i9D1rPwYnrXvJLoq');
    return {
        props: {
            res,
        },
    };
}

function Axel({ res }) {
    console.log(res);
    const { title, year, content, slug } = res.fields;
    console.log(content);
    const axelImages = content.slice(2);
    // const axelVideoId = content[1].fields.videoId;
    // const { url } = content[1].fields.videoThumbnail.fields.file;
    // console.log(url);

    return (
        <>
            <MetaData page='Project Axel' />
            <div id={slug} className='container'>
                <div className='projectContainer'>
                    <div className='page-title-wrapper'>
                        <h2 className='projektTitle'>{title}</h2>
                        <h3 className='projektYear'>{year}</h3>
                    </div>
                    <p>{content[0].fields.textParagraph}</p>
                    {/* <Video videoId={axelVideoId} url={url} /> */}
                    <div className='imageContainer'>
                        <ImageCollection images={axelImages} />
                    </div>
                    <NextAndPrevProjects />
                </div>
            </div>
        </>
    );
}

export default Axel;
