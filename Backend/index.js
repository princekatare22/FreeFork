require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.Mongoose_URL)
  .then(function () {
    console.log("Connected to Database Succesfully!!");
  })
  .catch(function () {
    console.log("Some Error connecting Database!!");
  });

app.use(express.json());

app.listen(process.env.PORT, function () {
  console.log(`Server running on PORT ${process.env.PORT}`);
});
