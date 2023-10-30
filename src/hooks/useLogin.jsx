import { useEffect, useState } from 'react';
import { getDataLogin } from '../services/auth.service';

export const useLogin = () => {
    const [data, setData] = useState({});
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            setData(getDataLogin(token));
        } else {
            window.location.href = '/login';
        }
    }, []);
    return data;
};
