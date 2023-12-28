import axios from 'axios';
import useUserStore from 'storage/userStore';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API,
});
instance.interceptors.request.use(
  async function (config) {
    const token = useUserStore.getState().token;
    if (token)
      Object.assign(config.headers, { Authorization: `Bearer ${token}` });
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
