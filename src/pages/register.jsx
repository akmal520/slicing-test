import React from 'react';
import FormRegister from '../components/Fragments/FormRegister';
import AuthLayouts from '../components/Layouts/Auth/AuthLayouts';

const RegisterPage = () => {
    return (
        <AuthLayouts type="register">
            <FormRegister />
        </AuthLayouts>
    );
};

export default RegisterPage;
