import styles from '../../../styles/Home.module.css';
import { MetaData } from '../../../components/MetaData';
import { createClient } from 'contentful';
import { ProjectList } from '../../../components/ProjectList';
import { GoBackLink } from '../../../components/GoBackLink';

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
    return (
        <>
            <MetaData page={projectLinksTitle} />
            <div className={`${styles.homeContainer} container`}>
                <ProjectList projects={projects} url={projectLinkUrl} />
                <GoBackLink slug={projectLinkUrl} />
            </div>
        </>
    );
}

export default Journeys;
