import Link from 'next/link';
import { BurgerMenu } from './BurgerMenu';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { links } from '../data/menuLinks';

export const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    let menuRef = useRef();
    const router = useRouter();
    const currentPage = router.pathname;

    let isMenuOpen = isExpanded ? 'open' : '';

    useEffect(() => {
        const handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsExpanded(false);
            }
        };
        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, []);

    const handleClick = () => {
        setIsExpanded((prevState) => !prevState);
    };

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
        <nav ref={menuRef}>
            <div className='navContainer'>
                <BurgerMenu handleClick={handleClick} isExpanded={isExpanded} />

                <ul className={`menu ${isMenuOpen}`}>{menuLinks}</ul>
            </div>
        </nav>
    );
};
