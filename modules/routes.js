var app = require("express")(),
	document = require("./document-feedback"),
	cookieParser = require("cookie-parser");

app.use(cookieParser());

app
.get("/", function(req, res, next) {
	// console.log(req.cookies);
	if(req.cookies["app-redirect"]) {
		console.log("redirect url found")
		var redirectURL = req.cookies["app-redirect"];
		res.clearCookie("app-redirect");
		res.redirect(redirectURL);
	} else {
		res.send("ok");
	}
})
.get("/user/:username", function(req, res, next) {
	document.getDocument("streamer", {
		title: `${req.params.username} | Twitch Web`,
		streamer: req.params.username
	}, function(page) {
		res.send(page);
	});
});

module.exports = app;