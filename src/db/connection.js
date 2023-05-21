const { connect } = require("mongoose");

const uriDb = process.env.DB_HOST;

const connectDB = async () => {
  return await connect(uriDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;