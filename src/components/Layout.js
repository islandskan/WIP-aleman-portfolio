import { Navbar } from './Navbar';

import { useRouter } from 'next/router';
import { isProjectPage } from '../utils/isProjectPage';

export const Layout = ({ children }) => {
    const router = useRouter();
    const currentPage = router.pathname;

    const matchPage = isProjectPage(currentPage);
    return (
        <>
            <div className='layout'>
                <Navbar currentPage={currentPage} />

                <main
                    className={`container ${matchPage ? 'projectLayout' : ''}`}
                >
                    {children}
                </main>
            </div>
        </>
    );
};
