import { useEffect, useState } from 'react';
import { getDataLogin } from '../services/auth.service';

export const useLogin = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setData(getDataLogin(token));
        } else {
            window.location.href = '/login';
        }
    }, []);
    return data;
};
