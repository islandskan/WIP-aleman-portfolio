import styles from '../styles/components/Contact.module.css';
import { InputField, TextArea } from './FormElements.js';
import { useState, useEffect } from 'react';
import { send } from 'emailjs-com';
import { Button } from './Button';

export const ContactElement = () => {
    const [value, setValue] = useState('');
    const onInput = (e) => {
        setValue(e.target.value);
        console.log(e.target.value);
    };

    const onClear = () => {
        setValue('');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        sendSubmit();
        e.target.reset();
    };

    const sendSubmit = () => {
        console.log('Hello');
    };

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <InputField
                labelFor='fullname'
                labelTitle='Full Name'
                inputType='text'
                inputId='fullname'
                inputName='from_fullname'
                placeholder='Write full name here'
                isRequired={true}
                labelClass={styles.label}
                inputClass={styles.input}
                value={value}
                onChange={onInput}
            />
            <InputField
                labelFor='email'
                labelTitle='Email'
                inputType='email'
                inputId='email'
                inputName='from_email'
                placeholder='Write email here'
                isRequired={true}
                labelClass={styles.label}
                inputClass={styles.input}
                value={value}
                onChange={onInput}
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
                value={value}
                onChange={onInput}
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
                value={value}
                onChange={onInput}
            />
            <fieldset className={styles.formBtns}>
                <Button
                    type='submit'
                    classname={styles.submit}
                    text='Send Message'
                />
                <Button
                    type='reset'
                    classname={styles.reset}
                    text='Reset'
                    onClick={onClear}
                />
            </fieldset>
        </form>
    );
};
