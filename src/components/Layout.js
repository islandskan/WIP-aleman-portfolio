import { Navbar } from './Navbar';
import { useRouter } from 'next/router';

export const Layout = ({ children }) => {
    const router = useRouter();
    const currentPage = router.pathname;
    const regex = /works\//gi;

    const isProjectPage = currentPage.match(regex);
    console.log(isProjectPage);
    // className={`menuLink ${
    //     currentPage === link.url ? 'active' : ''
    // }`}

    return (
        <div className='layout'>
            <Navbar currentPage={currentPage} />

            <main
                className={`container ${isProjectPage ? 'projectLayout' : ''}`}
            >
                {children}
            </main>
        </div>
    );
};
