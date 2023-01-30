import Head from 'next/head';

export const MetaData = ({ page }) => {
    return (
        <Head>
            <title>{`Madeleine Aleman | ${page}`}</title>
            <meta
                name='description'
                content='Swedish artist Madeleine Aleman'
            />
            <meta
                name='author'
                content='Sigridur Eggertsdottir, eggertsdottirsigridur@gmail.com'
            />
            <meta name='copyright' content='Madeleine Aleman' />
            <meta name='twitter:card' content='summary_large_image' />
            {/* <meta name="twitter:site" content="@LucasStahl11" />
     <meta name="twitter:creator" content="@LucasStahl11" />
     <meta name="twitter:title" content="Stahlwalker Cookbook" />
     <meta name="twitter:description" content="A blog dedicated to cooking up recipes for all those far far and away." />
     <meta property="twitter:image" content="https://cookblog.vercel.app/images/starwarssocialfinal.jpg"/>

     <meta property="og:title" content="Stahlwalker Cookbook"/>
     <meta property="og:type" content="website"/>
     <meta property="og:url" content="https://cookblog.vercel.app/"/>
     <meta property="og:image" content="https://cookblog.vercel.app/images/starwarssocialfinal.jpg"/> */}
            {/* <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34=" /> */}
        </Head>
    );
};
