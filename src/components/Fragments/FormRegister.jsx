import React from 'react';
import Button from '../Elements/Button';
import InputForm from '../Elements/Input';

const FormRegister = () => {
    return (
        <form>
            <InputForm label="Username" type="text" name="username" />
            <InputForm label="Email" type="email" name="email" />
            <InputForm label="Password" type="password" name="password" />
            <Button
                type="submit"
                styling="text-sm font-bold font-rubik text-center text-white capitalize bg-[#2161D5] w-full py-4 px-4  rounded hover:bg-[#205ac7]"
            >
                sign up
            </Button>
        </form>
    );
};

export default FormRegister;
