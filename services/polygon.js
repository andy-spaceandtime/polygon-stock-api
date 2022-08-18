const { restClient } = require("@polygon.io/client-js");
const { POLYGON_API_KEY } = require("../config");

const rest = restClient(POLYGON_API_KEY);

const getLatestPrice = async (ticker) => {
  console.info(`Getting latest price for ${ticker}`);
  return await rest.stocks.previousClose(ticker, {
    adjusted: true,
    queryCount: 1,
  });
};

module.exports = {
  getLatestPrice,
};
