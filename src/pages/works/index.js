import styles from '../../styles/Home.module.css';
import ProjectListItem from '../../components/ProjectListItem.js';
import { MetaData } from '../../components/MetaData.js';
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
            <div className='wrapper'>
                <ul id='works' className={styles.projectsList}>
                    {projectList}
                </ul>
            </div>
        </>
    );
}

export default Works;
