import '../styles/globals.css';
import { Layout } from '../components/Layout';

export default function App({ Component, pageProps, res }) {
    return (
        <Layout res={res}>
            <Component {...pageProps} />
        </Layout>
    );
}
