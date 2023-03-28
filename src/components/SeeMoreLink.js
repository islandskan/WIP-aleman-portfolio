import Link from 'next/link';
import { GrLinkNext } from 'react-icons/gr';
import styles from '../styles/components/SeeMoreLink.module.css';
import { SrOnly } from './SrOnly.js';
const SeeMoreLink = ({ text, slug, linkClass, skipSrOnly, srLinkName }) => {
    return (
        <>
            <Link
                aria-hidden={skipSrOnly ? 'true' : 'false'}
                className={`${styles.seeMoreLink} ${linkClass}`}
                href={slug}
            >
                <span>{text}</span>
                {/* <GrLinkNext className={`${styles.linkIcon} ${linkClass}`} /> */}
                {!skipSrOnly ? <SrOnly text={srLinkName} /> : ''}
            </Link>
        </>
    );
};

export default SeeMoreLink;
