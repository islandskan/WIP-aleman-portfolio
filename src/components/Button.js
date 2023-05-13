export const Button = ({ type, classname, text, onClick }) => {
    return (
        <button type={type} className={`btn ${classname}`} onClick={onClick}>
            {text}
        </button>
    );
};
