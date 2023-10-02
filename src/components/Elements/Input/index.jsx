import React from 'react';
import Input from './Input';
import Label from './Label';

const InputForm = (props) => {
    const { label, name, type } = props;
    return (
        <div className="pb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} name={name} />
        </div>
    );
};

const InputCheckbox = (props) => {
    const { label, name } = props;
    return (
        <div className="flex items-center gap-2 mb-5">
            <input
                id="remberme"
                type="checkbox"
                name={name}
                className="w-4 h-4 text-blue-600 bg-gray-300 border-gray-300 rounded ring-0 focus:ring-0 cursor-pointer"
            />
            <label
                htmlFor="remberme"
                className="ml-1 text-sm font-normal font-rubik capitalize text-secondary/80 cursor-pointer"
            >
                {label}
            </label>
        </div>
    );
};

InputForm.InputCheckbox = InputCheckbox;

export default InputForm;
