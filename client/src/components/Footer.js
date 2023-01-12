import Link from 'next/link';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className='footer-list'>
                <h6 className='footer-heading'>Other Links</h6>
                <ul className='footer-links'>
                    <li>
                        <Link
                            href='https://www.instagram.com/madeleinealeman/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Instagram
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='https://ed-art.se/sv/konstnarer/132__madeleine-aleman/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Buy Prints (Ed Art)
                        </Link>
                    </li>
                </ul>
            </div>
            <small>&copy; Madeleine Aleman {currentYear}</small>
        </footer>
    );
};
