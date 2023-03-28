export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer'>
            <section className='footer__link-container'></section>
            <section className='footer__small-container'>
                <small>&copy; Madeleine Aleman 2006 - {currentYear}</small>
            </section>
        </footer>
    );
};
