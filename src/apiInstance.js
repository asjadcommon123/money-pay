import axios from 'axios';
import { resetState } from './redux/authSlice';

const instance = axios.create({
  baseURL: 'https://testapp1-khaki.vercel.app/',
});

let store;

export const injectStore = (_store) => {
  store = _store;
};

instance.interceptors.request.use((config) => {
  const {
    auth: { token },
  } = store.getState();

  const { noToken } = config.headers;
  delete config.headers.noToken;

  if (!token || noToken) return config;

  const newConfig = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  };
  return newConfig;
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const {
      auth: { token },
    } = store.getState();
    if (error.response && error.response.status === 401 && token) {
      store.dispatch(resetState());
    }
    return Promise.reject(error);
  }
);
export default instance;
