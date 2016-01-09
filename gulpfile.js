var gulp = require("gulp");
var sass = require('node-sass');
var fs = require("fs");

function renderSass() {
	sass.render({
	  file: "./private/sass/style.scss",
	  outputStyle: "nested",
	  outFile: "./public/css/style.css"
	}, function(err, result) {
		if(err) throw err;

		//console.log(result.css.toString());
		fs.writeFile('./public/css/style.css', result.css.toString(), function (err) {
		  if (err) throw err;

		  console.log('CSS rendered and saved');
		});
	});
}


gulp.task("serve", function() {
	gulp.watch(["./private/sass/*.scss"]).on("change", renderSass);
});

gulp.task("default", ["serve"]);