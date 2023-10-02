import React from 'react';
import DashboardLayout from '../../components/Layouts/Admin/Dashboard/Dashboard';
import { useLogin } from '../../hooks/useLogin';

const DashboardPage = () => {
    const { username, image } = useLogin();
    return (
        <div>
            <DashboardLayout username={username} img={image} />
        </div>
    );
};

export default DashboardPage;
