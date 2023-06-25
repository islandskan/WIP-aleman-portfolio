import styles from '../styles/Home.module.css';
import Link from 'next/link';

export const ProjectList = ({ projects, url }) => {
    const projectList = projects.map((project) => (
        <li key={project.sys.id} className={styles.projectLink}>
            <Link href={`${url}/${project.fields.slug}`}>
                {project.fields.projectTitle}
            </Link>
        </li>
    ));
    return (
        <>
            <ul id='works' className={styles.projectsList}>
                {projectList}
            </ul>
        </>
    );
};
