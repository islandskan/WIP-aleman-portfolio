import { MetaData } from '../components/MetaData';
import { ContactElement } from '../components/Contact';
import styles from '../styles/components/Contact.module.css';

const Contact = () => {
    return (
        <>
            <MetaData page='Contact' />
            <div className='wrapper text-wrapper'>
                <h2 className='page-title'>Contact</h2>
                <p className='paragraph'>
                    Interested in collaborations, starting a new project, or
                    just want to say hi? <br />
                    Use the contact form to contact me and I&apos;ll get back to
                    you as soon as I can.
                </p>
                <p className='paragraph link'>email address</p>
            </div>
            {/* <ContactElement /> */}
        </>
    );
};

export default Contact;
