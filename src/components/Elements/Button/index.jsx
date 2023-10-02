import React from 'react';

const Button = (props) => {
    const {
        children = '. . .',
        styling = 'bg-black p-2 text-white rounded',
        type = 'button',
        onClick = () => {},
    } = props;
    return (
        <>
            <button className={styling} type={type} onClick={onClick}>
                {children}
            </button>
        </>
    );
};

export default Button;
