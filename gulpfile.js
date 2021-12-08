"use strict";

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  mmq = require("gulp-merge-media-queries"),
  sourcemaps = require("gulp-sourcemaps"),
  purgecss = require("gulp-purgecss"),
  purgecssWordpress = require("purgecss-with-wordpress");

function style() {
  // Where should gulp look for the sass files?
  // My .sass files are stored in the styles folder
  // (If you want to use scss files, simply look for *.scss files instead) 
  return (
    gulp
      .src("css/scss/elements/*.scss")
      // Initialize sourcemaps before compilation starts
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))

      // .pipe(purgecss({
      //     content: ['**/*.php', '*.php', '**/*/*.php', '**/**/*.php'],
      //     safelist: [
      //         ...purgecssWordpress.safelist,
      //         'tel',
      //         'collapsed',
      //         'collapsing',
      //         'current-menu-item',
      //         'modal',
      //         'fade',
      //         'input',
      //         'ltr',
      //         'tooltip',
      //         'embed-responsive',
      //         'embed-responsive-16by9',
      //         'iframe',
      //         'show',
      //         'modal-backdrop',
      //         'wpcf7-list-item',
      //         '[type="checkbox"]',
      //         '-color',
      //         'remove_scroll_arrow',
      //         /^wpcf7-list-item-(-.*)?$/,
      //         /^tooltip(-.*)?$/,
      //         /^modal(-.*)?$/,
      //         /^slick(-.*)?$/,
      //         /^wpcf7(-.*)?$/,
      //         /^wpcf7(-.*)?$/,
      //     ],
      //     variables: true
      // }))

      .pipe(
        mmq({
          log: true,
        })
      )

      // Use postcss with autoprefixer and compress the compiled file using cssnano
      .pipe(
        postcss([
          autoprefixer(),
          cssnano({
            preset: [
              "default",
              {
                discardComments: {
                  removeAll: false,
                },
              },
            ],
          }),
        ])
      )

      // Now add/write the sourcemaps
      .pipe(sourcemaps.write(""))
      .pipe(gulp.dest("css/scss/main"))
      .pipe(sourcemaps.init({ loadMaps: true }))
  );
}

function watch() {
  // gulp.watch takes in the location of the files to watch for changes
  // and the name of the function we want to run on change
  gulp.watch(
    [
      "css/scss/**/*.scss",
      "css/scss/*/*.scss",
      "css/scss/*/*/*.scss",
      "css/scss/*.scss",
      "*.scss",
    ],
    style
  );
}

exports.default = watch  