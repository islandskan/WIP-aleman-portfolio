import SeeMoreLink from './SeeMoreLink';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { SrOnly } from './SrOnly.js';
import { getCardImg } from '../utils/getProjectContent';

const ProjectCard = ({ card }) => {
    const cardImgSizes = getCardImg(card);

    const { slug, projectThumbnail, projectTitle } = card.fields;
    const { height, width } = cardImgSizes;
    // console.log(`${projectTitle}, Height: ${height}, width: ${width}`);
    const thumbnailImgUrl = `https:${projectThumbnail.fields.file.url}`;
    const isTallImg = height > width;
    // console.log(isTallImg, projectTitle);

    return (
        <li
            className={`${styles.projectCard} ${isTallImg ? styles.tall : ''}`}
            key={slug}
        >
            <Link href={`/works/${slug}`}>
                <SrOnly text={`Go to ${projectTitle}`} />
                <h4 className={styles.projectCard__title}>{projectTitle}</h4>
                <Image
                    src={thumbnailImgUrl}
                    alt={projectTitle}
                    height={height}
                    width={width}
                    className={styles.projectsCard__thumbnail}
                    loading='lazy'
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
