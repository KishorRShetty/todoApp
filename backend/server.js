const app = require("./app");
const connectDB = require("./config/database");
const dotEnv = require("dotenv");

dotEnv.config({ path: "backend/config/config.env" });

connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT}`);
});
