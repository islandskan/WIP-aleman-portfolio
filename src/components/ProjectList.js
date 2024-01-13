import styles from '../styles/components/ProjectList.module.css';
import Link from 'next/link';

export const ProjectList = ({ projects, url }) => {
    const projectList = projects.map(
        (project) =>
            project.fields && (
                <li
                    key={project.sys.id}
                    className={`${styles.projectLink} listChild`}
                >
                    <Link href={`${url}/${project.fields?.slug}`}>
                        {project.fields?.projectTitle}
                    </Link>
                </li>
            )
    );
    return (
        <>
            <ul id='works' className='listLayout'>
                {projectList}
            </ul>
        </>
    );
};
