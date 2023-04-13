import styles from '../styles/components/Contact.module.css';
// import { send } from 'emailjs-com';
import { Button } from './Button';
import { useForm } from 'react-hook-form';

export const ContactElement = () => {
    // formState: {isSubmitted, isSubmitSuccessful, isSubmitting, isLoading, isValid, isValidating}
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const delayInMS = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onSubmit = async (data) => {
        await delayInMS(2000);
        console.log(JSON.stringify(data));
        console.log(errors);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <>
                <label htmlFor='fullname' className={styles.label}>
                    Full Name
                </label>
                <input
                    type='text'
                    name='from_fullname'
                    id='fullname'
                    {...register('from_fullname')}
                    className={styles.input}
                    placeholder='Enter your full name'
                />
            </>

            <>
                <label htmlFor='email' className={styles.label}>
                    Email
                </label>
                <input
                    type='email'
                    name='from_email'
                    id='email'
                    {...register('from_email', {
                        required: true,
                        pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    })}
                    className={styles.input}
                    placeholder='Enter your email'
                />
            </>

            <label htmlFor='subject' className={styles.label}>
                Subject
            </label>
            <input
                type='text'
                name='subject'
                id='subject'
                {...register('subject')}
                className={styles.input}
                placeholder='Enter subject of your message'
            />

            <label htmlFor='message' className={styles.label}>
                Message
            </label>

            <textarea
                name='message'
                id='message'
                {...register('message', { required: 'Please enter a message' })}
                className={styles.textarea}
                placeholder='Enter your message'
            />

            <fieldset className={styles.formBtns}>
                <Button
                    type='submit'
                    classname={styles.submit}
                    text='Send Message'
                />
                <Button type='reset' classname={styles.reset} text='Reset' />
            </fieldset>
        </form>
    );
};
