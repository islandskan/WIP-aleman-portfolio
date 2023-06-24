import { SrOnly } from './SrOnly';
export const BurgerMenu = ({ isExpanded, handleClick }) => {
    let burgerStyles = isExpanded ? 'open' : '';
    let burgerSrText = isExpanded ? 'Close Mobile Menu' : 'Open Mobile Menu';
    return (
        <>
            <button
                className={`burgerMenu ${burgerStyles}`}
                onClick={handleClick}
            >
                <div className='line' aria-hidden='true'></div>
                <div className='line' aria-hidden='true'></div>
                <div className='line' aria-hidden='true'></div>
                <SrOnly text={burgerSrText} />
            </button>
        </>
    );
};
