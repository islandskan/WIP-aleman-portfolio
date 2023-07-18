import { Navbar } from './Navbar';
import { useRouter } from 'next/router';
import { isProjectPage } from '../utils/isProjectPage';

export const Layout = ({ children }) => {
    const router = useRouter();
    const currentPage = router.pathname;

    return (
        <div className='layout'>
            <Navbar currentPage={currentPage} />

            <main
                className={`container ${() =>
                    isProjectPage(currentPage) ? 'projectLayout' : ''}`}
            >
                {children}
            </main>
        </div>
    );
};
