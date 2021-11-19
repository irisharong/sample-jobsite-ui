const gulp = require("gulp");
const gap = require("gulp-append-prepend");

async function license() {
    gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Remote Recruit React - v1.10.0
=========================================================


*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* Remote Recruit React - v1.10.0
=========================================================


-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Remote Recruit React - v1.10.0
=========================================================


*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
}

gulp.task("licenses", license);
gulp.task("default", license);