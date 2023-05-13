import styles from '../styles/components/GoBackLink.module.css';
import { useRouter } from 'next/router';

export const GoBackLink = ({ slug }) => {
    const router = useRouter();
    const currentPage = router.pathname;

    let getBackURL = currentPage.replace(`/${slug}`, '');

    return (
        <div className={styles.goBackContainer}>
            <button type='button' onClick={() => router.push(getBackURL)}>
                Go Back
            </button>
        </div>
    );
};
