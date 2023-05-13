import styles from '../../../styles/Home.module.css';
import { MetaData } from '../../../components/MetaData';
import Link from 'next/link';
import { GoBackLink } from '../../../components/GoBackLink';
import { createClient } from 'contentful';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('2Cm2m8ddi4xkHiaU6342Fq');
    if (!res) {
        return { notFound: true };
    }

    return {
        props: {
            res,
        },
    };
}

function SpiritProjects({ res }) {
    console.log(res);

    const projects = res.fields.projectLinksUnderMenu;
    console.log(projects);

    const projectList = projects.map((item) => (
        <li key={item.sys.id}>
            <Link href={`spirit-projects/${item.fields.slug}`}>
                {item.fields.projectTitle}
            </Link>
        </li>
    ));
    return (
        <>
            <MetaData page='Spirit Projects' />
            <div className={`${styles.homeContainer} container`}>
                <ul id='works' className={styles.projectsList}>
                    {projectList}
                </ul>
            </div>
        </>
    );
}

export default SpiritProjects;
