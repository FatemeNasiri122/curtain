import { Link } from 'react-router-dom';
import { PropTypes } from "prop-types";

const Button = ({ children, varient, isDisable, type, href, hasLeftIcon, hasRightIcon, icon, onClick }) => {

    const getVarient = () => {
        switch (varient) {
            case "primary":
                return "bg-color-primary text-white"
            case "outline":
                return "border border-color-primary text-color-primary"
        }
    }

    return (
        <>
            {href ?
                <Link to={href}
                    className={`outline-none uppercase w-full h-10 text-center  transition-all 
                        ${getVarient()}`}
                >
                    {hasLeftIcon ? <span className='mr-2'>{icon}</span> : ""}
                    {children}
                    {hasRightIcon ? <span className='ml-2'>{icon}</span> : ""}
                </Link>
                :
                <button
                    className={`outline-none uppercase w-full h-10 text-center  ${isDisable ? "" : getVarient()}`}
                    onClick={onClick}
                    type={type}
                    disabled={isDisable}
                >
                    {hasLeftIcon ? <span className='mr-2'>{icon}</span> : ""}
                    {children}
                    {hasRightIcon ? <span className='ml-2'>{icon}</span> : ""}
                </button>
            }
        </>
    );
}

Button.propTypes = {
    children: PropTypes.element,
    varient: PropTypes.string,
    isDisable: PropTypes.boolean,
    type: PropTypes.string,
    href: PropTypes.string,
    hasLeftIcon: PropTypes.bool,
    hasRightIcon: PropTypes.bool,
    icon: PropTypes.children,
    onClick: PropTypes.f
};

export default Button;

