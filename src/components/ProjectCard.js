import Link from 'next/link';
import { ProjectThumbnail } from './Images';
import styles from '../styles/Projects.module.css';

const ProjectCard = ({ project }) => {
    const { slug, projectTitle, thumbnail } = project;
    const WIDTH = 450;
    const HEIGHT = 450;

    return (
        <div className={styles.projectCard} key={project.slug}>
            <Link href={`/projects/${slug}`}>
                <div className={styles.projectsCard__thumbnail}>
                    {/* <ProjectThumbnail url= /> */}
                    <h4 className={styles.projectCard__title}>
                        {projectTitle}
                    </h4>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;
