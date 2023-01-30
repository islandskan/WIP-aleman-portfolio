import Link from 'next/link';
import { MetaData } from '../components/MetaData';

const NotFound = () => {
    return (
        <>
            <MetaData page='Not Found' />
            <div className='not-found container'>
                <h2 className='page-title'>Not found</h2>
                <p>
                    Go back to the <Link href='/'>Homepage</Link>
                </p>
            </div>
        </>
    );
};

export default NotFound;
