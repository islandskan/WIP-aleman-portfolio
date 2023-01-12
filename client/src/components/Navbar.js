import Link from 'next/link';
import { BurgerMenu } from './BurgerMenu';
import { useState } from 'react';

export const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    let isMenuOpen = isExpanded ? 'open' : '';

    const handleClick = () => {
        setIsExpanded((prevState) => !prevState);
    };
    // logic to close navbar when you click outside

    return (
        <nav>
            <div className='logo'>
                <Link href='/'>
                    <h1>Madeleine Aleman</h1>
                </Link>
            </div>
            <BurgerMenu handleClick={handleClick} isExpanded={isExpanded} />
            <div className={`menu ${isMenuOpen}`}>
                <ul>
                    <li>
                        <Link href='/'>Projects</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/news'>News</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
