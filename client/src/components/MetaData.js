import Head from 'next/head';

export const MetaData = (props) => {
    return (
        <Head>
            <title>{`Madeleine Aleman | ${props.page}`}</title>
        </Head>
    );
};
