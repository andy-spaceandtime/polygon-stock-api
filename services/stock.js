const axios = require("axios").default;
const { POLYGON_API_KEY } = require("../config");

const getLatestPrice = async (ticker) => {
  return await axios.get(
    `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=${POLYGON_API_KEY}`
  );
};

module.exports = {
  getLatestPrice,
};
