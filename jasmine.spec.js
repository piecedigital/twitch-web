describe("Testing 'document-feedback.js'", function() {
	var docFeed;

	it("testing function 'getDocument'", function() {
		docFeed = require("./modules/document-feedback");
		expect(typeof docFeed.getDocument).toBe("function");
		expect(typeof docFeed.getDocument("streamer")).toBe("string");
	});
});
