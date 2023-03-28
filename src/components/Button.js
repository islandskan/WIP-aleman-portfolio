// props for click handlers as well

export const Button = ({ type, classname, text, onClick }) => {
    return (
        <button type={type} className={`btn ${classname}`} onClick={onClick}>
            {text}
        </button>
    );
};
