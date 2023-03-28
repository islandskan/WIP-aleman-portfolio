import { MetaData } from '../components/MetaData';
import { ContactElement } from '../components/Contact';
import styles from '../styles/components/Contact.module.css';

const Contact = () => {
    return (
        <>
            <MetaData page='Contact' />
            <div id='contact' className={`container ${styles.formContainer}`}>
                <div className={styles.projectContainer}>
                    <h2 className='page-title'>Contact</h2>
                    <p className='paragraph'>
                        Interested in collaborations, starting a new project, or
                        just want to say hi? <br />
                        Use the contact form to contact me and I&apos;ll get
                        back to you as soon as I can.
                    </p>
                </div>
                <ContactElement />
            </div>
        </>
    );
};

export default Contact;
