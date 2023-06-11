import styles from '../../styles/Home.module.css';
import ProjectListItem from '../../components/ProjectListItem';
import { MetaData } from '../../components/MetaData';
import { createClient } from 'contentful';
import { renderProjects } from '../../utils/sortProjects';
export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntries({ content_type: 'projectLinks' });
    if (!res) {
        return { notFound: true };
    }

    return {
        props: {
            projectLinks: res.items,
        },
    };
}

function Works({ projectLinks }) {
    const projectList = renderProjects(ProjectListItem, projectLinks);
    return (
        <>
            <MetaData page='Works' />

            <ul id='works' className={styles.projectsList}>
                {projectList}
            </ul>
        </>
    );
}

export default Works;
