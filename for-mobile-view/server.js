const express = require("express");
const app = express();

app.use(express.static("../images"));
app.use("/images", express.static("../images"));

app.get("/", async function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function () {
  console.log("[NodeJS] Application Listening on Port 8080");
});
