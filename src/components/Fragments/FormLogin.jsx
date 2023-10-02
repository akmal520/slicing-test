import React, { useState } from 'react';
import { login } from '../../services/auth.service';
import Button from '../Elements/Button';
import InputForm from '../Elements/Input';

const FormLogin = (props) => {
    const [loginFailed, setLoginFailed] = useState('');
    const handleLogin = (event) => {
        event.preventDefault();

        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        login(data, (stats, res) => {
            if (stats) {
                localStorage.setItem('token', res);
                window.location.href = '/admin/dashboard';
                // console.log(res);
            } else {
                setLoginFailed(res);
            }
        });
    };
    return (
        <form onSubmit={handleLogin}>
            <InputForm label="Username" type="text" name="username" />
            <InputForm label="Password" type="password" name="password" />
            <InputForm.InputCheckbox label="remember me" name="rememberme" />
            <Button
                type="submit"
                styling="text-sm font-bold font-rubik text-center text-white capitalize bg-[#2161D5] w-full py-4 px-4 rounded hover:bg-[#205ac7]"
            >
                sign in
            </Button>
            {loginFailed && (
                <p className="text-red-500 text-center mt-5 font-bold">
                    {loginFailed}
                </p>
            )}
        </form>
    );
};

export default FormLogin;
