const dataHttp = require('./helpers/helper');

const getData = async (keyword) => {
  return await dataHttp.getData(`/${keyword}`);
};

module.exports = {
    getData,
};