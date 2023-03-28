import { Tooltips } from './ValidationElements';

export const InputField = ({
    labelFor,
    labelClass,
    labelTitle,
    inputType,
    inputId,
    inputName,
    placeholder,
    isRequired,
    inputClass,
    handleClick,
}) => {
    return (
        <>
            <label htmlFor={labelFor} className={labelClass}>
                {labelTitle}
            </label>
            {/* <Tooltips tooltiptxt='Hello' /> */}
            <input
                type={inputType}
                id={inputId}
                name={inputName}
                placeholder={placeholder}
                required={isRequired}
                className={inputClass}
                onChange={handleClick}
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
            {/* <Tooltips tooltiptxt='Hello' /> */}
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
