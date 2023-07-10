import { Navbar } from './Navbar.js';
import { Logo } from './Logo.js';

export const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Logo />

            <main className='container'>{children}</main>

            <Navbar />
        </div>
    );
};
