var docFeed = require("./modules/document-feedback");

describe("Testing 'document-feedback.js'", function() {
	it("testing function 'getDocument'", function() {
		expect(typeof docFeed.getDocument).toBe("function");
//		expect(typeof docFeed.getDocument("streamer")).toBe("string");
	});
});
