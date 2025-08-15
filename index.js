const compression = require("compression");
const express = require("express");
const app = express();
let port = 80;

// GZIP圧縮を有効にする
app.use(compression());

app.use(express.static("./images"));
app.use("/images", express.static("./images"));

app.get("/", async function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/activity", async function (req, res) {
  res.sendFile(__dirname + "/activity.html");
});

app.get("/style.css", async function (req, res) {
  res.sendFile(__dirname + "/style.css");
});

app.listen(port, function () {
  console.log(`[NodeJS] Application Listening on Port ${port}`);
});
