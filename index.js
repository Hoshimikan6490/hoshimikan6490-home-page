const compression = require("compression");
const express = require("express");
const app = express();
let port = 80;

// GZIP圧縮を有効にする
app.use(compression());

app.use(express.static("./public/images"));
app.use("/images", express.static("./public/images"));

app.get("/", async function (req, res) {
	res.sendFile(`${__dirname}/public/index.html`);
});

app.get("/activity", async function (req, res) {
	res.sendFile(`${__dirname}/public/activity.html`);
});

app.get("/style.css", async function (req, res) {
	res.sendFile(`${__dirname}/public/style.css`);
});

app.get("/robots.txt", async function (req, res) {
	res.sendFile(`${__dirname}/public/robots.txt`);
});

app.get("/sitemap.xml", async function (req, res) {
	res.sendFile(`${__dirname}/public/sitemap.xml`);
});

app.listen(port, function () {
	console.log(`[NodeJS] Application Listening on Port ${port}`);
});
