import { MetaData } from '../components/MetaData';
import styles from '../styles/Contact.module.css';
import { InputField, TextArea } from '../components/FormElements';
import { useState, useEffect } from 'react';
import { Button } from '../components/Button';
// import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        subject: '',
        fullName: '',
        email: '',
        message: '',
    });

    const [sent, setSent] = useState(false);

    const handleChange = (event) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            };
        });
    };

    const handleSubmit = () => {
        setSent(true);
        console.log('Form data sent');
        console.log(formData);
    };

    useEffect(() => {
        setTimeout(() => {
            setSent(false);
            console.log(sent);
        }, 3000);
    }, [sent]);

    return (
        <>
            <MetaData page='Contact' />
            <div className={`container ${styles.contact}`}>
                <div className={styles.formIntro}>
                    <h2 className='page-title'>Contact</h2>
                    <p className={`paragraph ${styles.contactParagraph}`}>
                        Interested in collaborations, starting a new project, or
                        just want to say hi? <br />
                        Use the contact form to contact me and I&apos;ll get
                        back to you as soon as I can.
                    </p>
                </div>
                <div className={styles.formContainer}>
                    {!sent ? (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <InputField
                                labelFor='fullname'
                                labelTitle='Full Name'
                                inputType='text'
                                inputId='fullname'
                                inputName='fullName'
                                placeholder='Write full name here'
                                isRequired={true}
                                labelClass={styles.label}
                                inputClass={styles.input}
                                handleClick={handleChange}
                                value={formData.fullName}
                            />
                            <InputField
                                labelFor='email'
                                labelTitle='Email'
                                inputType='email'
                                inputId='email'
                                inputName='email'
                                placeholder='Write email here'
                                isRequired={true}
                                labelClass={styles.label}
                                inputClass={styles.input}
                                handleClick={handleChange}
                                value={formData.email}
                            />
                            <InputField
                                labelFor='subject'
                                labelTitle='Subject'
                                inputType='text'
                                inputId='subject'
                                inputName='subject'
                                placeholder='Write subject here'
                                isRequired={false}
                                labelClass={styles.label}
                                inputClass={styles.input}
                                handleClick={handleChange}
                                value={formData.subject}
                            />
                            <TextArea
                                labelFor='message'
                                labelTitle='Message'
                                textareaName='message'
                                textareaId='message'
                                placeholder='Write your message here'
                                isRequired={true}
                                labelClass={styles.label}
                                textareaClass={styles.textarea}
                                handleClick={handleChange}
                                value={formData.message}
                            />
                            <Button
                                type='submit'
                                classname={styles.submit}
                                text='Send Message'
                            />
                        </form>
                    ) : (
                        <div className={styles.submitMsg}>
                            <h1>Email Sent!</h1>
                            <p>Going back in 3 secs...</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Contact;
