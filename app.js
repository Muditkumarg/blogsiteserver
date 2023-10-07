const express = require("express");
const cors = require("cors");
const router = require("./Router/Routes");
const mongoose = require("./DataBase/db");

const app = express();
app.use(express.json());
app.use(cors());

// app.use(
//   cors({
//     origin: "https://localhost:3000",
//   })
// );
app.use((req, res, next) => {
  console.log("HTTP Method " + req.method + "URL" + req.url);
  next();
});

app.use("/uploads", express.static("./uploads"));

app.use("/", router);

app.listen(4000, () => {
  console.log("port 4000 activate");
});
