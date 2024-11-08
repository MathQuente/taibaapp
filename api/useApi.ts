import axios from 'axios';

const api = axios.create({
  baseURL: 'https://c1fcff69-e82b-4bbb-89e1-1cac275747fb.mock.pstmn.io',
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
