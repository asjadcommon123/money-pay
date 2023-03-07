import axios from 'axios';

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
export default instance;

// headers: {
//     Authorization: 'Bearer ',
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   // .. other options
