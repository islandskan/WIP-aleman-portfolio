import { MetaData } from '../components/MetaData';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from '../styles/About.module.css';
import { Button } from '../components/Button';
import { createClient } from 'contentful';
import { INLINES } from '@contentful/rich-text-types';
import { generatePDF } from '../utils/generatePDF';
// import { fetchEntries } from '../api/fetchEntries';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntries({ content_type: 'about' });
    if (!res) {
        return { notFound: true };
    }

    return {
        props: {
            aboutItems: res.items,
        },
    };
}
const About = ({ aboutItems }) => {
    const index = {
        cv: aboutItems.findIndex((item) => item.fields.aboutTitle === 'CV'),
        artist: aboutItems.findIndex(
            (item) => item.fields.aboutTitle === 'Artist Statement'
        ),
        published: aboutItems.findIndex(
            (item) => item.fields.aboutTitle === 'Published'
        ),
    };

    const { aboutTitle: artistTitle, aboutPageContent: artistBody } =
        aboutItems[index.artist].fields;
    const { aboutTitle: publishedTitle, aboutPageContent: publishedBody } =
        aboutItems[index.published].fields;
    const { aboutTitle: cvTitle, aboutPageContent: cvBody } =
        aboutItems[index.cv].fields;

    const options = {
        renderNode: {
            [INLINES.ASSET_HYPERLINK]: (node, children) => {
                return (
                    <a
                        href={
                            node.data && node.data.target.fields.file.url
                                ? node.data.target.fields.file.url
                                : null
                        }
                    >
                        {children}
                    </a>
                );
            },
        },
    };

    const handleSaveCV = () => {
        generatePDF('cvBody');
    };

    return (
        <>
            <MetaData page='About' />
            <div className='wrapper'>
                <div className={styles.artistContainer}>
                    <h3 className={`page-title ${styles.aboutTitle}`}>
                        {artistTitle}
                    </h3>
                    <div className={styles.bodyContainer}>
                        {documentToReactComponents(artistBody)}
                    </div>
                </div>
                <div className={styles.cvContainer}>
                    <h3 className={`page-title ${styles.aboutTitle}`}>
                        {cvTitle}
                    </h3>
                    <Button
                        type='button'
                        classname={styles.cvBtn}
                        text='Save as PDF'
                        onClick={handleSaveCV}
                    />
                    <div className={styles.bodyContainer} id='cvBody'>
                        {documentToReactComponents(cvBody)}
                    </div>
                </div>
                <div className={styles.publishedContainer}>
                    <h3 className={`page-title ${styles.aboutTitle}`}>
                        {publishedTitle}
                    </h3>
                    <div className={styles.bodyContainer}>
                        {documentToReactComponents(publishedBody, options)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
