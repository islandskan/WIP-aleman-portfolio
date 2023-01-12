export const BurgerMenu = (props) => {
    let burgerStyles = props.isExpanded ? 'open' : '';
    return (
        <>
            <button
                className={`burger-menu ${burgerStyles}`}
                onClick={props.handleClick}
            >
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </button>
        </>
    );
};
