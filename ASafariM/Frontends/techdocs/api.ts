// techdocs/api.ts
import axios, { AxiosInstance } from 'axios';

interface CustomAxiosInstance extends AxiosInstance {
    getUsers: () => Promise<any>;
}

const api = axios.create({
    baseURL: 'http://localhost:3000', // Ensure this matches your backend's base URL
    withCredentials: true, // Include credentials if required
}) as CustomAxiosInstance;

api.getUsers = async () => {
    const response = await api.get('/users');
    return response.data;
};

export default api;

