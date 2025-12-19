import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components/ProjectList.module.css';
import { SrOnly } from './SrOnly.js';
import { usePathname } from 'next/navigation.js';

const ProjectListItem = ({ project }) => {
    const {
        endYear,
        projectLinkUrl,
        projectLinksTitle,
        projectTitle,
        startYear,
        projectThumbnail,
    } = project.fields;

    const imageAltText = project?.fields?.title;
    const imageUrl = projectThumbnail?.fields?.file?.url
        ? `https:${projectThumbnail.fields.file.url}`
        : null;
    const height = projectThumbnail?.fields?.file?.details?.image?.height;
    const width = projectThumbnail?.fields?.file?.details?.image?.width;
    const hasThumbnail = projectThumbnail && imageUrl && height && width;
    const currentPath = usePathname();

    const projectSubItemUrl = project.fields.slug;

    function setUrl(url) {
        if (!url || url === undefined || url === null) {
            return `${currentPath}/${projectLinkUrl}`;
        } else {
            return `${currentPath}/${url}`;
        }
    }

    function setYear(start, end) {
        if (start && end) {
            return `${start} - ${end}`;
        } else if (start) {
            return `${start}`;
        } else {
            return;
        }
    }

    const setTitle = projectTitle ? projectTitle : projectLinksTitle;

    return (
        <li key={projectLinkUrl} className={`${styles.projectLink} listChild`}>
            <div className={styles.projectLinkWrapper}>
                <Link
                    href={setUrl(projectSubItemUrl)}
                    className={styles.projectLinkUrl}
                >
                    <SrOnly text={`Go to ${setTitle}`} />

                    {setTitle}
                </Link>
                <span>{setYear(startYear, endYear)}</span>
            </div>
            {hasThumbnail && (
                <Link
                    href={setUrl(projectSubItemUrl)}
                    className={`skipLink ${styles.projectImgLink}`}
                    tabIndex='-1'
                >
                    <Image
                        src={imageUrl}
                        alt={imageAltText || 'Project Thumnail'}
                        height={height}
                        width={width}
                        priority
                        // loading='lazy'
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
