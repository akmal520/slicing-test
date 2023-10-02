import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const login = (data, callback) => {
    axios
        .post('https://dummyjson.com/auth/login', data)
        .then((response) => {
            callback(true, response.data.token);
        })
        .catch((error) => {
            callback(false, error.response.data.message);
        });
};

export const getDataLogin = (token) => {
    const decode = jwt_decode(token);
    // console.log(decode);
    return decode;
};
