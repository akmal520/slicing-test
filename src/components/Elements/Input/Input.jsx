import React from 'react';

const Input = (props) => {
    const { type, name } = props;
    return (
        <input
            id={name}
            name={name}
            type={type}
            className="w-full mt-2 p-2 h-14 border border-[#D9D9D9] rounded-md focus:ring-[#2161D5] focus:border-[#2161D5]"
            required
        />
    );
};

export default Input;
