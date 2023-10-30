import React from 'react';
import FormLogin from '../components/Fragments/FormLogin';
import AuthLayouts from '../components/Layouts/Auth/AuthLayouts';

const LoginPage = () => {
    const token = localStorage.getItem('token');
    if (token) {
        window.location.href = '/admin/dashboard';
    }
    return (
        <AuthLayouts type="login">
            <FormLogin />
        </AuthLayouts>
    );
};
export default LoginPage;
