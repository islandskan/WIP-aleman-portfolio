// props for click handlers as well

export const Button = ({ type, classname, text }) => {
    return (
        <button type={type} className={`btn ${classname}`}>
            {text}
        </button>
    );
};
