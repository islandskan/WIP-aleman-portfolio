import Link from 'next/link';
import { BurgerMenu } from './BurgerMenu';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export const Navbar = ({ className }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    let menuRef = useRef();
    const router = useRouter();
    const currentPage = router.pathname;

    console.log(className);
    let isMenuOpen = isExpanded ? 'open' : '';

    // closes mobile menu when you click somewhere outside
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

    const links = [
        { url: '/', name: 'Home' },
        { url: '/works', name: 'Works' },
        { url: '/about', name: 'About' },
        { url: '/news', name: 'News' },
        { url: '/contact', name: 'Contact' },
    ];
    const menuLinks = links.map((link, index) => (
        <li
            key={index}
            className={`menu__link ${currentPage === link.url ? 'active' : ''}`}
        >
            <Link href={link.url}>{link.name}</Link>
        </li>
    ));

    return (
        <nav ref={menuRef} className={className}>
            <div className='nav_container'>
                <Link className='logo' href='/' aria-hidden='true'>
                    Madeleine Aleman
                </Link>
                <BurgerMenu handleClick={handleClick} isExpanded={isExpanded} />
                <div className={`menu ${isMenuOpen}`}>
                    <ul>{menuLinks}</ul>
                </div>
            </div>
        </nav>
    );
};
