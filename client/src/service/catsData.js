// import axios from 'axios';

const getCats = async () => {
  //   const data = await axios.get(``);
  //   return data;
  const data = await Promise.resolve([
    {
      name: 'chat1',
      url: 'http://25.media.tumblr.com/tumblr_m44vnvR00W1rtuomto1_1280.jpg',
      id: '46o',
    },
    {
      name: 'chat4',
      url: 'http://25.media.tumblr.com/tumblr_m3jbdxqnma1qa8o34o1_500.jpg',
      id: 'a4e',
    },
  ]);
  return data;
};

export default getCats;
