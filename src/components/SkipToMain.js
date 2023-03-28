import Link from 'next/link';
import styles from '../styles/components/SkipToMainLink.module.css';

const SkipToMain = ({ href }) => {
    // const handler = (e) => {
    //     console.log(e.key);
    //     if (e.key === 'Enter') {
    //         console.log('Woho');
    //     }
    // };

    return (
        <Link href={href} className={styles.skipNavLink} scroll={false}>
            skip navigation
        </Link>
    );
};

export default SkipToMain;
