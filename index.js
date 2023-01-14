// get app obj
const app = require("./app");

// declare port
const port = 3000;

// listen to port
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
