import axios from 'axios';

export const getAllUsers = (callback) => {
    axios
        .get('https://dummyjson.com/users')
        .then((response) => {
            callback(response.data.users);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getUser = (id, callback) => {
    axios
        .get(`https://dummyjson.com/users/${id}`)
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const updateUser = (id, data, callback) => {
    axios
        .put(`https://dummyjson.com/users/${id}`, data)
        .then((response) => {
            callback(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const deleteUser = (id, callback) => {
    axios
        .delete(`https://dummyjson.com/users/${id}`)
        .then((response) => {
            callback(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const searchUser = (search, callback) => {
    axios
        .get(`https://dummyjson.com/users/search?q=${search}`)
        .then((response) => {
            callback(response.data.users);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const addUser = (data, callback) => {
    axios
        .post('https://dummyjson.com/users/add', data)
        .then((response) => {
            callback(response);
        })
        .catch((error) => {
            console.log(error);
        });
}
