import React from 'react';
import FormLogin from '../components/Fragments/FormLogin';
import AuthLayouts from '../components/Layouts/Auth/AuthLayouts';

const LoginPage = () => {
    return (
        <AuthLayouts type="login">
            <FormLogin />
        </AuthLayouts>
    );
};
export default LoginPage;
