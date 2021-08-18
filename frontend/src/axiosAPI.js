import axios from 'axios';

const axiosAPI = axios.create({
        withCredentials: true,
        baseURL: 'http://localhost:4000'
})

export default axiosAPI;