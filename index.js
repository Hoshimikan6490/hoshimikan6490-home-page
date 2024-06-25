const express = require("express");
const app = express();
let port = 8888;

app.use(express.static("./images"));
app.use("/images", express.static("./images"));

app.get("/", async function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, function () {
  console.log(`[NodeJS] Application Listening on Port ${port}`);
});
