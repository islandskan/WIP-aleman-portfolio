import { Navbar } from './Navbar';
import SkipToMain from './SkipToMain';

export const Layout = ({ children }) => {
    return (
        <>
            <SkipToMain href='#main-content' />
            <Navbar />
            <main tabIndex={-1}>{children}</main>
        </>
    );
};
