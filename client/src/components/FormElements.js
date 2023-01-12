export const InputField = (props) => {
    return (
        <>
            <label htmlFor={props.labelFor} className={props.labelClass}>
                {props.labelTitle}
            </label>
            <input
                type={props.inputType}
                id={props.inputId}
                name={props.inputName}
                placeholder={props.placeholder}
                required={props.isRequired}
                className={props.inputClass}
                onChange={props.handleClick}
            />
        </>
    );
};

export const TextArea = (props) => {
    return (
        <>
            <label htmlFor={props.labelFor} className={props.labelClass}>
                {props.labelTitle}
            </label>
            <textarea
                name={props.textareaName}
                id={props.textareaId}
                placeholder={props.placeholder}
                required={props.isRequired}
                className={props.textareaClass}
                onChange={props.handleClick}
            />
        </>
    );
};
