import axios from 'axios';

// adjust baseURL to your backend API root
const api = axios.create({
  baseURL: '/api',   // e.g. 'https://your-backend.com/api'
  withCredentials: true, // if you need cookies
});

export const signIn = async (credentials) => {
  const { data } = await api.post('/auth/signin', credentials);
  return data; // expects { token, user } from server
};
