import Link from 'next/link';
import { links } from '../data/menuLinks';

export const Navbar = ({ currentPage }) => {
    const menuLinks = links.map((link, index) => (
        <li key={index}>
            <Link
                href={link.url}
                className={`menuLink ${
                    currentPage === link.url ? 'active' : ''
                }`}
            >
                {link.name}
            </Link>
        </li>
    ));

    return (
        <header>
            <Link className='logo' href='/'>
                Madeleine Aleman
            </Link>
            <nav>
                <ul className='menu'>{menuLinks}</ul>
            </nav>
        </header>
    );
};
