import { MetaData } from '../components/MetaData';
import { ContactElement } from '../components/Contact';
import { createClient } from 'contentful';

import styles from '../styles/components/Contact.module.css';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getAsset('4nx3gWODBf2IqawTOJjAby');
    if (!res) {
        return { notFound: true };
    }

    return {
        props: {
            res,
        },
    };
}

const Contact = ({ res }) => {
    // const { details, url } = res.fields.file;
    // const HEIGHT = details.image.height;
    // const WIDTH = details.image.width;

    // console.log(HEIGHT, WIDTH);
    console.log(res);
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
                <div className='wrapper'>
                    <h5>Email</h5>
                    <p className='paragraph link'>info@aleman.se</p>
                </div>
                <div>
                    <h5>Instagram</h5>
                    <a
                        className='paragraph link'
                        href='https://www.instagram.com/madeleinealeman/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        @madeleinealeman
                    </a>
                </div>
            </div>
            {/* <ContactElement /> */}
        </>
    );
};

export default Contact;
