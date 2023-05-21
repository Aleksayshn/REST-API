// This script starts the server and connects to the database.

const app = require("./app");
const connectDB = require("./db/connection");

const PORT = process.env.PORT || 3000;

process.on("exit", (code) => {
  console.log(`Exit with code: ${code}`);
});

const serverStart = async () => {
  try {
    await connectDB();
    console.log("Database connection successful.");

    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    }).on("error", (error) => {
      process.exitCode = 1;
      console.log(`Server failed to start: ${error.message}`);
    });
  } catch (error) {
    process.exitCode = 1;
    console.log(error.message);
  }
};

serverStart();
