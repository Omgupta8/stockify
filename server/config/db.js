const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to db");
  } catch (err) {
    console.log(`error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

// const url =
//   "https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/GetQuote.jsp?symbol=TCS";

// then((response) => {
//   console.log(response.data);
// }).catch((error) => {
//   console.error(error);
// });
