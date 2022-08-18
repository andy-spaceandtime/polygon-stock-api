const { getStock } = require("../controllers/stock");

module.exports = (app) => {
  app.get("/stock/:ticker", getStock);
};
