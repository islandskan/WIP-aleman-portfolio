import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { SrOnly } from './SrOnly.js';
import { getCardImg } from '../utils/getProjectContent';

const ProjectCard = ({ card }) => {
    const cardImgSizes = getCardImg(card);

    const { slug, projectThumbnail, projectTitle } = card.fields;
    const { height, width } = cardImgSizes;
    const thumbnailImgUrl = `https:${projectThumbnail.fields.file.url}`;
    const isTallImg = height > width;

    return (
        <li
            className={`${styles.projectCard} ${isTallImg ? styles.tall : ''}`}
            key={slug}
        >
            <Link href={`/works/${slug}`}>
                <SrOnly text={`Go to ${projectTitle}`} />
                <h4 className={styles.projectCardTitle}>{projectTitle}</h4>
                <Image
                    src={thumbnailImgUrl}
                    alt={projectTitle}
                    height={height}
                    width={width}
                    className={styles.projectsCardThumbnail}
                    loading='lazy'
                />
            </Link>
        </li>
    );
};

export default ProjectCard;
