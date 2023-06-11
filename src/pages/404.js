import Link from 'next/link';
import { MetaData } from '../components/MetaData';

const NotFound = () => {
    return (
        <>
            <MetaData page='Not Found' />

            <div className='page-title-wrapper'>
                <h2 className='page-title'> 404 - Page Not Found</h2>
                <h3 className='pageSub-title'>
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
