import Link from 'next/link';
import { MetaData } from '../components/MetaData';

const NotFound = () => {
    return (
        <>
            <MetaData page='Not Found' />

            <div className='pageTitleWrapper'>
                <h2 className='pageTitle'> 404 - Page Not Found</h2>
                <h3 className='pageUnderTitle'>
                    Sorry, there is nothing to see here
                </h3>
                <p>Use the links below to navigate back to start</p>
            </div>

            <p>
                Go back to the <Link href='/'>Start page</Link>
            </p>
        </>
    );
};

export default NotFound;
