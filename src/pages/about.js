import { MetaData } from '../components/MetaData';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from '../styles/About.module.css';
import { Button } from '../components/Button';
import { Video } from '../components/VideoElements';
import { createClient } from 'contentful';
import { INLINES } from '@contentful/rich-text-types';
// import { fetchEntries } from '../api/fetchEntries';
//https://www.contentful.com/blog/rendering-linked-assets-entries-in-contentful/

export async function getStaticProps() {
    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntries({ content_type: 'about' });

    return {
        props: {
            aboutItems: res.items,
        },
    };
}

// export async function getStaticProps() {
//     const res = await fetchEntries('about');
//     const aboutItems = res.map((item) => {
//         return item.fields;
//     });
//     return {
//         props: {
//             aboutItems,
//         },
//     };
// }

const About = ({ aboutItems }) => {
    console.log(aboutItems[1].fields);

    const { aboutTitle: artistTitle, aboutContent: artistBody } =
        aboutItems[0].fields;
    const { aboutTitle: publishedTitle, aboutContent: publishedBody } =
        aboutItems[1].fields;
    const { aboutTitle: cvTitle, aboutContent: cvBody } = aboutItems[2].fields;

    console.log(artistTitle, artistBody);
    console.log(cvTitle, cvBody);
    console.log(publishedTitle, publishedBody);
    const artistBodyText = artistBody.fields.formattedText;
    const cvBodyText = cvBody.fields.formattedText;
    const publishedBodyText = publishedBody.fields.formattedText;

    console.log(publishedBodyText.content[0].content);

    const options = {
        renderNode: {
            [INLINES.ASSET_HYPERLINK]: (node) => {
                return `<a href="https:${node.data.target.fields.file.url}">${node.content}</a>`;
            },
        },
    };

    console.log(options);

    return (
        <>
            <MetaData page='About' />
            <div id='about' className='container'>
                <div className={styles.aboutContainer}>
                    <div className={styles.artistContainer}>
                        <h3 className={`page-title ${styles.aboutTitle}`}>
                            {artistTitle}
                        </h3>
                        <div className={styles.bodyContainer}>
                            {documentToReactComponents(artistBodyText)}
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
                        />
                        <div className={styles.bodyContainer}>
                            {documentToReactComponents(cvBodyText)}
                        </div>
                    </div>
                    <div className={styles.publishedContainer}>
                        <h3 className={`page-title ${styles.aboutTitle}`}>
                            {publishedTitle}
                        </h3>
                        <div className={styles.bodyContainer}>
                            {documentToReactComponents(
                                publishedBodyText,
                                options
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
