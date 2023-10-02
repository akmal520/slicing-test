import React from 'react';

const Label = (props) => {
    const { children, htmlFor } = props;
    return (
        <label
            htmlFor={htmlFor}
            className="text-base text-primary font-medium font-rubik capitalize cursor-pointer"
        >
            {children}
            <span className="text-[#2161D5] text-base font-medium font-rubik">
                *
            </span>
        </label>
    );
};

export default Label;
