import { MetaData } from '../components/MetaData';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from '../styles/Published.module.css';
import { createClient } from 'contentful';
import { INLINES } from '@contentful/rich-text-types';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('3NbAokT3varNIcLHHXlYYr');
    if (!res) {
        return { notFound: true };
    }

    return {
        props: {
            res,
        },
    };
}
const Published = ({ res }) => {
    const { content, title } = res.fields;
    const publishedBody = content[0].fields.formattedText;

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

    return (
        <>
            <MetaData page='Published' />
            <div className={`${styles.publishedContainer} listLayout`}>
                <h3 className='pageTitle'>{title}</h3>
                <div className={styles.bodyContainer}>
                    {documentToReactComponents(publishedBody, options)}
                </div>
            </div>
        </>
    );
};

export default Published;
