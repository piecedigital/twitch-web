var app = require("express")(),
	document = require("./document-feedback");

app
.get("/", function(req, res, next) {
	res.send("ok");
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