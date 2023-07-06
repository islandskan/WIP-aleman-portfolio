import { MetaData } from '../components/MetaData';
import { createClient } from 'contentful';
import Image from 'next/image';
import styles from '../styles/Contact.module.css';

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
    const { details, url } = res.fields.file;
    const HEIGHT = details.image.height;
    const WIDTH = details.image.width;
    const EMAIL = 'info@aleman.se';
    const INSTA = '@madeleinealeman';

    return (
        <>
            <MetaData page='Contact' />
            <div className={`wrapper ${styles.contact}`}>
                <div className={styles.contactWrapper}>
                    <div>
                        <h4>Email</h4>
                        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </div>
                    <div>
                        <h4>Instagram</h4>
                        <a
                            href='https://www.instagram.com/madeleinealeman/'
                            rel='noreferrer'
                            target='_blank'
                        >
                            {INSTA}
                        </a>
                    </div>
                </div>

                <Image
                    alt={res.fields.title}
                    src={`https:${url}`}
                    height={HEIGHT}
                    width={WIDTH}
                />
            </div>
        </>
    );
};

export default Contact;
