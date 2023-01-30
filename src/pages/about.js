import { MetaData } from '../components/MetaData';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from '../styles/About.module.css';
import { Button } from '../components/Button';
// import { fetchContent } from '../api/contentful';

// export async function getStaticProps() {
//     const { aboutPageCollection } = await fetchContent(`
//     query {
//         aboutPageCollection(limit: 20) {
//           items {
//            artistStatementHeadline
//            artistStatementBody {
//             json
//           }
//             cvHeadline
//             cvBody {
//                 json
//             }
//             publicationsHeadline
//             publicationsBody {
//                 json
//             }
//           }
//         }
//         }
//     `);

//     return {
//         props: {
//             aboutPage: aboutPageCollection.items,
//         },
//     };
// }

const About = () => {
    // const {
    //     artistStatementHeadline,
    //     artistStatementBody,
    //     cvHeadline,
    //     cvBody,
    //     publicationsHeadline,
    //     publicationsBody,
    // } = aboutPage[0];
    return (
        <>
            <MetaData page='About' />
            <div className={`container ${styles.aboutContainer}`}>
                <div className={styles.artistContainer}>
                    <h3 className={`page-title ${styles.aboutTitle}`}>
                        {/* {artistStatementHeadline} */}
                    </h3>
                    <div className={styles.bodyContainer}>
                        {/* {documentToReactComponents(artistStatementBody)} */}
                    </div>
                    {/* <div className={styles.bodyContainer}>Video interviews</div> */}
                </div>
                <div className={styles.cvContainer}>
                    <h3 className={`page-title ${styles.aboutTitle}`}>
                        {/* {cvHeadline} */}
                    </h3>
                    <Button
                        type='button'
                        classname={styles.cvBtn}
                        text='Save as PDF'
                    />
                    <div className={styles.bodyContainer}></div>
                </div>
                <div className={styles.publishedContainer}>
                    <h3 className={`page-title ${styles.aboutTitle}`}>
                        {/* {publicationsHeadline} */}
                    </h3>
                    <div className={styles.bodyContainer}></div>
                </div>
            </div>
        </>
    );
};

export default About;
