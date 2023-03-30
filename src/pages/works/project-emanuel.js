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
    const res = await client.getEntry('5FKFjkn56KPZ5nZsPpV4HN');
    if (!res) {
        return { notFound: true };
    }
    return {
        props: {
            res,
        },
    };
}
function Emanuel({ res }) {
    console.log(res);
    const { title, year, content, slug } = res.fields;
    const emanuelImages = content.slice(4, 7);
    console.log(content);
    const emanuelEssayLink = content[7].fields.formattedText.content[0];
    // const emanuelEssayAbstract = content[8].fields.formattedtext;
    // const emanuelTeaserVideo = content[1].fields;
    // const emanuelInterviewVideo = content[2].fields;
    // const emanuelSecondInterviewVideo = content[3].fields;
    // console.log(emanuelEssayAbstract);
    console.log(emanuelEssayLink);
    // console.log(emanuelEssayLink);

    return (
        <>
            <MetaData page='Project Emanuel' />
            <div id={slug} className='container'>
                <div className='projectContainer'>
                    <div className='page-title-wrapper'>
                        <h2 className='projektTitle'>{title}</h2>
                        <h3 className='projektYear'>{year}</h3>
                    </div>
                    <p>{content[0].fields.textParagraph}</p>
                    {/* <Video video={emanuelTeaserVideo} /> */}
                    <div className='imageContainer'>
                        <ImageCollection images={emanuelImages} />
                    </div>
                    {/* <Video video={emanuelInterviewVideo} /> */}
                    {/* <Video video={emanuelSecondInterviewVideo} /> */}
                    <NextAndPrevProjects />
                </div>
            </div>
        </>
    );
}

export default Emanuel;
