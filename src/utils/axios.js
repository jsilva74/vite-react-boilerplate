import axios from 'axios';

import useAppStore from '@/storage/appStore';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API,
});
instance.interceptors.request.use(
  async function (config) {
    const token = useAppStore.getState().auth.token;
    if (token)
      Object.assign(config.headers, { Authorization: `Bearer ${token}` });
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
