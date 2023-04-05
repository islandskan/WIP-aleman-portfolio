import SeeMoreLink from './SeeMoreLink';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { SrOnly } from './SrOnly.js';
import { resizeImg } from '../utils/resizeProjectImg';

const ProjectCard = ({ card }) => {
    // const cardImgSizes = resizeImg(card);

    console.log(card.fields.projectThumbnail.fields.file.details.image);

    const { slug, projectThumbnail, projectTitle } = card.fields;
    // const { height, width } = cardImgSizes;
    // console.log(`${projectTitle}, Height: ${height}, width: ${width}`);
    const thumbnailImgUrl = `https:${projectThumbnail.fields.file.url}`;
    const { height, width } =
        card.fields.projectThumbnail.fields.file.details.image;
    console.log(height, width);

    return (
        <li className={`${styles.projectCard}`} key={slug}>
            <Link href={`/works/${slug}`}>
                <SrOnly text={`Go to ${projectTitle}`} />
                <h4 className={styles.projectCard__title}>{projectTitle}</h4>
                <Image
                    src={thumbnailImgUrl}
                    alt={projectTitle}
                    height='500'
                    width='500'
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
