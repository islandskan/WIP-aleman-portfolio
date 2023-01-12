import { MetaData } from '../components/MetaData';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from '../styles/About.module.css';
// import { fetchEntries } from '../api/fetchEntries';
import { Button } from '../components/Button';

const About = () => {
    return (
        <>
            <MetaData page='About' />
            <div className={`container ${styles.aboutContainer}`}>
                <div className={styles.artistContainer}>
                    <h3 className={`page-title ${styles.aboutTitle}`}></h3>
                    <div className={styles.bodyContainer}></div>
                    {/* <div className={styles.bodyContainer}>Video interviews</div> */}
                </div>
                <div className={styles.cvContainer}>
                    <h3 className={`page-title ${styles.aboutTitle}`}></h3>
                    <Button
                        type='button'
                        classname={styles.cvBtn}
                        text='Save as PDF'
                    />
                    <div className={styles.bodyContainer}></div>
                </div>
                <div className={styles.publishedContainer}>
                    <h3 className={`page-title ${styles.aboutTitle}`}></h3>
                    <div className={styles.bodyContainer}></div>
                </div>
            </div>
        </>
    );
};

export default About;
