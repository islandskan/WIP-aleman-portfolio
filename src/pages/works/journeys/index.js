import { MetaData } from '../../../components/MetaData.js';
import { createClient } from 'contentful';
import { GoBackLink } from '../../../components/GoBackLink.js';
import ProjectListItem from '../../../components/ProjectListItem.js';
import styles from '../../../styles/components/ProjectList.module.css';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('6y6usxnpIDXDueCspa31iZ');
    if (!res) {
        return { notFound: true };
    }

    return {
        props: {
            res,
        },
    };
}

function Journeys({ res }) {
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
                id='journeys'
                className={`${styles.projectList} listLayout ${styles.underProjectLayout}`}
            >
                {projectList}
            </ul>

            <GoBackLink slug={projectLinkUrl} />
        </>
    );
}

export default Journeys;
