require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const StudentRoutes = require("./routes/StudentRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/students", StudentRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server listining on port " + process.env.PORT);
  mongoose
    .connect(process.env.URL)
    .then((data) => {
      console.log("connect to database : ", data.connection.name);
    })
    .catch((err) => {
      console.log("Error : ", err);
    });
});
