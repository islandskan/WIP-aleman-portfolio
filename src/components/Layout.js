import { Navbar } from './Navbar';
import SkipToMain from './SkipToMain';
import styles from '../styles/Landing.module.css';
import { useRouter } from 'next/router';

export const Layout = ({ children }) => {
    const router = useRouter();
    const currentPage = router.pathname;
    const isLandingPage = currentPage === '/';

    console.log(styles);
    return (
        <>
            <div
                className={`layout ${
                    isLandingPage ? styles.landingLayout : ''
                }`}
            >
                <SkipToMain href='#main-content' />
                <Navbar className={`${isLandingPage ? 'landingPage' : ''}`} />

                <main tabIndex={-1}>{children}</main>
            </div>
        </>
    );
};
