// get app obj
const app = require("./app");

// to access env variables
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
// specify custom path to look for env variables
dotenv.config({ path: "./config.env" });

// declare DB str with password replaced with secret from env variables
const DB = process.env.DB.replace("<password>", process.env.PASSWORD);
// connect to database
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

// declare port
const port = process.env.PORT || 5000;

// listen to port
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
