import styles from '../styles/components/SrOnly.module.css';
export const SrOnly = ({ text }) => {
    return <span className={styles.srOnly}>{text}</span>;
};
