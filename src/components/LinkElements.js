import Link from 'next/link';
export const LinkElement = ({ linkText, linkUrl, linkBody }) => {
    return (
        <div className='linkContainer'>
            <Link href={linkUrl} className='link'>
                {linkText}
            </Link>
            {linkBody && <p className='linkBody'>{linkBody}</p>}
        </div>
    );
};
