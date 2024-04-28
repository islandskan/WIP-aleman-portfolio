// import styles from '../styles/components/Contact.module.css';
// import { Button } from './Button';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';

// export const ContactElement = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         reset,
//     } = useForm();

//     const onSubmit = async (data) => {
//         let config = {
//             method: 'post',
//             url: `${process.env.EMAIL_API_URL}/api/contact`,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             data,
//         };

//         try {
//             const response = await axios(config);
//             if (response.status == 200) {
//                 ('Successful submission');
//                 (response);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
//             <label htmlFor='fullname' className={styles.label}>
//                 Full Name
//             </label>
//             <input
//                 type='text'
//                 name='from_fullname'
//                 id='fullname'
//                 {...register('from_fullname')}
//                 className={styles.input}
//                 placeholder='Enter your full name'
//             />

//             <label htmlFor='email' className={styles.label}>
//                 Email
//             </label>
//             <input
//                 type='text'
//                 name='from_email'
//                 id='email'
//                 {...register('from_email', {
//                     required: {
//                         value: true,
//                         message: 'Please enter an email address',
//                     },
//                     pattern: {
//                         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
//                         message: 'Invalid email address',
//                     },
//                 })}
//                 className={`${styles.input} ${
//                     errors.name ? 'styles.errorInput' : null
//                 }`}
//                 placeholder='Enter your email'
//             />
//             {errors?.from_email && (
//                 <p className={styles.errorMsg}>{errors.from_email?.message}</p>
//             )}

//             <label htmlFor='subject' className={styles.label}>
//                 Subject
//             </label>
//             <input
//                 type='text'
//                 name='subject'
//                 id='subject'
//                 {...register('subject')}
//                 className={styles.input}
//                 placeholder='Enter subject of your message'
//             />

//             <label htmlFor='message' className={styles.label}>
//                 Message
//             </label>

//             <textarea
//                 name='message'
//                 id='message'
//                 {...register('message', {
//                     required: {
//                         value: true,
//                         message: 'Please enter your message',
//                     },
//                 })}
//                 className={styles.textarea}
//                 placeholder='Enter your message'
//             />
//             {errors?.message && (
//                 <p className={styles.errorMsg}>{errors.message?.message}</p>
//             )}

//             <fieldset className={styles.formBtns}>
//                 <Button
//                     type='submit'
//                     classname={styles.submit}
//                     text='Send Message'
//                 />
//             </fieldset>
//         </form>
//     );
// };
