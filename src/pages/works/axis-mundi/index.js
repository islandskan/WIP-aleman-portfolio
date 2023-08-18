import { MetaData } from '../../../components/MetaData.js';
import { createClient } from 'contentful';
import { ProjectList } from '../../../components/ProjectList.js';
import { GoBackLink } from '../../../components/GoBackLink.js';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntry('3ulDj7dJwEXBiBq1m5Sya6');
    if (!res) {
        return { notFound: true };
    }

    return {
        props: {
            res,
        },
    };
}

function AxisMundi({ res }) {
    const { projectLinkUrl, projectLinksTitle } = res.fields;
    const projects = res.fields.projectLinksUnderMenu;

    return (
        <>
            <MetaData page={projectLinksTitle} />
            <ProjectList projects={projects} url={projectLinkUrl} />
            <GoBackLink slug={projectLinkUrl} />
        </>
    );
}

export default AxisMundi;
