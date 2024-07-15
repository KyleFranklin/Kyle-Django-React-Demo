import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

console.log('API Base URL:', process.env.REACT_APP_API_BASE_URL); // Check if the base URL is correctly loaded

export default apiClient;
