const axios = require('axios');

const getData = async (url) => {
  const dataHttp = axios.create({
    baseURL: 'http://dummy.restapiexample.com/api/v1/employee',
    headers: {
      Accept: 'application/json',
    },
  });

  try {
    console.log('url', url);
    const res =  await dataHttp.get(url);
    return res.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports = {
    getData,
};