import { MetaData } from '../components/MetaData';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from '../styles/Published.module.css';
import { createClient } from 'contentful';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('4bBs17JZfSz0cA3E6fOeWR');
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

    console.log(documentToReactComponents(publishedBody, options));

    return (
        <>
            <MetaData page='Published' />
            <div className={`${styles.publishedContainer} listLayout`}>
                <div className={styles.bodyContainer}>
                    {documentToReactComponents(publishedBody, options)}
                </div>
            </div>
        </>
    );
};

export default Published;
