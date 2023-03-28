import styles from '../styles/components/Validations.module.css';

export const Tooltips = ({ tooltiptxt }) => {
    /*Logic that's needed
    - empty input values:
            x = access the value from the input fields
            if x === '',  hint that the input must be filled out
    -
    */

    return (
        <div className={styles.tooltip} tabIndex='-1'>
            <span className={styles.tooltip__txt}>{tooltiptxt}</span>
        </div>
    );
};
