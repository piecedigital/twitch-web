var express = require("express"),
	app = express(),
	port = process.env["PORT"] || 8080,
	morgan = require("morgan"),

	path = {
		join() {
			var arr = [];
			for(var i = 0; i < arguments.length; i++) {
				arr.push(arguments[i]);
			}
			return arr.join("/");
		}
	};
process.env["NODE_ENV"] = process.env["NODE_ENV"] || "dev";

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./modules/routes"));

app.listen(port);
console.log(`Server listening port ${port}`);