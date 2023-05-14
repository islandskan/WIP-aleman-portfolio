import { Navbar } from './Navbar';
import SkipToMain from './SkipToMain';

export const Layout = ({ children }) => {
    return (
        <>
            <SkipToMain href='' />
            <Navbar />
            <main tabIndex={-1} className='layout'>
                {children}
            </main>
        </>
    );
};
