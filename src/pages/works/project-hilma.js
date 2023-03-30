import { MetaData } from '../../components/MetaData.js';
import { PDFElement } from '../../components/PDFElement.js';
import { LinkElement } from '../../components/LinkElements.js';
import { ImageCollection } from '../../components/ImageCollection.js';
import { Video } from '../../components/VideoElements';
import { createClient } from 'contentful';
import NextAndPrevProjects from '../../components/NextAndPrevProjects.js';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('JCmCHk3RexEzFahtV48MJ');
    if (!res) {
        return { notFound: true };
    }
    return {
        props: {
            res,
        },
    };
}

function Hilma({ res }) {
    const { title, year, content, slug } = res.fields;
    console.log(content);
    const hilmaImages = content.slice(2, 16);
    const blogLink = content[16].fields;
    const hilmaPDF = content[1].fields;
    // const hilmaVideo = content[17].fields;

    console.log(content[17].fields);

    return (
        <>
            <MetaData page='Project Hilma' />
            <div id={slug} className='container'>
                <div className='projectContainer'>
                    <div className='page-title-wrapper'>
                        <h2 className='projektTitle'>{title}</h2>
                        <h3 className='projektYear'>{year}</h3>
                    </div>
                    <p>{content[0].fields.textParagraph}</p>
                    <LinkElement
                        linkText={blogLink.linkText}
                        linkUrl={blogLink.linkUrl}
                        linkBody={blogLink.linkBody}
                    />
                    <div className='imageContainer'>
                        <ImageCollection images={hilmaImages} />
                    </div>
                    <PDFElement hilmaPDF={hilmaPDF} />
                    {/* <Video video={hilmaVideo} /> */}
                    <NextAndPrevProjects />
                </div>
            </div>
        </>
    );
}

export default Hilma;
