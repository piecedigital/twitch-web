var app = require("express")(),
	document = require("./document-feedback");

app.get("/", function(req, res, next) {
	res.send(document.getDocument("streamer", {
		title: `PieceDigital | Twitch Web`,
		streamer: "PieceDigital"
	}));
});

module.exports = app;