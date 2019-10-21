import axios from 'axios';

// * NEW AXIOS INSTANCE
export const axiosWithAuth = () => {
    // * GRAB TOKEN IF IT EXIST
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:5000/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    })
}