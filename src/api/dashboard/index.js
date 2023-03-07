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
