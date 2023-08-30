import Link from 'next/link';
import { links } from '../data/menuLinks';
import styles from '../styles/components/MenuLink.module.css';

export const Navbar = ({ currentPage }) => {
    const menuLinks = links.map((link, index) => (
        <li key={index}>
            <Link
                href={link.url}
                className={`${styles.menuLink} skipLink ${
                    currentPage === link.url ? styles.active : ''
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
