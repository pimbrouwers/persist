/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    uglify = require("gulp-uglify");

gulp.task("minify:js", function(){
	return gulp.src('./src/persist.js')
				.pipe(uglify())
				.pipe(gulp.dest('./dist'));
});

gulp.task("minify", ["minify:js"]);
