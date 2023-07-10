import { Navbar } from './Navbar.js';
import { Logo } from './Logo.js';

export const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Logo />
            {/* <Navbar /> */}

            <main className='container'>{children}</main>
        </div>
    );
};
