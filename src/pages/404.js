import Link from 'next/link';
import { MetaData } from '../components/MetaData';

const NotFound = () => {
    return (
        <>
            <MetaData page='Not Found' />
            <div className='pageTitleWrapper'>
                <h2 className='pageTitle'> 404 - Page Not Found</h2>
            </div>
            <div className='txtContainer'>
                <p>
                    Go back to the <Link href='/'>Start page</Link>
                </p>
                <p>
                    Check out some of{' '}
                    <Link href='/works'>Madeleine&apos;s work</Link>
                </p>
                <p>
                    Or maybe read some of{' '}
                    <Link href='/published'>
                        Madeleine&apos;s published texts
                    </Link>
                </p>
            </div>
        </>
    );
};

export default NotFound;
