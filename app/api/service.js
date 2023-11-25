import axios from 'axios';

const baseURL = 'https://dummyjson.com'; 

const api = axios.create({
  baseURL,
});

export const getRequestData = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw error; 
  }
};
