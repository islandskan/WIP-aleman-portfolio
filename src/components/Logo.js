import Link from 'next/link';
import { Navbar } from './Navbar';

export const Logo = () => {
    return (
        <header>
            <Link className='logo' href='/'>
                Madeleine Aleman
            </Link>
            <Navbar />
        </header>
    );
};
