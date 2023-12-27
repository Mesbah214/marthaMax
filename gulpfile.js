const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");

// File path
const files = {
  scssPath: "app/scss/**/*.scss",
  jsPath: "app/js/**/*.js",
  imgPath: "app/images/*",
};

// ScSS Task
function scssTask() {
  return src(files.scssPath)
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("dist/css/"))
    .pipe(browsersync.stream());
}

// Javascript Task
function jsTask() {
  return src(files.jsPath)
    .pipe(terser())
    .pipe(concat("script.js"))
    .pipe(dest("dist/js/"));
}

// Browser-sync Task
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: "dist",
    },
  });
  cb();
}

// Imagemin Task
function imageMin() {
  return src(files.imgPath).pipe(imagemin()).pipe(dest("dist/images"));
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch("dist/**/*.html", browsersyncReload);
  watch(files.scssPath, scssTask);
  watch(files.jsPath, series(jsTask, browsersyncReload));
  watch(files.imgPath, imageMin);
}

// Default gulp Task
exports.default = series(
  imageMin,
  scssTask,
  jsTask,
  browsersyncServe,
  watchTask
);

exports.build = series(imageMin, scssTask, jsTask)
