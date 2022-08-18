const schedule = require("node-schedule");

const { updateAPPLStockPrice } = require("../services/aggregator");

schedule.scheduleJob("*/5 * * * *", updateAPPLStockPrice);
