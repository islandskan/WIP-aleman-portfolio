import { MetaData } from '../components/MetaData';
import { createClient } from 'contentful';
import Image from 'next/image';
import styles from '../styles/Contact.module.css';
import { SrOnly } from '../components/SrOnly';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getAsset('OiqdPyN3OUcpCvHv7DeHW');
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
    const INSTA = 'madeleinealeman';

    return (
        <>
            <MetaData page='Contact' />
            <div className={`${styles.contact}`}>
                <div
                    className={`${styles.contactInfoWrapper} pageTitleWrapper`}
                >
                    <h4>
                        Email: <a href={`mailto:${EMAIL}`}> {EMAIL}</a>
                    </h4>

                    <h4>
                        Instagram:{' '}
                        <a
                            href={`https://www.instagram.com/${INSTA}/`}
                            rel='noreferrer'
                            target='_blank'
                        >
                            {INSTA}
                        </a>
                    </h4>
                </div>

                <figure className={styles.contactImg}>
                    <Image
                        alt={res.fields.title}
                        src={`https:${url}`}
                        height={HEIGHT}
                        width={WIDTH}
                        priority
                    />
                </figure>
            </div>
        </>
    );
};

export default Contact;
