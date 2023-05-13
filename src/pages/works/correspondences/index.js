import styles from '../../../styles/Home.module.css';
// import ProjectListItem from '../../components/ProjectListItem';
import { MetaData } from '../../../components/MetaData';
// import { EmailJSForm } from '../components/test-components/EmailJSForm';
import { createClient } from 'contentful';
import Link from 'next/link';

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

    const projectList = projects.map((item) => (
        <li key={item.sys.id}>
            <Link href={`correspondences/${item.fields.slug}`}>
                {item.fields.projectTitle}
            </Link>
        </li>
    ));
    return (
        <>
            <MetaData page='Correspondences' />
            <div className={`${styles.homeContainer} container`}>
                <ul id='works' className={styles.projectsList}>
                    {projectList}
                </ul>
            </div>
        </>
    );
}

export default Correspondences;
