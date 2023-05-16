import { Navbar } from './Navbar';
import SkipToMain from './SkipToMain';
import { Logo } from './Logo';

export const Layout = ({ children }) => {
    return (
        <>
            <SkipToMain href='' />
            <Logo />
            <Navbar />
            <main tabIndex={-1} className='layout'>
                {children}
            </main>
        </>
    );
};
