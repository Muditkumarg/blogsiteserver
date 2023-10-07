const express = require("express");
const cors = require("cors");
const router = require("./Router/Routes");
const mongoose = require("./DataBase/db");
const dotenv = require("dotenv");
const http = require("http");

const app = express();
app.use(express.json());
const server = http.createServer(app);
app.use(cors());
dotenv.config();
app.use(
  cors({
    origin: "https://localhost:3000",
  })
);
app.use((req, res, next) => {
  console.log("HTTP Method " + req.method + "URL" + req.url);
  next();
});

app.use("/uploads", express.static("./uploads"));

app.use("/", router);

server.listen(process.env.PORT || 4000, () => {
  console.log("port 4000 activate");
});
