import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components/ProjectList.module.css';
import { SrOnly } from './SrOnly.js';

const ProjectListItem = ({ project }) => {
    const {
        endYear,
        projectLinkUrl,
        projectLinksTitle,
        startYear,
        projectThumbnail,
    } = project.fields;
    console.log(projectThumbnail);

    const { title: imageAltText } = projectThumbnail.fields;
    const imageUrl = `https:${projectThumbnail.fields.file.url}`;
    console.log(imageUrl);
    console.log(imageAltText);
    const { height, width } = projectThumbnail.fields.file.details.image;

    console.log(height, width);

    return (
        <li key={projectLinkUrl} className={`${styles.projectLink} listChild`}>
            <div className={styles.projectLinkWrapper}>
                <Link
                    href={`/works/${projectLinkUrl}`}
                    className={styles.projectLinkUrl}
                >
                    <SrOnly text={`Go to ${projectLinksTitle}`} />

                    {projectLinksTitle}
                    {/* <span>{`${startYear} - ${endYear}`}</span> */}
                </Link>
                <span>{`${startYear} - ${endYear}`}</span>
            </div>
            {projectThumbnail && (
                <Link
                    href={`/works/${projectLinkUrl}`}
                    className={`skipLink ${styles.projectImgLink}`}
                    tabIndex='-1'
                >
                    <Image
                        src={imageUrl}
                        alt={imageAltText}
                        height={height}
                        width={width}
                        loading='lazy'
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                </Link>
            )}
        </li>
    );
};

export default ProjectListItem;
