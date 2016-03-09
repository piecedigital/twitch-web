var express = require("express"),
	app = express(),
	port = process.env["PORT"] || 8080,

	path = require("path");
process.env["NODE_ENV"] = process.env["NODE_ENV"] || "dev";

if(process.env["NODE_ENV"] !== "dev") {
	morgan = require("morgan");
	app.use(morgan("dev"));
};
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./modules/routes"));

app.listen(port);
console.log(`Server listening port ${port}`);
