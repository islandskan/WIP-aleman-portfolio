import styles from '../../styles/Home.module.css';
import ProjectCard from '../../components/ProjectCard.js';
import { MetaData } from '../../components/MetaData.js';
// import { EmailJSForm } from '../components/test-components/EmailJSForm';
import { createClient } from 'contentful';
// import isInternal from '../utils/isInternal';
import { renderProjects } from '../../utils/sortProjects.js';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntries({ content_type: 'projectCard' });

    return {
        props: {
            projectCards: res.items,
        },
    };
}

function Works({ projectCards }) {
    const projectList = renderProjects(ProjectCard, projectCards);

    return (
        <>
            <MetaData page='Works' />
            <ul id='works' className={`container ${styles.projectsList}`}>
                {projectList}
            </ul>
        </>
    );
}

export default Works;
