"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const uglifycss = require("gulp-uglifycss");
const prettier = require("@bdchauvette/gulp-prettier");
const uglify = require("gulp-uglify");
var pump = require("pump");
const { src, dest } = require("gulp");

gulp.task("default", function() {
  gulp.watch("src/scss/", gulp.series("sass"));
  gulp.watch("src/js/", gulp.series("compress"));
});

gulp.task("prettify", async function(cb) {
  gulp
    .src("src/**/*.js")
    .pipe(
      prettier({
        // Normal prettier options, e.g.:
        singleQuote: true,
        trailingComma: "all"
      })
    )
    .pipe(gulp.dest(file => file.base));
});

gulp.task("compress", async function(cb) {
  pump([gulp.src("src/js/*.js"), uglify(), gulp.dest("dist/js")], cb);
});

gulp.task("sass", function() {
  gulp
    .src("src/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      uglifycss({
        maxLineLen: 80,
        uglyComments: true
      })
    )
    .pipe(
      autoprefixer({
        browserlist: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css/"));

  return new Promise(function(resolve, reject) {
    resolve();
  });
});
