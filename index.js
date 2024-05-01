const express = require("express");
const app = express();
let port = 8080;

///圧縮ライブラリ compression を使用
const compression = require("compression");

// 全HTTPレスポンスでgzip配信有効化
app.use(compression());

app.use(express.static("./images"));
app.use("/images", express.static("./images"));

app.get("/", async function (req, res) {
  res.redirect("/about-me")
});

app.get("/about-me", async function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, function () {
  console.log(`[NodeJS] Application Listening on Port ${port}`);
});
