import { useRef, useState } from "react"
import Arrow from "./icons/Arrow";
import { PropTypes } from "prop-types";

const Accordion = ({ title, content }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    return (
        <div>
            <button
                className="w-full py-3 flex justify-between items-center border-t border-t-gray-1 capitalize"
                onClick={() => setOpen(prev => !prev)}>
                <span>{title}</span>
                <Arrow isRotated={open} />
            </button>

            <div ref={ref}
                className="transition-all duration-300 overflow-hidden"
                style={{ maxHeight: open ? ref.current.scrollHeight : 0 }}
            >
                <p className="pb-4">
                    {content}
                </p>

            </div>
        </div>
    )
}

Accordion.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};

export default Accordion;
