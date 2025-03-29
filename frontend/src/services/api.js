import axios from 'axios';

const API = axios.create({ baseURL: 'http://54.206.62.12:5001' });

export const register = (data) => API.post('/auth/register', data);
export const login = (data) => API.post('/auth/login', data);