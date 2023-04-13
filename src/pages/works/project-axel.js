import { MetaData } from '../../components/MetaData.js';
import { createClient } from 'contentful';
import styles from '../../styles/Project.module.css';
import { getProjectTxt } from '../../utils/getProjectContent.js';
import { ImageCollection } from '../../components/ImageCollection.js';
// import { LinkElement } from '../../components/LinkElements.js';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Video } from '../../components/Video.js';
import NextAndPrevProjects from '../../components/NextAndPrevProjects.js';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('4eILv8i9D1rPwYnrXvJLoq');
    if (!res) {
        return { notFound: true };
    }
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
    const axelVideo = content[1].fields;
    // const { url } = content[1].fields.videoThumbnail.fields.file;
    console.log(axelVideo);

    return (
        <>
            <MetaData page='Project Axel' />
            <div id={slug} className='container'>
                <div className='projectContainer'>
                    <div className='page-title-wrapper'>
                        <h2 className='projektTitle'>{title}</h2>
                        <h3 className='projektYear'>{year}</h3>
                    </div>
                    <p>{getProjectTxt(content)}</p>
                    <div className={styles.videoContainer}>
                        <Video video={axelVideo} />
                    </div>
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
