import styles from '../styles/components/GoBackLink.module.css';
import { Button } from './Button.js';
import { useRouter } from 'next/router';

export const GoBackLink = ({ slug }) => {
    const router = useRouter();
    const currentPage = router.pathname;

    let getBackURL = currentPage.replace(`/${slug}`, '');

    return (
        <div className={styles.goBackContainer}>
            <Button
                type='button'
                classname={styles.goBackBtn}
                onClick={() => router.push(getBackURL)}
                text='Go Back'
            />
        </div>
    );
};
