import axios from 'axios';
import { getEnvVariables } from '../helpers';


const { VITE_API_URL } = getEnvVariables();

const portfolioApi = axios.create({
    baseURL: VITE_API_URL
});

// Interceptores
portfolioApi.interceptors.request.use( config => {
    
    config.headers = {
        // esparce otros interceptores
        ...config.headers,
        'x-token': localStorage.getItem('token'),
    };

    // Obtener y almacenar el usuario desde el token
    return config;
})


export default portfolioApi;
