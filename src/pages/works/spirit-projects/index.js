import { MetaData } from '../../../components/MetaData.js';
import { GoBackLink } from '../../../components/GoBackLink.js';
import { createClient } from 'contentful';
import { ProjectList } from '../../../components/ProjectList.js';
import ProjectListItem from '../../../components/ProjectListItem.js';
import styles from '../../../styles/components/ProjectList.module.css';

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
    const { projectLinkUrl, projectLinksTitle } = res.fields;

    const projectList = projects.map(
        (project) =>
            project.fields && (
                <ProjectListItem key={project.sys.id} project={project} />
            )
    );
    return (
        <>
            <MetaData page={projectLinksTitle} />

            <ul
                id='spiritProjects'
                className={`${styles.projectList} listLayout ${styles.underProjectLayout}`}
            >
                {projectList}
            </ul>

            <GoBackLink slug={projectLinkUrl} />
        </>
    );
}

export default SpiritProjects;
