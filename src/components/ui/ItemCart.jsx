import { PropTypes } from "prop-types";

const ItemCart = ({ children, disable }) => {
    return (
        <div className={`w-40 h-[30px] overflow-hidden box-border relative flex justify-center items-center text-sm text-center border ${disable ? "border-gray-1 text-gray-1" : "border-black"}`}>
            {disable && <span
                className="absolute inset-0 -left-0.5 translate-y-[14px] w-[164.2px] h-[1px] bg-gray-1 rotate-[10deg]"></span>}
            {children}
        </div>
    )
}

ItemCart.propTypes = {
    children: PropTypes.string,
    disable: PropTypes.bool,
};

export default ItemCart;