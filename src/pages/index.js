import { MetaData } from '../components/MetaData';
import styles from '../styles/Landing.module.css';
function HomePage() {
    return (
        <>
            <MetaData page='Home' />
            <div className={styles.backgroundImg}></div>
        </>
    );
}

export default HomePage;
