const { getLatestPrice } = require("../services/polygon");

const getStock = async (req, res, next) => {
  const { ticker } = req.params;

  try {
    const data = await getLatestPrice(ticker);
    console.log("data: ", data);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getStock,
};
