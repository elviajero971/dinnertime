import React from "react";

const Spinner = React.forwardRef((props, ref) => (
        <div ref={ref} className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-gray-300"></div>
        </div>
    ));

export default Spinner;
