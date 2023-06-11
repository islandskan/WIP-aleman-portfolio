import { Navbar } from './Navbar';
import SkipToMain from './SkipToMain';
import { Logo } from './Logo';

export const Layout = ({ children }) => {
    return (
        <>
            <SkipToMain href='' />
            <Logo />
            <main tabIndex={-1} className='layout'>
                <div className='container'>{children}</div>
            </main>
            <Navbar />
        </>
    );
};
