//BIBLIOTECA QUE FAZ A COMUNICAÇÃO COM O BACKEND
import axios from 'axios';

const api = axios.create({
     baseURL: 'http://localhost:5005'
});

export default api;