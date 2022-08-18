const { getLatestPrice } = require("./polygon");

const updateAPPLStockPrice = async () => {
  const res = await getLatestPrice("APPL");
};

module.exports = {
  updateAPPLStockPrice,
};
