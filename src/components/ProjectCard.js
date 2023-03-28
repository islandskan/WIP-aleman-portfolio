import SeeMoreLink from './SeeMoreLink';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { SrOnly } from './SrOnly.js';
const ProjectCard = ({ card }) => {
    const { slug, projectThumbnail, projectTitle } = card.fields;

    const thumbnailImgUrl = `https:${projectThumbnail.fields.file.url}`;

    return (
        <li className={`${styles.projectCard}`} key={slug}>
            <Link
                href={`/works/${slug}`}
                className={styles.projectsCard__thumbnail}
            >
                <SrOnly text={`Go to ${projectTitle}`} />
                <h4 className={styles.projectCard__title}>{projectTitle}</h4>
                <Image
                    src={thumbnailImgUrl}
                    alt={projectTitle}
                    height='300'
                    width='600'
                    className={styles.projectsCard__thumbnail}
                />
            </Link>
            <SeeMoreLink
                slug={`/works/${slug}`}
                text='See Project'
                skipSrOnly
            />
        </li>
    );
};

export default ProjectCard;
