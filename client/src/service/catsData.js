import axios from 'axios';

export const getCats = async () => {
  const { data } = await axios.get(`api/v1/cats/`, {
    params: { count: 10 },
  });
  return data;
};

export const addPointCat = async (winCatId, lostCatId) => {
  const { data } = await axios.post(`api/v1/scores/`, {
    winCatId,
    lostCatId,
  });
  return data;
};

export const getScores = async () => {
  const { data } = await axios.get(`api/v1/scores/`, {
    params: { count: 5 },
  });
  return data;
};
