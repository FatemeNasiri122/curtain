import Minus from "./icons/Minus";
import Plus from "./icons/Plus";
import { PropTypes } from "prop-types";

const Quantity = ({ number, onMinus, onPlus }) => {
    return (
        <span className="w-28 flex justify-between mt-2 items-center px-2 py-1 border border-black">
            <button type="button" onClick={onMinus}>
                <Minus />
            </button>
            <span className="mx-4">{number}</span>
            <button type="button" onClick={onPlus}>
                <Plus />
            </button>
        </span>
    )
}

Quantity.propTypes = {
    number: PropTypes.number,
    onMinus: PropTypes.func,
    onPlus: PropTypes.func,
};

export default Quantity