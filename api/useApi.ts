import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.107:3000',
});

export const useApi = () => ({
  getHomeInfo: async () => {
    const response = await api.get('/home');
    return response.data;
  },
  getEvents: async () => {
    const response = await api.get('/events');
    return response.data;
  },
  getPlaces: async () => {
    const response = await api.get('/places');
    return response.data;
  },
});
