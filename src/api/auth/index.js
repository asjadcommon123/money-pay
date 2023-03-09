import toast from 'react-hot-toast';
import instance from '../../apiInstance';

export const loginUser = async (body) => {
  try {
    const response = await instance({
      method: 'post',
      url: 'login',
      data: body,
    });
    return response.data.access_token;
  } catch (error) {
    toast.error(error.response.data.detail);
  }
};

export const registerUser = async (body) => {
  try {
    const response = await instance({
      method: 'post',
      url: 'register',
      data: body,
    });
    return response.data;
  } catch (error) {
    toast.error(error.response.data.detail);
  }
};
