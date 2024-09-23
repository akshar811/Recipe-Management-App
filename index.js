const express = require("express");
const connect = require("./config/db");
const cookies = require("cookie-parser");
const Route = require("./routes/user_route");
const RecipeRoute = require("./routes/Recipe_route");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookies());

app.use("/user", Route);
app.use("/Recipe", RecipeRoute);


app.use((err, req, res, next) => {
  let { statusCode = 500, message = "something went wrong" } = err;
  console.log(message);
  res.status(statusCode).send(message);
});

app.listen(process.env.PORT, () => {
  connect();
  console.log(`listening on port ${process.env.PORT}`);
});
