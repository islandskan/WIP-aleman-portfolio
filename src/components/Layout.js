import { Navbar } from './Navbar';
import { Logo } from './Logo';

export const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Logo />

            <main className='container'>{children}</main>

            <Navbar />
        </div>
    );
};
