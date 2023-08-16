import Link from 'next/link';

import styles from '../styles/components/ProjectList.module.css';
import { SrOnly } from './SrOnly.js';

const ProjectListItem = ({ project }) => {
    const { endYear, projectLinkUrl, projectLinksTitle, startYear } =
        project.fields;

    return (
        <li key={projectLinkUrl} className={`${styles.projectLink} listChild`}>
            <Link href={`/works/${projectLinkUrl}`}>
                <SrOnly text={`Go to ${projectLinksTitle}`} />

                {projectLinksTitle}
                <span>{`${startYear} - ${endYear}`}</span>
            </Link>
        </li>
    );
};

export default ProjectListItem;
