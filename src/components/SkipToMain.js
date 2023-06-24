import Link from 'next/link';
import styles from '../styles/components/SkipToMainLink.module.css';

const SkipToMain = ({ href }) => {
    return (
        <Link href={href} className={styles.skipNavLink} scroll={false}>
            skip navigation
        </Link>
    );
};

export default SkipToMain;
