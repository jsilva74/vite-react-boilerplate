import useAppStore from '@/storage/appStore';
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API,
});
instance.interceptors.request.use(
  async function (config) {
    const controller = new AbortController();
    const token = useAppStore.getState().auth.token;
    if (!token && !config.url.toUpperCase().includes('/')) {
      controller.abort();
    }
    if (token) {
      Object.assign(config.headers, { Authorization: `Bearer ${token}` });
    }
    return {
      ...config,
      signal: controller.signal,
    };
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
