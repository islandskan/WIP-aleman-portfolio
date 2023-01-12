import Link from 'next/link';
function HomePage() {
    return (
        <>
            <div>Welcome to Next.js!</div>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/projects'>Projects</Link>
        </>
    );
}

export default HomePage;
