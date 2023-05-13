import styles from '../../../styles/Home.module.css';
import { GoBackLink } from '../../../components/GoBackLink';

// import ProjectListItem from '../../components/ProjectListItem';
import { MetaData } from '../../../components/MetaData';
// import { EmailJSForm } from '../components/test-components/EmailJSForm';
import { createClient } from 'contentful';
import { ProjectList } from '../../../components/ProjectList';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('3ynt7Xda85HvUZjXQZ5Z9g');
    if (!res) {
        return { notFound: true };
    }

    return {
        props: {
            res,
        },
    };
}

function Correspondences({ res }) {
    console.log(res);

    const projects = res.fields.projectLinksUnderMenu;
    console.log(projects);
    const { projectLinkUrl } = res.fields;

    console.log(projectLinkUrl);

    return (
        <>
            <MetaData page='Correspondences' />
            <div className={`${styles.homeContainer} container`}>
                <ProjectList projects={projects} url={projectLinkUrl} />
                <GoBackLink slug={projectLinkUrl} />
            </div>
        </>
    );
}

export default Correspondences;
