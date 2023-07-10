import Link from 'next/link';
import { useRouter } from 'next/router';
import { links } from '../data/menuLinks';

export const Navbar = () => {
    const router = useRouter();
    const currentPage = router.pathname;

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
        <nav>
            <ul className='menu'>{menuLinks}</ul>
        </nav>
    );
};
