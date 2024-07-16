import { PropTypes } from "prop-types";

const Input = ({ label, id, isDisable, type, placeholder, hasError, defaultValue, errorMessage, hasLeftIcon, hasRightIcon, clickableIcon, icon, register, handleClick, onChange }) => {

    return (
        <>
            <label htmlFor={id} className="block my-2 capitalize">{label}</label>
            <div className={`flex px-4 py-2 border-2 ${hasError ? "border-error" : "border-gray-1 focus-within:border-color-primary focus:ring-0"}`}>
                {hasLeftIcon ? <span className='mr-2'>
                    {clickableIcon ? <button type="button" onClick={handleClick}>{icon}</button> : icon}
                </span> : ""}
                <input
                    id={id}
                    type={type}
                    disabled={isDisable}
                    placeholder={placeholder}
                    className="w-full border-none outline-none bg-transparent "
                    defaultValue={defaultValue}
                    onChange={onChange}
                    {...register}
                />
                {hasRightIcon ? <span className='ml-2'>
                    {clickableIcon ? <button type="button" onClick={handleClick}>{icon}</button> : icon}
                </span> : ""}
            </div>
            <small className="text-error">{errorMessage}</small>
        </>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    isDisable: PropTypes.bool,
    href: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    errorMessage: PropTypes.string,
    hasLeftIcon: PropTypes.bool,
    hasRightIcon: PropTypes.bool,
    clickableIcon: PropTypes.bool,
    register: PropTypes.register,
    handleClick: PropTypes.func,
    onChange: PropTypes.func,
    hasError: PropTypes.bool,
    icon: PropTypes.element,
    onClick: PropTypes.func
};

export default Input;