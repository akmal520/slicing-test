import React from 'react';
import UserManagement from '../../components/Layouts/Admin/User';
import { useLogin } from '../../hooks/useLogin';

const UserManagementPage = () => {
    const { username, image } = useLogin();
    return (
        <div>
            <UserManagement username={username} img={image} />
        </div>
    );
};

export default UserManagementPage;
