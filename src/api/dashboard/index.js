import instance from '../../apiInstance';

export const getProfiles = async (page) => {
  try {
    const response = await instance({
      method: 'get',
      url: `feed?page=${page}&page_size=15`,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const likePost = async (id) => {
  try {
    const response = await instance({
      method: 'put',
      url: `feed/like?id=${id}`,
      data: {
        title: 'Making PUT Requests with Axios',
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const userData = async () => {
  try {
    const response = await instance({
      method: 'get',
      url: `me`,
    });
    return response.data.user;
  } catch (error) {
    console.log(error);
  }
};
