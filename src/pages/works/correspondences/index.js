import styles from '../../../styles/Home.module.css';
import { GoBackLink } from '../../../components/GoBackLink';
import { MetaData } from '../../../components/MetaData';
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
    const projects = res.fields.projectLinksUnderMenu;
    const { projectLinkUrl, projectLinksTitle } = res.fields;
    return (
        <>
            <MetaData page={projectLinksTitle} />

            <ProjectList projects={projects} url={projectLinkUrl} />
            <GoBackLink slug={projectLinkUrl} />
        </>
    );
}

export default Correspondences;
