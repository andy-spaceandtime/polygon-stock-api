require("dotenv").config();

const SERVER_PORT = process.env.PORT || 9000;
const POLYGON_API_KEY = process.env.POLYGON_API_KEY || "YOUR_API_KEY";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

module.exports = {
  SERVER_PORT,
  POLYGON_API_KEY,
  PRIVATE_KEY,
};
