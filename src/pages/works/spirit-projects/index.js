import styles from '../../../styles/Home.module.css';
import { MetaData } from '../../../components/MetaData';
import { GoBackLink } from '../../../components/GoBackLink';
import { createClient } from 'contentful';
import { ProjectList } from '../../../components/ProjectList';

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
    const projects = res.fields.projectLinksUnderMenu;
    const { projectLinkUrl } = res.fields;
    return (
        <>
            <MetaData page='Spirit Projects' />
            <div className={`${styles.homeContainer} container`}>
                <ProjectList projects={projects} url={projectLinkUrl} />
                <GoBackLink slug={projectLinkUrl} />
            </div>
        </>
    );
}

export default SpiritProjects;
